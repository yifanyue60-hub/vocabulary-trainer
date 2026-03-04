import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Mic, Volume2, CheckCircle2, XCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { QUESTIONS } from '../data/mockWords';

const playDing = () => {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    gain.gain.setValueAtTime(0.5, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
    osc.start();
    osc.stop(ctx.currentTime + 0.5);
  } catch (e) {}
};

const playError = () => {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(300, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.3);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
    osc.start();
    osc.stop(ctx.currentTime + 0.3);
  } catch (e) {}
};

const speak = (text: string, lang = 'en-US') => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    let textToSpeak = text;
    if (lang === 'en-US') {
      textToSpeak = textToSpeak.replace(/\bsb\b/gi, 'somebody').replace(/\bsth\b/gi, 'something');
    }
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = lang;
    window.speechSynthesis.speak(utterance);
  }
};

function editDistance(s1: string, s2: string) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();
  let costs = new Array();
  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0) costs[j] = j;
      else {
        if (j > 0) {
          let newValue = costs[j - 1];
          if (s1.charAt(i - 1) !== s2.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0) costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}

function getSimilarity(s1: string, s2: string) {
  let longer = s1;
  let shorter = s2;
  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }
  let longerLength = longer.length;
  if (longerLength === 0) return 1.0;
  return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength.toString());
}

export default function StudentApp() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState<any>(null);
  const [step, setStep] = useState<'welcome' | 'question' | 'feedback' | 'summary'>('welcome');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [questions, setQuestions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [wrongWords, setWrongWords] = useState<any[]>([]);
  const [isListening, setIsListening] = useState(false);
  const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [transcript, setTranscript] = useState('');
  
  const recognitionRef = useRef<any>(null);
  const currentWord = questions[currentIndex];

  useEffect(() => {
    fetch(`/api/students/${name}`)
      .then(res => {
        if (!res.ok) throw new Error('Not found');
        return res.json();
      })
      .then(data => {
        setStudent(data);
        setPage(data.currentPage);
        const pageQuestions = QUESTIONS.filter(q => q.page === data.currentPage);
        // Shuffle the questions randomly
        const shuffledQuestions = [...pageQuestions].sort(() => Math.random() - 0.5);
        setQuestions(shuffledQuestions);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch student:', err);
        setIsLoading(false);
      });
  }, [name]);

  const statusRef = useRef(status);
  const transcriptRef = useRef(transcript);
  const silenceTimerRef = useRef<any>(null);

  useEffect(() => {
    statusRef.current = status;
  }, [status]);

  useEffect(() => {
    transcriptRef.current = transcript;
  }, [transcript]);

  const checkAnswerLogic = (spokenText: string) => {
    let normalizedSpoken = spokenText.toLowerCase();
    
    normalizedSpoken = normalizedSpoken
      .replace(/\bsomebody\b/g, 'sb')
      .replace(/\bsomeone\b/g, 'sb')
      .replace(/\bsomething\b/g, 'sth');

    return currentWord.answers.some(ans => {
      const normalizedAns = ans.toLowerCase();
      const similarity = getSimilarity(normalizedSpoken, normalizedAns);
      return similarity >= 0.6 || normalizedSpoken.includes(normalizedAns);
    });
  };

  const handleCorrect = () => {
    if (statusRef.current !== 'idle') return;
    setStatus('correct');
    playDing();
    const ttsLang = 'en-US';
    speak(currentWord.answers[0], ttsLang);
    const displayWord = currentWord.displayAnswer || currentWord.answers[0];
    const delay = Math.max(1500, Math.min(4000, displayWord.length * 100));
    setTimeout(() => {
      handleNext();
    }, delay);
  };

  const handleWrong = () => {
    if (statusRef.current !== 'idle') return;
    setStatus('wrong');
    playError();
    const ttsLang = 'en-US';
    speak(currentWord.answers[0], ttsLang);
    setWrongWords(prev => {
      if (!prev.find(w => w.id === currentWord.id)) {
        return [...prev, currentWord];
      }
      return prev;
    });
    setTimeout(() => {
      setStep('feedback');
    }, 1000);
  };

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.maxAlternatives = 1;

      recognition.onresult = (event: any) => {
        if (statusRef.current !== 'idle') return;

        let fullTranscript = '';
        for (let i = 0; i < event.results.length; ++i) {
          fullTranscript += event.results[i][0].transcript;
        }
        
        const currentTranscript = fullTranscript.toLowerCase().replace(/[.,!?。，！？]/g, '').trim();
        setTranscript(currentTranscript);
        
        if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
        
        const isCorrect = checkAnswerLogic(currentTranscript);
        
        if (isCorrect) {
          recognition.stop();
          handleCorrect();
        } else {
          silenceTimerRef.current = setTimeout(() => {
            if (statusRef.current === 'idle') {
              recognition.stop();
              handleWrong();
            }
          }, 3000);
        }
      };

      recognition.onerror = (event: any) => {
        if (event.error === 'no-speech') {
          setTranscript('未检测到声音，请再试一次');
        } else {
          console.error('Speech recognition error', event.error);
          setTranscript(`识别错误: ${event.error}`);
        }
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
        if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
        
        if (statusRef.current === 'idle' && transcriptRef.current) {
           const isCorrect = checkAnswerLogic(transcriptRef.current);
           if (isCorrect) handleCorrect();
           else handleWrong();
        }
      };

      recognitionRef.current = recognition;
    }
  }, [currentIndex, questions]);

  useEffect(() => {
    // Removed auto TTS for prompt
  }, [step, currentIndex, status]);

  const toggleListening = () => {
    if (status !== 'idle' || step !== 'question') return;
    if (isListening) {
      try {
        recognitionRef.current?.stop();
        setIsListening(false);
      } catch (e) {}
    } else {
      try {
        recognitionRef.current?.start();
        setIsListening(true);
      } catch (e) {}
    }
  };

  const handleNext = () => {
    setStatus('idle');
    setTranscript('');
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setStep('question');
    } else {
      setStep('summary');
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
      });

      // Save progress to backend
      const correctCount = questions.length - wrongWords.length;
      const accuracy = Math.round((correctCount / questions.length) * 100) + '%';
      const today = new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-');
      
      fetch(`/api/students/${name}/progress`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          currentPage: page + 1,
          completed: true,
          accuracy,
          lastCompletedDate: today,
          wrongWords: wrongWords.map(w => w.id)
        })
      }).catch(err => console.error('Failed to save progress:', err));
    }
  };

  const handleRestart = () => {
    setStep('question');
    setCurrentIndex(0);
    setWrongWords([]);
    setStatus('idle');
    setTranscript('');
    // Shuffle the questions randomly again
    const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    setQuestions(shuffledQuestions);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!student) {
    return <div className="min-h-screen flex items-center justify-center text-gray-500">找不到该学生</div>;
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center p-6 font-sans text-center">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8 shadow-inner">
          <span className="text-5xl">🎉</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">太棒了，{name}！</h1>
        <p className="text-xl text-gray-600 mb-8">你已经完成了第 {page} 页的所有任务，或者该页暂无题目。</p>
        <button onClick={() => navigate('/')} className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold shadow-lg hover:bg-blue-700 transition-all">
          返回首页
        </button>
      </div>
    );
  }

  if (step === 'welcome') {
    return (
      <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center p-6 font-sans">
        <div className="w-full max-w-md flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-8 shadow-inner">
            <span className="text-5xl">🎧</span>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-tight">Hi, {name || '同学'}！</h1>
          <p className="text-xl text-gray-600 mb-12 font-medium">今天提问：第 <span className="text-blue-600 font-bold">{page}</span> 页单词，共 <span className="text-blue-600 font-bold">{questions.length}</span> 题。</p>
          
          <button 
            onClick={() => setStep('question')}
            className="w-full py-5 bg-[#FF8A00] text-white rounded-full text-xl font-bold shadow-[0_6px_0_0_#E67A00] active:translate-y-[6px] active:shadow-none transition-all flex items-center justify-center gap-3"
          >
            <Mic size={24} /> 按住开始今天的挑战
          </button>
        </div>
      </div>
    );
  }

  if (step === 'summary') {
    const correctCount = questions.length - wrongWords.length;
    const accuracy = Math.round((correctCount / questions.length) * 100);
    
    return (
      <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center p-6 font-sans">
        <div className="w-full max-w-md bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 text-center animate-in fade-in zoom-in-95 duration-500">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-3xl font-extrabold text-gray-800 mb-2">挑战完成！</h2>
          <p className="text-lg text-gray-600 mb-8 font-medium">正确率 <span className="text-green-500 font-bold">{accuracy}%</span>（答对{correctCount}词，答错{wrongWords.length}词）</p>
          
          {wrongWords.length > 0 && (
            <div className="text-left bg-red-50 rounded-2xl p-5 mb-8 border border-red-100">
              <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                <span className="text-xl">📝</span> 今日错词本
              </h3>
              <ul className="space-y-3">
                {wrongWords.map(w => (
                  <li key={w.id} className="flex justify-between items-center border-b border-red-100/50 pb-3 last:border-0 last:pb-0">
                    <span className="font-bold text-gray-800 text-lg">{w.displayAnswer}</span>
                    <span className="text-gray-500 font-medium text-right ml-4">{w.prompt}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="bg-blue-50 text-blue-700 p-4 rounded-2xl mb-6 border border-blue-100">
            <p className="font-bold mb-1">进度已自动保存</p>
            <p className="text-sm opacity-80">下次将自动进入第 {page + 1} 页</p>
          </div>
          
          <div className="flex flex-col gap-3">
            <button 
              onClick={handleRestart}
              className="w-full py-4 bg-blue-600 text-white rounded-full text-lg font-bold shadow-[0_4px_0_0_#2563EB] active:translate-y-[4px] active:shadow-none transition-all"
            >
              再来一遍
            </button>
            <button 
              onClick={() => navigate('/')}
              className="w-full py-4 bg-[#10B981] text-white rounded-full text-lg font-bold shadow-[0_4px_0_0_#059669] active:translate-y-[4px] active:shadow-none transition-all"
            >
              返回首页
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Question & Feedback steps
  let bgColor = 'bg-[#F9FAFB]';
  if (status === 'correct') bgColor = 'bg-[#10B981]';
  if (status === 'wrong') bgColor = 'bg-[#F43F5E]';

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-300 ${bgColor} p-4 font-sans`}>
      <div className="w-full max-w-[400px] h-[100vh] max-h-[800px] bg-white rounded-[2.5rem] shadow-2xl flex flex-col relative overflow-hidden">
        
        {/* Header Progress */}
        <div className="p-6 flex items-center gap-4 z-10">
          <span className="font-bold text-gray-400 w-12 text-center">{currentIndex + 1}/{questions.length}</span>
          <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#3B82F6] transition-all duration-500 rounded-full"
              style={{ width: `${((currentIndex) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Main Question Area */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 tracking-tight leading-snug">{currentWord.prompt}</h2>
          </div>
          <button 
            onClick={() => speak(currentWord.prompt, 'zh-CN')}
            className="w-14 h-14 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center hover:bg-blue-100 transition-colors shadow-sm"
          >
            <Volume2 size={28} />
          </button>
        </div>

        {/* Status Overlays */}
        {status === 'correct' && (
          <div className="absolute inset-0 bg-[#10B981] flex flex-col items-center justify-center text-white z-20 animate-in fade-in zoom-in duration-300">
            <CheckCircle2 size={100} className="mb-6 drop-shadow-md" />
            <h2 className="text-5xl font-extrabold drop-shadow-md text-center px-4">{currentWord.displayAnswer}</h2>
          </div>
        )}
        {status === 'wrong' && step === 'question' && (
          <div className="absolute inset-0 bg-[#F43F5E] flex flex-col items-center justify-center text-white z-20 animate-in fade-in zoom-in duration-300">
            <XCircle size={100} className="mb-6 drop-shadow-md" />
            <h2 className="text-3xl font-bold drop-shadow-md">Oops! 发音不太对</h2>
          </div>
        )}

        {/* Feedback Modal */}
        {step === 'feedback' && (
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-end z-30 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-[#FFFBEB] rounded-t-[2.5rem] p-8 w-full shadow-2xl animate-in slide-in-from-bottom-full duration-300 h-[85%] flex flex-col">
              
              <div className="flex-1 overflow-y-auto pb-6">
                <div className="inline-block bg-red-100 text-red-500 px-4 py-1.5 rounded-full font-bold text-sm mb-6 border border-red-200">
                  Oops! 发音不太对
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="text-3xl font-extrabold text-[#D97706] leading-tight">{currentWord.displayAnswer}</h3>
                  <button onClick={() => speak(currentWord.answers[0], 'en-US')} className="p-3 bg-orange-100 text-orange-600 rounded-full hover:bg-orange-200 transition-colors shrink-0">
                    <Volume2 size={24} />
                  </button>
                </div>

                {currentWord.feedback.phonetics && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {currentWord.feedback.phonetics.map((p, idx) => (
                      <div key={idx} className="flex flex-col items-center bg-white rounded-xl shadow-sm border border-orange-200/60 p-2 min-w-[3.5rem]">
                        <span className="text-xl font-bold text-gray-800">{p.letters}</span>
                        <span className="text-sm text-orange-500 font-medium">{p.phoneme}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="space-y-6 text-gray-700">
                  <div className="bg-white/50 p-4 rounded-2xl border border-yellow-200/50 space-y-3">
                    {currentWord.feedback.details.map((detail, idx) => (
                      <p key={idx} className="leading-relaxed text-lg text-gray-700">
                        <span className="font-bold text-[#8B5CF6] mr-2">•</span>
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-auto">
                <button 
                  onClick={handleNext}
                  className="w-full py-5 bg-[#10B981] text-white rounded-full text-xl font-bold shadow-[0_6px_0_0_#059669] active:translate-y-[6px] active:shadow-none transition-all"
                >
                  我记住了，继续
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Mic Area */}
        {step === 'question' && (
          <div className="p-8 pb-12 flex flex-col items-center justify-center z-10 bg-white">
            <button
              onClick={toggleListening}
              className={`
                w-28 h-28 rounded-full flex items-center justify-center text-white transition-all duration-200
                ${isListening 
                  ? 'bg-[#F43F5E] scale-110 shadow-[0_0_40px_rgba(244,63,94,0.6)] translate-y-[8px]' 
                  : 'bg-[#8B5CF6] shadow-[0_8px_0_0_#6D28D9] active:translate-y-[8px] active:shadow-none'
                }
              `}
            >
              <Mic size={48} className={isListening ? 'animate-pulse' : ''} />
            </button>
            <div className={`mt-6 text-sm font-bold transition-opacity duration-200 ${isListening ? 'text-[#F43F5E]' : 'text-gray-400'}`}>
              {isListening ? '正在聆听...' : '点击麦克风说话'}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

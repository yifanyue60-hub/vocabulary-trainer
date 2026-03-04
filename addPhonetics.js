import fs from 'fs';

const phoneticsDict = {
  "category": [{letters: "ca", phoneme: "/kæ/"}, {letters: "te", phoneme: "/tə/"}, {letters: "go", phoneme: "/ɡə/"}, {letters: "ry", phoneme: "/ri/"}],
  "cause": [{letters: "cause", phoneme: "/kɔːz/"}],
  "caution": [{letters: "cau", phoneme: "/kɔː/"}, {letters: "tion", phoneme: "/ʃn/"}],
  "ceiling": [{letters: "cei", phoneme: "/siː/"}, {letters: "ling", phoneme: "/lɪŋ/"}],
  "celebrate": [{letters: "ce", phoneme: "/se/"}, {letters: "le", phoneme: "/lə/"}, {letters: "brate", phoneme: "/breɪt/"}],
  "certain": [{letters: "cer", phoneme: "/sɜː/"}, {letters: "tain", phoneme: "/tn/"}],
  "certificate": [{letters: "cer", phoneme: "/sə/"}, {letters: "ti", phoneme: "/tɪ/"}, {letters: "fi", phoneme: "/fɪ/"}, {letters: "cate", phoneme: "/kət/"}],
  "claim": [{letters: "claim", phoneme: "/kleɪm/"}],
  "experience": [{letters: "ex", phoneme: "/ɪk/"}, {letters: "pe", phoneme: "/spɪə/"}, {letters: "ri", phoneme: "/ri/"}, {letters: "ence", phoneme: "/əns/"}],
  "experiment": [{letters: "ex", phoneme: "/ɪk/"}, {letters: "pe", phoneme: "/sper/"}, {letters: "ri", phoneme: "/ɪ/"}, {letters: "ment", phoneme: "/mənt/"}],
  "expert": [{letters: "ex", phoneme: "/ek/"}, {letters: "pert", phoneme: "/spɜːt/"}],
  "explain": [{letters: "ex", phoneme: "/ɪk/"}, {letters: "plain", phoneme: "/spleɪn/"}],
  "explode": [{letters: "ex", phoneme: "/ɪk/"}, {letters: "plode", phoneme: "/spləʊd/"}],
  "explore": [{letters: "ex", phoneme: "/ɪk/"}, {letters: "plore", phoneme: "/splɔː/"}],
  "export": [{letters: "ex", phoneme: "/ek/"}, {letters: "port", phoneme: "/spɔːt/"}],
  "damp": [{letters: "damp", phoneme: "/dæmp/"}],
  "deaf": [{letters: "deaf", phoneme: "/def/"}],
  "deal": [{letters: "deal", phoneme: "/diːl/"}],
  "dear": [{letters: "dear", phoneme: "/dɪə/"}],
  "debate": [{letters: "de", phoneme: "/dɪ/"}, {letters: "bate", phoneme: "/beɪt/"}],
  "debt": [{letters: "debt", phoneme: "/det/"}],
  "decade": [{letters: "de", phoneme: "/de/"}, {letters: "cade", phoneme: "/keɪd/"}],
  "declare": [{letters: "de", phoneme: "/dɪ/"}, {letters: "clare", phoneme: "/kleə/"}],
  "decline": [{letters: "de", phoneme: "/dɪ/"}, {letters: "cline", phoneme: "/klaɪn/"}],
  "burst": [{letters: "burst", phoneme: "/bɜːst/"}],
  "bury": [{letters: "bu", phoneme: "/be/"}, {letters: "ry", phoneme: "/ri/"}],
  "business": [{letters: "busi", phoneme: "/bɪz/"}, {letters: "ness", phoneme: "/nəs/"}],
  "calculate": [{letters: "cal", phoneme: "/kæl/"}, {letters: "cu", phoneme: "/kjʊ/"}, {letters: "late", phoneme: "/leɪt/"}],
  "calm": [{letters: "calm", phoneme: "/kɑːm/"}],
  "call": [{letters: "call", phoneme: "/kɔːl/"}],
  "campaign": [{letters: "cam", phoneme: "/kæm/"}, {letters: "paign", phoneme: "/peɪn/"}],
  "cancel": [{letters: "can", phoneme: "/kæn/"}, {letters: "cel", phoneme: "/sl/"}],
  "cancer": [{letters: "can", phoneme: "/kæn/"}, {letters: "cer", phoneme: "/sə/"}],
  "abandon": [{letters: "a", phoneme: "/ə/"}, {letters: "ban", phoneme: "/bæn/"}, {letters: "don", phoneme: "/dən/"}],
  "ability": [{letters: "a", phoneme: "/ə/"}, {letters: "bi", phoneme: "/bɪ/"}, {letters: "li", phoneme: "/lə/"}, {letters: "ty", phoneme: "/ti/"}],
  "abnormal": [{letters: "ab", phoneme: "/æb/"}, {letters: "nor", phoneme: "/nɔː/"}, {letters: "mal", phoneme: "/ml/"}],
  "abroad": [{letters: "a", phoneme: "/ə/"}, {letters: "broad", phoneme: "/brɔːd/"}],
  "absence": [{letters: "ab", phoneme: "/æb/"}, {letters: "sence", phoneme: "/sns/"}],
  "absolute": [{letters: "ab", phoneme: "/æb/"}, {letters: "so", phoneme: "/sə/"}, {letters: "lute", phoneme: "/luːt/"}],
  "absorb": [{letters: "ab", phoneme: "/əb/"}, {letters: "sorb", phoneme: "/sɔːb/"}],
  "abstract": [{letters: "ab", phoneme: "/æb/"}, {letters: "stract", phoneme: "/strækt/"}],
  "obey": [{letters: "o", phoneme: "/ə/"}, {letters: "bey", phoneme: "/beɪ/"}],
  "object": [{letters: "ob", phoneme: "/ɒb/"}, {letters: "ject", phoneme: "/dʒekt/"}],
  "observe": [{letters: "ob", phoneme: "/əb/"}, {letters: "serve", phoneme: "/zɜːv/"}],
  "obtain": [{letters: "ob", phoneme: "/əb/"}, {letters: "tain", phoneme: "/teɪn/"}],
  "obvious": [{letters: "ob", phoneme: "/ɒb/"}, {letters: "vi", phoneme: "/vi/"}, {letters: "ous", phoneme: "/əs/"}],
  "occupation": [{letters: "oc", phoneme: "/ɒk/"}, {letters: "cu", phoneme: "/jʊ/"}, {letters: "pa", phoneme: "/peɪ/"}, {letters: "tion", phoneme: "/ʃn/"}],
  "occur": [{letters: "oc", phoneme: "/ə/"}, {letters: "cur", phoneme: "/kɜː/"}],
  "offence": [{letters: "of", phoneme: "/ə/"}, {letters: "fence", phoneme: "/fens/"}]
};

const filePath = './src/data/mockWords.ts';
let content = fs.readFileSync(filePath, 'utf-8');

// We need to parse the content or use regex to inject phonetics into the feedback object.
// Since it's a JS file, we can do a regex replace.
// We look for `answers: ['word']` and inject `phonetics` into the `feedback` object if it's not there.

for (const [word, phonetics] of Object.entries(phoneticsDict)) {
  const phoneticsStr = JSON.stringify(phonetics);
  
  // Regex to find the feedback object for this specific word (as the first answer)
  // Example: answers: ['abandon'], displayAnswer: 'abandon', feedback: { word: 'abandon', zh: 'v. 抛弃/放弃', details: [...] }
  // We want to insert `phonetics: [...]` inside the feedback object.
  
  const regex = new RegExp("(answers:\\s*\\['" + word + "'\\][\\s\\S]*?feedback:\\s*\\{\\s*word:\\s*'[^']+',\\s*zh:\\s*'[^']+',\\s*)(details)", 'g');
  
  content = content.replace(regex, (match, p1, p2) => {
    if (match.includes('phonetics:')) return match;
    return p1 + "phonetics: " + phoneticsStr + ", " + p2;
  });
}

fs.writeFileSync(filePath, content);
console.log('Added phonetics to mockWords.ts');

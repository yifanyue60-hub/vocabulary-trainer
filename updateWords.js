import fs from 'fs';

const filePath = './src/data/mockWords.ts';
let content = fs.readFileSync(filePath, 'utf-8');

// Add page property to Question type
content = content.replace(
  'export type Question = {\n  id: string;\n  prompt: string;',
  'export type Question = {\n  id: string;\n  page: number;\n  prompt: string;'
);

// Add page: 18 to all existing questions
content = content.replace(/id: '(\d+)',\n    prompt/g, "id: '$1',\n    page: 18,\n    prompt");

const newQuestions = `  },
  {
    id: '19',
    page: 50,
    prompt: 'n. 经历/经验 v. 体验/经历',
    answers: ['experience'],
    displayAnswer: 'experience',
    feedback: {
      word: 'experience',
      zh: 'n. 经历/经验 v. 体验/经历',
      phonetics: [
        { letters: 'ex', phoneme: '/ɪk/' },
        { letters: 'pe', phoneme: '/spɪə/' },
        { letters: 'ri', phoneme: '/ri/' },
        { letters: 'ence', phoneme: '/əns/' }
      ],
      details: ['形容词: experienced adj. 有经验的', '同义词: undergo v. 经历, endure v. 忍受']
    }
  },
  {
    id: '20',
    page: 50,
    prompt: 'experience 的形容词 (有经验的)',
    answers: ['experienced'],
    displayAnswer: 'experienced',
    feedback: {
      word: 'experienced',
      zh: 'adj. 有经验的',
      details: ['名词/动词: experience n. 经历/经验 v. 体验/经历']
    }
  },
  {
    id: '21',
    page: 50,
    prompt: '翻译考过: 实践经验',
    answers: ['practical experience'],
    displayAnswer: 'practical experience',
    feedback: {
      word: 'practical experience',
      zh: '实践经验',
      details: ['获得宝贵的经验 gain valuable experience', '因为经验略胜一筹 have a slight advantage in experience']
    }
  },
  {
    id: '22',
    page: 50,
    prompt: 'n. 实验 v. 做实验',
    answers: ['experiment'],
    displayAnswer: 'experiment',
    feedback: {
      word: 'experiment',
      zh: 'n. 实验 v. 做实验',
      phonetics: [
        { letters: 'ex', phoneme: '/ɪk/' },
        { letters: 'pe', phoneme: '/spe/' },
        { letters: 'ri', phoneme: '/rɪ/' },
        { letters: 'ment', phoneme: '/mənt/' }
      ],
      details: ['固定搭配: conduct/perform an experiment 做实验', '相关词: trial n. 审判，试验']
    }
  },
  {
    id: '23',
    page: 50,
    prompt: '固定搭配: 做实验',
    answers: ['conduct an experiment', 'perform an experiment'],
    displayAnswer: 'conduct an experiment',
    feedback: {
      word: 'conduct an experiment',
      zh: '做实验',
      details: ['完形填空考 conduct 用法', 'experiment with sth 实验某物']
    }
  },
  {
    id: '24',
    page: 50,
    prompt: 'n. 专家 adj. 专业的',
    answers: ['expert'],
    displayAnswer: 'expert',
    feedback: {
      word: 'expert',
      zh: 'n. 专家 adj. 专业的',
      phonetics: [
        { letters: 'ex', phoneme: '/ek/' },
        { letters: 'pert', phoneme: '/spɜːt/' }
      ],
      details: ['固定搭配: be expert in sth 擅长做某事', '同义词: specialist, professional']
    }
  },
  {
    id: '25',
    page: 50,
    prompt: 'expert 的名词 (专业知识/技能)',
    answers: ['expertise'],
    displayAnswer: 'expertise',
    feedback: {
      word: 'expertise',
      zh: 'n. 专业知识/技能',
      phonetics: [
        { letters: 'ex', phoneme: '/ek/' },
        { letters: 'per', phoneme: '/spɜː/' },
        { letters: 'tise', phoneme: '/tiːz/' }
      ],
      details: ['expert n. 专家 adj. 专业的']
    }
  },
  {
    id: '26',
    page: 50,
    prompt: 'v. 解释/是...的原因',
    answers: ['explain'],
    displayAnswer: 'explain',
    feedback: {
      word: 'explain',
      zh: 'v. 解释/是...的原因',
      phonetics: [
        { letters: 'ex', phoneme: '/ɪk/' },
        { letters: 'plain', phoneme: '/spleɪn/' }
      ],
      details: ['名词: explanation n. 解释 = reason n. 原因', '固定搭配: explain sth to sb 给某人解释某物']
    }
  },
  {
    id: '27',
    page: 50,
    prompt: 'explain 的名词 (解释)',
    answers: ['explanation'],
    displayAnswer: 'explanation',
    feedback: {
      word: 'explanation',
      zh: 'n. 解释',
      phonetics: [
        { letters: 'ex', phoneme: '/ek/' },
        { letters: 'pla', phoneme: '/splə/' },
        { letters: 'na', phoneme: '/neɪ/' },
        { letters: 'tion', phoneme: '/ʃn/' }
      ],
      details: ['explain v. 解释']
    }
  },
  {
    id: '28',
    page: 50,
    prompt: 'v. 爆炸',
    answers: ['explode'],
    displayAnswer: 'explode',
    feedback: {
      word: 'explode',
      zh: 'v. 爆炸',
      phonetics: [
        { letters: 'ex', phoneme: '/ɪk/' },
        { letters: 'plode', phoneme: '/spləʊd/' }
      ],
      details: ['名词: explosion n. 爆炸', '形容词: explosive adj. 爆炸的/炸药']
    }
  },
  {
    id: '29',
    page: 50,
    prompt: 'explode 的名词 (爆炸)',
    answers: ['explosion'],
    displayAnswer: 'explosion',
    feedback: {
      word: 'explosion',
      zh: 'n. 爆炸',
      phonetics: [
        { letters: 'ex', phoneme: '/ɪk/' },
        { letters: 'plo', phoneme: '/spləʊ/' },
        { letters: 'sion', phoneme: '/ʒn/' }
      ],
      details: ['explode v. 爆炸', '相关词: bomb n. 炸弹, erupt v. 火山爆发']
    }
  },
  {
    id: '30',
    page: 50,
    prompt: 'v. 探索',
    answers: ['explore'],
    displayAnswer: 'explore',
    feedback: {
      word: 'explore',
      zh: 'v. 探索',
      phonetics: [
        { letters: 'ex', phoneme: '/ɪk/' },
        { letters: 'plore', phoneme: '/splɔː(r)/' }
      ],
      details: ['名词: exploration n. 探索, explorer n. 探索者']
    }
  },
  {
    id: '31',
    page: 50,
    prompt: 'v./n. 出口',
    answers: ['export'],
    displayAnswer: 'export',
    feedback: {
      word: 'export',
      zh: 'v./n. 出口',
      phonetics: [
        { letters: 'ex', phoneme: '/ek/' },
        { letters: 'port', phoneme: '/spɔːt/' }
      ],
      details: ['反义词: import v.n. 进口', '注意ex-前缀表示“外/出”，in-前缀表示“内/进”']
    }
  },
  {
    id: '32',
    page: 50,
    prompt: 'export 的反义词 (进口)',
    answers: ['import'],
    displayAnswer: 'import',
    feedback: {
      word: 'import',
      zh: 'v./n. 进口',
      phonetics: [
        { letters: 'im', phoneme: '/ɪm/' },
        { letters: 'port', phoneme: '/pɔːt/' }
      ],
      details: ['export v./n. 出口', '含有同样前缀的词: include v. 包括, exclude v. 排除']
    }
  }
];`;

content = content.replace('  }\n];', newQuestions);

fs.writeFileSync(filePath, content);
console.log('Updated mockWords.ts');

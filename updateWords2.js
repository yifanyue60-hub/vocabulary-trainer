import fs from 'fs';

const filePath = './src/data/mockWords.ts';
let content = fs.readFileSync(filePath, 'utf-8');

content = content.replace(/];\s*$/, '');

const newQuestions = `,
  // --- Page 50 Additional ---
  {
    id: '50-1', page: 50, prompt: '翻译考过: 获得宝贵的经验', answers: ['gain valuable experience'], displayAnswer: 'gain valuable experience',
    feedback: { word: 'gain valuable experience', zh: '获得宝贵的经验', details: [] }
  },
  {
    id: '50-2', page: 50, prompt: '翻译考过: 因为经验略胜一筹', answers: ['have a slight advantage in experience'], displayAnswer: 'have a slight advantage in experience',
    feedback: { word: 'have a slight advantage in experience', zh: '因为经验略胜一筹', details: [] }
  },
  {
    id: '50-3', page: 50, prompt: '翻译考过: 体验不同的生活方式', answers: ['experience different ways of life'], displayAnswer: 'experience different ways of life',
    feedback: { word: 'experience different ways of life', zh: '体验不同的生活方式', details: [] }
  },
  {
    id: '50-4', page: 50, prompt: '翻译考过: 你之前的工作经历', answers: ['your past work experiences'], displayAnswer: 'your past work experiences',
    feedback: { word: 'your past work experiences', zh: '你之前的工作经历', details: [] }
  },
  {
    id: '50-5', page: 50, prompt: '翻译考过: 这段经历', answers: ['this experience'], displayAnswer: 'this experience',
    feedback: { word: 'this experience', zh: '这段经历', details: [] }
  },
  {
    id: '50-6', page: 50, prompt: '翻译考过: 经历了起起伏伏', answers: ['the ups and downs he underwent', 'the ups and downs he experienced'], displayAnswer: 'the ups and downs he underwent / experienced',
    feedback: { word: 'the ups and downs he underwent / experienced', zh: '经历了起起伏伏', details: [] }
  },
  {
    id: '50-7', page: 50, prompt: '翻译考过: 经验丰富', answers: ['have rich experience', 'be experienced'], displayAnswer: 'have rich experience / be experienced',
    feedback: { word: 'have rich experience / be experienced', zh: '经验丰富', details: ['experience不可数'] }
  },
  {
    id: '50-8', page: 50, prompt: '翻译考过: 面对实验一次又一次失败', answers: ['facing the failure of experiment after experiment'], displayAnswer: 'facing the failure of experiment after experiment',
    feedback: { word: 'facing the failure of experiment after experiment', zh: '面对实验一次又一次失败', details: [] }
  },
  {
    id: '50-9', page: 50, prompt: '相关词例句: 这种新药正在进行临床试验。', answers: ['the new drug is undergoing clinical trials'], displayAnswer: 'The new drug is undergoing clinical trials.',
    feedback: { word: 'The new drug is undergoing clinical trials.', zh: '这种新药正在进行临床试验。', details: ['trial n. 审判，试验'] }
  },
  {
    id: '50-10', page: 50, prompt: '固定搭配: 是某方面的专家', answers: ['be an expert in sth', 'be an expert on sth'], displayAnswer: 'be an expert in/on sth',
    feedback: { word: 'be an expert in/on sth', zh: '是某方面的专家', details: [] }
  },
  {
    id: '50-11', page: 50, prompt: '翻译考过: 你解释也无济于事', answers: ['it is no use explaining'], displayAnswer: 'it is no use explaining',
    feedback: { word: 'it is no use explaining', zh: '你解释也无济于事', details: [] }
  },
  {
    id: '50-12', page: 50, prompt: '翻译考过: 火山喷发', answers: ['a volcanic eruption'], displayAnswer: 'a volcanic eruption',
    feedback: { word: 'a volcanic eruption', zh: '火山喷发', details: ['erupt v. 火山爆发'] }
  },

  // --- Page 33 ---
  {
    id: '33-1', page: 33, prompt: 'adj. 潮湿的', answers: ['damp'], displayAnswer: 'damp',
    feedback: { word: 'damp', zh: 'adj. 潮湿的', details: ['同义词: wet adj. 湿的, moist adj. 湿的【阅读考过】'] }
  },
  {
    id: '33-2', page: 33, prompt: 'damp 的同义词 (湿的)', answers: ['wet', 'moist'], displayAnswer: 'wet / moist',
    feedback: { word: 'wet / moist', zh: 'adj. 湿的', details: ['damp adj. 潮湿的'] }
  },
  {
    id: '33-3', page: 33, prompt: 'adj. 聋的', answers: ['deaf'], displayAnswer: 'deaf',
    feedback: { word: 'deaf', zh: 'adj. 聋的', details: ['相关词: blind adj. 盲的, dumb adj. 哑的'] }
  },
  {
    id: '33-4', page: 33, prompt: '固定搭配: 对...充耳不闻', answers: ['turn a deaf ear to sth'], displayAnswer: 'turn a deaf ear to sth',
    feedback: { word: 'turn a deaf ear to sth', zh: '对...充耳不闻', details: ['【适合写作】'] }
  },
  {
    id: '33-5', page: 33, prompt: 'n. 交易 v. 处理', answers: ['deal'], displayAnswer: 'deal',
    feedback: { word: 'deal', zh: 'n. 交易 v. 处理', details: ['固定搭配: make a deal 达成交易'] }
  },
  {
    id: '33-6', page: 33, prompt: '固定搭配: 处理某事', answers: ['deal with sb', 'deal with sth', 'handle', 'tackle', 'address'], displayAnswer: 'deal with sb/sth',
    feedback: { word: 'deal with sb/sth', zh: '处理某事', details: ['= handle / tackle / address 【完形考过】'] }
  },
  {
    id: '33-7', page: 33, prompt: '固定搭配: 大量/很多', answers: ['a great deal of sth'], displayAnswer: 'a great deal of sth',
    feedback: { word: 'a great deal of sth', zh: '大量/很多', details: ['可加不可数'] }
  },
  {
    id: '33-8', page: 33, prompt: '固定搭配: 不公平待遇', answers: ['a raw deal'], displayAnswer: 'a raw deal',
    feedback: { word: 'a raw deal', zh: '不公平待遇', details: ['raw adj. 粗暴的，苛刻的，让人难受的'] }
  },
  {
    id: '33-9', page: 33, prompt: '相关词: 能促成交易或达成协议的人或因素', answers: ['deal maker'], displayAnswer: 'deal maker',
    feedback: { word: 'deal maker', zh: '能促成交易或达成协议的人或因素', details: ['【外刊用过，阅读考过】'] }
  },
  {
    id: '33-10', page: 33, prompt: '相关词: 导致交易失败或使协议无法达成的人或因素', answers: ['deal breaker'], displayAnswer: 'deal breaker',
    feedback: { word: 'deal breaker', zh: '导致交易失败或使协议无法达成的人或因素', details: [] }
  },
  {
    id: '33-11', page: 33, prompt: 'adj. 昂贵的', answers: ['dear'], displayAnswer: 'dear',
    feedback: { word: 'dear', zh: 'adj. 昂贵的', details: ['同义词: expensive adj. 贵的, costly adj. 贵的【十一选十考过】'] }
  },
  {
    id: '33-12', page: 33, prompt: 'dear 的同义词 (贵的)', answers: ['expensive', 'costly'], displayAnswer: 'expensive / costly',
    feedback: { word: 'expensive / costly', zh: 'adj. 贵的', details: ['dear adj. 昂贵的'] }
  },
  {
    id: '33-13', page: 33, prompt: 'n. 辩论', answers: ['debate'], displayAnswer: 'debate',
    feedback: { word: 'debate', zh: 'n. 辩论', details: ['固定搭配: a heated debate 激烈辩论'] }
  },
  {
    id: '33-14', page: 33, prompt: '固定搭配: 关于某事的辩论', answers: ['debate over sth'], displayAnswer: 'debate over sth',
    feedback: { word: 'debate over sth', zh: '关于某事的辩论', details: [] }
  },
  {
    id: '33-15', page: 33, prompt: 'n. 债务', answers: ['debt'], displayAnswer: 'debt',
    feedback: { word: 'debt', zh: 'n. 债务', details: ['固定搭配: be in debt 负债'] }
  },
  {
    id: '33-16', page: 33, prompt: 'n. 十年', answers: ['decade'], displayAnswer: 'decade',
    feedback: { word: 'decade', zh: 'n. 十年', details: ['固定搭配: several decades 几十年'] }
  },
  {
    id: '33-17', page: 33, prompt: '固定搭配: 在过去十年间', answers: ['over the past decade'], displayAnswer: 'over the past decade',
    feedback: { word: 'over the past decade', zh: '在过去十年间', details: ['【现在完成时的标志】'] }
  },
  {
    id: '33-18', page: 33, prompt: 'v. 宣告，申报', answers: ['declare'], displayAnswer: 'declare',
    feedback: { word: 'declare', zh: 'v. 宣告，申报（收益/纳税物品）', phonetics: [{letters: 'de', phoneme: '/dɪ/'}, {letters: 'clare', phoneme: '/ˈkleə(r)/'}], details: ['名词: declaration n. 声明', '同义词: announce v. 宣告, claim v. 声称'] }
  },
  {
    id: '33-19', page: 33, prompt: '固定搭配: 宣战', answers: ['declare war'], displayAnswer: 'declare war',
    feedback: { word: 'declare war', zh: '宣战', details: ['【十一选十考过】'] }
  },
  {
    id: '33-20', page: 33, prompt: 'v.n. 下降/委婉拒绝', answers: ['decline'], displayAnswer: 'decline',
    feedback: { word: 'decline', zh: 'v.n. 下降/委婉拒绝', details: ['固定搭配: be in decline 在下降'] }
  }
];`;

fs.writeFileSync(filePath, content + newQuestions);
console.log('Updated mockWords.ts with page 50 and 33');

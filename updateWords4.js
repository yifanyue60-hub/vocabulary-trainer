import fs from 'fs';

const filePath = './src/data/mockWords.ts';
let content = fs.readFileSync(filePath, 'utf-8');

// Remove the last closing bracket
content = content.replace(/];\s*$/, '');

const newQuestions = `,
  // --- Page 1 ---
  {
    id: '1-1', page: 1, prompt: 'v. 抛弃/放弃', answers: ['abandon'], displayAnswer: 'abandon',
    feedback: { word: 'abandon', zh: 'v. 抛弃/放弃', details: ['同义词: desert / dump / discard / dispose【概要写作/完形考过】', 'desert n. 沙漠, v. 舍弃'] }
  },
  {
    id: '1-2', page: 1, prompt: 'abandon 的同义词 (抛弃/舍弃)', answers: ['desert', 'dump', 'discard', 'dispose'], displayAnswer: 'desert / dump / discard / dispose',
    feedback: { word: 'desert / dump / discard / dispose', zh: 'v. 抛弃/舍弃', details: ['abandon v. 抛弃/放弃'] }
  },
  {
    id: '1-3', page: 1, prompt: '固定搭配: 有能力做某事', answers: ['have the ability to do sth'], displayAnswer: 'have the ability to do sth',
    feedback: { word: 'have the ability to do sth', zh: '有能力做某事', details: ['【语法填空考】'] }
  },
  {
    id: '1-4', page: 1, prompt: '类似搭配: 有机会做某事', answers: ['have the opportunity to do sth', 'have the chance to do sth'], displayAnswer: 'have the opportunity/chance to do',
    feedback: { word: 'have the opportunity/chance to do', zh: '有机会做某事', details: [] }
  },
  {
    id: '1-5', page: 1, prompt: '类似搭配: 有潜力做某事', answers: ['have the potential to do sth'], displayAnswer: 'have the potential to do',
    feedback: { word: 'have the potential to do', zh: '有潜力做某事', details: [] }
  },
  {
    id: '1-6', page: 1, prompt: '类似搭配: 做某事的勇气', answers: ['the courage to do sth'], displayAnswer: 'the courage to do',
    feedback: { word: 'the courage to do', zh: '做某事的勇气', details: [] }
  },
  {
    id: '1-7', page: 1, prompt: '类似搭配: 做某事的倾向', answers: ['the tendency to do sth'], displayAnswer: 'the tendency to do',
    feedback: { word: 'the tendency to do', zh: '做某事的倾向', details: [] }
  },
  {
    id: '1-8', page: 1, prompt: '类似搭配: 做某事的使命', answers: ['the mission to do sth'], displayAnswer: 'the mission to do',
    feedback: { word: 'the mission to do', zh: '做某事的使命', details: ['【语法填空考过：不定式修饰抽象名词，作用相当于同位语】'] }
  },
  {
    id: '1-9', page: 1, prompt: '表示“有能力做某事”的短语', answers: ['have the ability to do sth', 'have the capability to do sth', 'be capable of doing sth'], displayAnswer: 'have the ability/capability to do sth / be capable of doing sth',
    feedback: { word: 'have the ability/capability to do sth / be capable of doing sth', zh: '有能力做某事', details: ['【summary/写作可用】'] }
  },
  {
    id: '1-10', page: 1, prompt: 'adj. 不正常的', answers: ['abnormal'], displayAnswer: 'abnormal',
    feedback: { word: 'abnormal', zh: 'adj. 不正常的', details: ['词根: normal adj. 正常的'] }
  },
  {
    id: '1-11', page: 1, prompt: '固定搭配: 出国', answers: ['go abroad'], displayAnswer: 'go abroad',
    feedback: { word: 'go abroad', zh: '出国', details: ['abroad 词性: 副词 adv.'] }
  },
  {
    id: '1-12', page: 1, prompt: '固定搭配: 来自国内外', answers: ['from home and abroad'], displayAnswer: 'from home and abroad',
    feedback: { word: 'from home and abroad', zh: '来自国内外', details: ['区分: aboard adv. 在船/飞机上 (board 本意: 板/甲板)'] }
  },
  {
    id: '1-13', page: 1, prompt: 'n. 缺席/没有某物', answers: ['absence'], displayAnswer: 'absence',
    feedback: { word: 'absence', zh: 'n. 缺席/没有某物', details: ['形容词: absent 缺席的，反义词: present adj. 出席的'] }
  },
  {
    id: '1-14', page: 1, prompt: 'absence 的反义词 (出席/存在)', answers: ['presence'], displayAnswer: 'presence',
    feedback: { word: 'presence', zh: 'n. 出席/存在', phonetics: [{letters: 'pre', phoneme: '/pre/'}, {letters: 'sence', phoneme: '/z(ə)ns/'}], details: ['同义词: presence = existence = appearance 出现，存在'] }
  },
  {
    id: '1-15', page: 1, prompt: '固定搭配: 缺乏/在没有...的情况下', answers: ['in the absence of sth'], displayAnswer: 'in the absence of sth',
    feedback: { word: 'in the absence of sth', zh: '缺乏/在没有...的情况下', details: ['【完形考过】'] }
  },
  {
    id: '1-16', page: 1, prompt: 'adj. 绝对的', answers: ['absolute'], displayAnswer: 'absolute',
    feedback: { word: 'absolute', zh: 'adj. 绝对的', details: ['副词: absolutely adv. 绝对地，同义词: definitely adv. 肯定地'] }
  },
  {
    id: '1-17', page: 1, prompt: 'v. 吸收', answers: ['absorb'], displayAnswer: 'absorb',
    feedback: { word: 'absorb', zh: 'v. 吸收', details: ['固定搭配: be absorbed in 全神贯注于 = be buried in sth/be immersed in sth 沉浸于 / absorb oneself in sth 沉醉于'] }
  },
  {
    id: '1-18', page: 1, prompt: '固定搭配: 全神贯注于 / 沉浸于', answers: ['be absorbed in', 'be buried in sth', 'be immersed in sth', 'absorb oneself in sth'], displayAnswer: 'be absorbed in / be buried in sth / be immersed in sth / absorb oneself in sth',
    feedback: { word: 'be absorbed in / be buried in sth / be immersed in sth / absorb oneself in sth', zh: '全神贯注于 / 沉浸于', details: [] }
  },
  {
    id: '1-19', page: 1, prompt: 'adj. 抽象的, n. 文献摘要, v. 提取', answers: ['abstract'], displayAnswer: 'abstract',
    feedback: { word: 'abstract', zh: 'adj. 抽象的, n. 文献摘要, v. 提取', details: ['抽象艺术: abstract art', '同义词(摘要): summary', '反义词: specific adj. 明确的，具体的'] }
  },
  {
    id: '1-20', page: 1, prompt: '固定搭配: 从某物中提取', answers: ['abstract sth from sth'], displayAnswer: 'abstract sth from sth',
    feedback: { word: 'abstract sth from sth', zh: '从某物中提取', details: ['【概要考过】', '表示“抽取，提取”的动词: extract, abstract, draw【完形考过】'] }
  },
  {
    id: '1-21', page: 1, prompt: '表示“抽取，提取”的动词', answers: ['extract', 'abstract', 'draw'], displayAnswer: 'extract / abstract / draw',
    feedback: { word: 'extract / abstract / draw', zh: 'v. 抽取，提取', details: ['【完形考过】'] }
  },
  
  // --- EN to ZH Mode Examples (Page 1) ---
  {
    id: '1-22', page: 1, questionType: 'en-to-zh', prompt: 'abandon', answers: ['抛弃', '放弃'], displayAnswer: '抛弃/放弃',
    feedback: { word: 'abandon', zh: 'v. 抛弃/放弃', details: ['同义词: desert / dump / discard / dispose'] }
  },
  {
    id: '1-23', page: 1, questionType: 'en-to-zh', prompt: 'abnormal', answers: ['不正常', '异常'], displayAnswer: '不正常的',
    feedback: { word: 'abnormal', zh: 'adj. 不正常的', details: ['词根: normal adj. 正常的'] }
  },
  {
    id: '1-24', page: 1, questionType: 'en-to-zh', prompt: 'absence', answers: ['缺席', '没有'], displayAnswer: '缺席/没有某物',
    feedback: { word: 'absence', zh: 'n. 缺席/没有某物', details: ['形容词: absent 缺席的，反义词: present adj. 出席的'] }
  },
  {
    id: '1-25', page: 1, questionType: 'en-to-zh', prompt: 'absolute', answers: ['绝对'], displayAnswer: '绝对的',
    feedback: { word: 'absolute', zh: 'adj. 绝对的', details: ['副词: absolutely adv. 绝对地'] }
  },
  {
    id: '1-26', page: 1, questionType: 'en-to-zh', prompt: 'absorb', answers: ['吸收'], displayAnswer: '吸收',
    feedback: { word: 'absorb', zh: 'v. 吸收', details: ['固定搭配: be absorbed in 全神贯注于'] }
  }
];`;

fs.writeFileSync(filePath, content + newQuestions);
console.log('Updated mockWords.ts with page 1');

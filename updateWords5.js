import fs from 'fs';

const filePath = './src/data/mockWords.ts';
let content = fs.readFileSync(filePath, 'utf-8');

// Remove en-to-zh questions
content = content.replace(/\{\s*id:\s*'[^']+',\s*page:\s*\d+,\s*questionType:\s*'en-to-zh'[\s\S]*?\},?/g, '');

// Remove the last closing bracket
content = content.replace(/];\s*$/, '');

// Clean up any trailing commas before adding new questions
content = content.replace(/,\s*$/, '');

const newQuestions = `,
  // --- Page 88 ---
  { id: '88-1', page: 88, prompt: 'v. 遵守/服从', answers: ['obey'], displayAnswer: 'obey', feedback: { word: 'obey', zh: 'v. 遵守/服从', details: ['反义词: disobey v. 违反', '名词: obedience n. 顺从, disobedience n. 忤逆', '形容词: obedient = submissive adj. 顺从的'] } },
  { id: '88-2', page: 88, prompt: '固定搭配: 遵守规则', answers: ['obey the rules', 'obey the law'], displayAnswer: 'obey the rules/law', feedback: { word: 'obey the rules/law', zh: '遵守规则', details: [] } },
  { id: '88-3', page: 88, prompt: 'obey 的反义词 (违反)', answers: ['disobey'], displayAnswer: 'disobey', feedback: { word: 'disobey', zh: 'v. 违反', details: [] } },
  { id: '88-4', page: 88, prompt: 'n. 物品, v. 反对', answers: ['object'], displayAnswer: 'object', feedback: { word: 'object', zh: 'n. 物品, v. 反对', details: ['同义词: item n. 东西', '名词: objection n. 反对, objective adj. 反对的, 客观的/n. 目标'] } },
  { id: '88-5', page: 88, prompt: '固定搭配: 反对某物', answers: ['object to sth', 'object to doing sth'], displayAnswer: 'object to sth/doing sth', feedback: { word: 'object to sth/doing sth', zh: '反对某物', details: [] } },
  { id: '88-6', page: 88, prompt: 'v. 观察，庆祝，遵守', answers: ['observe'], displayAnswer: 'observe', feedback: { word: 'observe', zh: 'v. 观察，庆祝，遵守', details: ['注意一词多义', '名词: observation n. 观察', '形容词: observant adj. 善于观察的/观察力敏锐的'] } },
  { id: '88-7', page: 88, prompt: 'v. 获得，得到', answers: ['obtain'], displayAnswer: 'obtain', feedback: { word: 'obtain', zh: 'v. 获得，得到', details: ['同义词: acquire / harvest / attain / gain v. 获得'] } },
  { id: '88-8', page: 88, prompt: 'obtain 的同义词 (获得)', answers: ['acquire', 'harvest', 'attain', 'gain'], displayAnswer: 'acquire / harvest / attain / gain', feedback: { word: 'acquire / harvest / attain / gain', zh: 'v. 获得', details: [] } },
  { id: '88-9', page: 88, prompt: '翻译考过: 多学本领', answers: ['obtain more skills'], displayAnswer: 'obtain more skills', feedback: { word: 'obtain more skills', zh: '多学本领', details: [] } },
  { id: '88-10', page: 88, prompt: 'adj. 明显的', answers: ['obvious'], displayAnswer: 'obvious', feedback: { word: 'obvious', zh: 'adj. 明显的', details: ['同义词: evident, apparent, notable, pronounced, marked adj. 明显的'] } },
  { id: '88-11', page: 88, prompt: 'obvious 的同义词 (明显的)', answers: ['evident', 'apparent', 'notable', 'pronounced', 'marked'], displayAnswer: 'evident / apparent / notable / pronounced / marked', feedback: { word: 'evident / apparent / notable / pronounced / marked', zh: 'adj. 明显的', details: [] } },
  { id: '88-12', page: 88, prompt: '翻译考过: 不言而喻', answers: ['it is doubtless that', 'it is self-evident that', 'it is obvious that'], displayAnswer: 'it is doubtless that / self-evident / obvious that', feedback: { word: 'it is doubtless that / self-evident / obvious that', zh: '不言而喻', details: [] } },
  { id: '88-13', page: 88, prompt: 'n. 职业', answers: ['occupation'], displayAnswer: 'occupation', feedback: { word: 'occupation', zh: 'n. 职业', details: ['同义词: profession n. 专业, career n. 职业, vocation n. 职业', '形容词: occupational adj. 职业的'] } },
  { id: '88-14', page: 88, prompt: 'occupation 的同义词 (职业/专业)', answers: ['profession', 'career', 'vocation'], displayAnswer: 'profession / career / vocation', feedback: { word: 'profession / career / vocation', zh: 'n. 职业/专业', details: [] } },
  { id: '88-15', page: 88, prompt: 'v. 发生（不及物动词）', answers: ['occur'], displayAnswer: 'occur', feedback: { word: 'occur', zh: 'v. 发生', details: ['现在分词: occurring【注意双写r】', '同义词: happen / take place / come about v. 产生, 发生【完形考过】'] } },
  { id: '88-16', page: 88, prompt: 'occur 的同义词 (发生/产生)', answers: ['happen', 'take place', 'come about'], displayAnswer: 'happen / take place / come about', feedback: { word: 'happen / take place / come about', zh: 'v. 产生, 发生', details: ['【完形考过】'] } },
  { id: '88-17', page: 88, prompt: '句型: 某人突然想到', answers: ['it occur to sb', 'it strikes sb that'], displayAnswer: 'it occur to sb = it strikes sb that', feedback: { word: 'it occur to sb = it strikes sb that', zh: '某人突然想到', details: [] } },
  { id: '88-18', page: 88, prompt: '翻译考过: 我突然明白', answers: ['it suddenly struck me', 'it suddenly occurred to me', 'it suddenly dawned on me'], displayAnswer: 'It suddenly struck / occurred to / dawned on me...', feedback: { word: 'It suddenly struck / occurred to / dawned on me...', zh: '我突然明白', details: [] } },
  { id: '88-19', page: 88, prompt: '翻译考过: 意外在所难免', answers: ['in case something unexpected occurs'], displayAnswer: 'in case something unexpected occurs', feedback: { word: 'in case something unexpected occurs', zh: '意外在所难免', details: [] } },
  { id: '88-20', page: 88, prompt: '翻译考过: 总会有创意出现', answers: ['creativity occur to you'], displayAnswer: 'creativity occur to you', feedback: { word: 'creativity occur to you', zh: '总会有创意出现', details: [] } },
  { id: '88-21', page: 88, prompt: 'n. 冒犯', answers: ['offence'], displayAnswer: 'offence', feedback: { word: 'offence', zh: 'n. 冒犯', details: ['词根: offend v. 冒犯', '形容词: offensive adj. 冒犯的'] } }
];`;

fs.writeFileSync(filePath, content + newQuestions);
console.log('Updated mockWords.ts with page 88 and removed en-to-zh');

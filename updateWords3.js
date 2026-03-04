import fs from 'fs';

const filePath = './src/data/mockWords.ts';
let content = fs.readFileSync(filePath, 'utf-8');

// Add questionType to Question type
if (!content.includes('questionType?:')) {
  content = content.replace(
    'export type Question = {\n  id: string;',
    "export type Question = {\n  id: string;\n  questionType?: 'en-to-zh' | 'zh-to-en';"
  );
}

// Remove the last closing bracket
content = content.replace(/];\s*$/, '');

const newQuestions = `,
  // --- Page 33 Missing ---
  {
    id: '33-21', page: 33, prompt: '相关词例句: 他谈判的能力是促成交易的关键。', answers: ['his ability to negotiate was a deal maker in closing the deal'], displayAnswer: 'His ability to negotiate was a deal maker in closing the deal.',
    feedback: { word: 'His ability to negotiate was a deal maker in closing the deal.', zh: '他谈判的能力是促成交易的关键。', details: [] }
  },
  {
    id: '33-22', page: 33, prompt: '相关词例句: 高价是买家的交易障碍。', answers: ['the high price was a deal breaker for the buyer'], displayAnswer: 'The high price was a deal breaker for the buyer.',
    feedback: { word: 'The high price was a deal breaker for the buyer.', zh: '高价是买家的交易障碍。', details: [] }
  },
  {
    id: '33-23', page: 33, prompt: '名词: 声明', answers: ['declaration'], displayAnswer: 'declaration',
    feedback: { word: 'declaration', zh: 'n. 声明', details: ['declare v. 宣告'] }
  },
  {
    id: '33-24', page: 33, prompt: '相关词: 美国独立宣言', answers: ['the declaration of independence'], displayAnswer: 'The Declaration of Independence',
    feedback: { word: 'The Declaration of Independence', zh: '美国独立宣言', details: [] }
  },
  {
    id: '33-25', page: 33, prompt: 'declare 的同义词 (宣告/声称)', answers: ['announce', 'claim'], displayAnswer: 'announce / claim',
    feedback: { word: 'announce / claim', zh: 'v. 宣告/声称', details: ['declare v. 宣告'] }
  },
  {
    id: '33-26', page: 33, prompt: '固定搭配: 在下降', answers: ['be in decline'], displayAnswer: 'be in decline',
    feedback: { word: 'be in decline', zh: '在下降', details: ['decline v.n. 下降'] }
  },

  // --- Page 15 ---
  {
    id: '15-1', page: 15, prompt: 'v.n. 爆裂，突发', answers: ['burst'], displayAnswer: 'burst',
    feedback: { word: 'burst', zh: 'v.n. 爆裂，突发', details: ['英文释义: short period, strong emotion 短而强【完形填空考过】'] }
  },
  {
    id: '15-2', page: 15, prompt: '例句: 怒火突然迸发', answers: ['a sudden burst of anger'], displayAnswer: 'a sudden burst of anger',
    feedback: { word: 'a sudden burst of anger', zh: '怒火突然迸发', details: [] }
  },
  {
    id: '15-3', page: 15, prompt: 'v. 埋葬', answers: ['bury'], displayAnswer: 'bury',
    feedback: { word: 'bury', zh: 'v. 埋葬', details: ['固定搭配: be buried in (被动) = bury oneself in sth (主动) 沉浸于【翻译考过】'] }
  },
  {
    id: '15-4', page: 15, prompt: '固定搭配: 沉浸于', answers: ['be buried in', 'bury oneself in sth'], displayAnswer: 'be buried in / bury oneself in sth',
    feedback: { word: 'be buried in / bury oneself in sth', zh: '沉浸于', details: ['【翻译考过】'] }
  },
  {
    id: '15-5', page: 15, prompt: 'n. 商业，公司，事情', answers: ['business'], displayAnswer: 'business',
    feedback: { word: 'business', zh: 'n. 商业，公司，事情', details: ['同义词(公司): corporation, company, firm, enterprise', 'none of your business 不关你事'] }
  },
  {
    id: '15-6', page: 15, prompt: 'business 的同义词 (公司)', answers: ['corporation', 'company', 'firm', 'enterprise'], displayAnswer: 'corporation / company / firm / enterprise',
    feedback: { word: 'corporation / company / firm / enterprise', zh: 'n. 公司', details: ['enterprise /entəpraɪz/'] }
  },
  {
    id: '15-7', page: 15, prompt: '固定搭配: 不关你事', answers: ['none of your business'], displayAnswer: 'none of your business',
    feedback: { word: 'none of your business', zh: '不关你事', details: [] }
  },
  {
    id: '15-8', page: 15, prompt: 'v. 计算；预测，推测', answers: ['calculate'], displayAnswer: 'calculate',
    feedback: { word: 'calculate', zh: 'v. 计算；预测，推测', details: ['英文释义: to guess sth or form an opinion by using all the information available', '名词: calculation n.', '同义词: compute v. 计算, estimate v. 估计'] }
  },
  {
    id: '15-9', page: 15, prompt: '例句: 现在无法估计他对她的生活产生过大影响。', answers: ['it is impossible to calculate what influence he had on her life'], displayAnswer: 'It is impossible to calculate what influence he had on her life.',
    feedback: { word: 'It is impossible to calculate what influence he had on her life.', zh: '现在无法估计他对她的生活产生过大影响。', details: [] }
  },
  {
    id: '15-10', page: 15, prompt: 'calculate 的同义词 (计算/估计)', answers: ['compute', 'estimate'], displayAnswer: 'compute / estimate',
    feedback: { word: 'compute / estimate', zh: 'v. 计算/估计', details: ['calculate v. 计算'] }
  },
  {
    id: '15-11', page: 15, prompt: 'adj. 冷静的, v. 冷静', answers: ['calm'], displayAnswer: 'calm',
    feedback: { word: 'calm', zh: 'adj. 冷静的, v. 冷静', details: ['固定搭配: calm down v. 冷静', '镇静性作用 a calming effect on sth【翻译考过】'] }
  },
  {
    id: '15-12', page: 15, prompt: '翻译考过: 镇静性作用', answers: ['a calming effect on sth'], displayAnswer: 'a calming effect on sth',
    feedback: { word: 'a calming effect on sth', zh: '镇静性作用', details: [] }
  },
  {
    id: '15-13', page: 15, prompt: 'v. 把...叫做，短暂访问, n. 呼吁', answers: ['call'], displayAnswer: 'call',
    feedback: { word: 'call', zh: 'v. 把...叫做，短暂访问, n. 呼吁', details: ['固搭: 把某人叫做某物 call sb sth', '需要某物 call for sth', '呼吁某人做某事 call on sb to do sth / appeal to sb to do sth'] }
  },
  {
    id: '15-14', page: 15, prompt: '固定搭配: 把某人叫做某物', answers: ['call sb sth'], displayAnswer: 'call sb sth',
    feedback: { word: 'call sb sth', zh: '把某人叫做某物', details: ['call是宾补动词: call+宾语+宾补'] }
  },
  {
    id: '15-15', page: 15, prompt: '固定搭配: 需要某物', answers: ['call for sth'], displayAnswer: 'call for sth',
    feedback: { word: 'call for sth', zh: '需要某物', details: [] }
  },
  {
    id: '15-16', page: 15, prompt: '固定搭配: 呼吁某人做某事', answers: ['call on sb to do sth', 'appeal to sb to do sth'], displayAnswer: 'call on sb to do sth / appeal to sb to do sth',
    feedback: { word: 'call on sb to do sth / appeal to sb to do sth', zh: '呼吁某人做某事', details: [] }
  },
  {
    id: '15-17', page: 15, prompt: 'n. 活动/竞选活动', answers: ['campaign'], displayAnswer: 'campaign',
    feedback: { word: 'campaign', zh: 'n. 活动/竞选活动', details: ['比activity范围更广，更正式', '固定搭配: launch a campaign 开展运动/活动【十一选十考过】', 'a campaign against/for sth 反对/支持某物的运动'] }
  },
  {
    id: '15-18', page: 15, prompt: '固定搭配: 开展运动/活动', answers: ['launch a campaign'], displayAnswer: 'launch a campaign',
    feedback: { word: 'launch a campaign', zh: '开展运动/活动', details: ['【十一选十考过launch搭配】'] }
  },
  {
    id: '15-19', page: 15, prompt: '固定搭配: 反对/支持某物的运动', answers: ['a campaign against sth', 'a campaign for sth'], displayAnswer: 'a campaign against/for sth',
    feedback: { word: 'a campaign against/for sth', zh: '反对/支持某物的运动', details: [] }
  },
  {
    id: '15-20', page: 15, prompt: '翻译考过: 开展了一系列“戏曲进课堂”活动', answers: ['launch a series of traditional opera in the classroom activities'], displayAnswer: "launch a series of 'Traditional Opera in the Classroom' activities",
    feedback: { word: "launch a series of 'Traditional Opera in the Classroom' activities", zh: '开展了一系列“戏曲进课堂”活动', details: [] }
  },
  {
    id: '15-21', page: 15, prompt: 'v. 取消', answers: ['cancel'], displayAnswer: 'cancel',
    feedback: { word: 'cancel', zh: 'v. 取消', details: ['过去式/过去分词双写不双写都行', '搭配: 取消航班 cancel the flights【翻译考过】'] }
  },
  {
    id: '15-22', page: 15, prompt: '翻译考过: 取消航班', answers: ['cancel the flights'], displayAnswer: 'cancel the flights',
    feedback: { word: 'cancel the flights', zh: '取消航班', details: [] }
  },
  {
    id: '15-23', page: 15, prompt: 'n. 癌症', answers: ['cancer'], displayAnswer: 'cancer',
    feedback: { word: 'cancer', zh: 'n. 癌症', details: ['需要记住的病的名称: obesity 肥胖, diabetes 糖尿病, anemia 贫血, dementia 痴呆, insomnia 失眠, infection 传染病, mental disorder 精神紊乱, brain disorder 大脑紊乱, Alzheimer 阿尔茨海默病, cardiovascular issues 心血管问题'] }
  },
  {
    id: '15-24', page: 15, prompt: '需要记住的病的名称: 肥胖 / 糖尿病 / 贫血', answers: ['obesity diabetes anemia'], displayAnswer: 'obesity / diabetes / anemia',
    feedback: { word: 'obesity / diabetes / anemia', zh: '肥胖 / 糖尿病 / 贫血', details: [] }
  },
  {
    id: '15-25', page: 15, prompt: '需要记住的病的名称: 痴呆 / 失眠 / 传染病', answers: ['dementia insomnia infection'], displayAnswer: 'dementia / insomnia / infection',
    feedback: { word: 'dementia / insomnia / infection', zh: '痴呆 / 失眠 / 传染病', details: [] }
  },
  {
    id: '15-26', page: 15, prompt: '需要记住的病的名称: 精神紊乱 / 大脑紊乱', answers: ['mental disorder brain disorder'], displayAnswer: 'mental disorder / brain disorder',
    feedback: { word: 'mental disorder / brain disorder', zh: '精神紊乱 / 大脑紊乱', details: [] }
  },
  {
    id: '15-27', page: 15, prompt: '需要记住的病的名称: 阿尔茨海默病 / 心血管问题', answers: ['alzheimer cardiovascular issues'], displayAnswer: 'Alzheimer / cardiovascular issues',
    feedback: { word: 'Alzheimer / cardiovascular issues', zh: '阿尔茨海默病 / 心血管问题', details: ['cardio-前缀: 心脏; vascular-词根: 血管'] }
  },

  // --- EN to ZH Mode Examples (Page 15) ---
  {
    id: '15-28', page: 15, questionType: 'en-to-zh', prompt: 'burst', answers: ['爆裂', '突发'], displayAnswer: '爆裂，突发',
    feedback: { word: 'burst', zh: 'v.n. 爆裂，突发', details: ['英文释义: short period, strong emotion 短而强'] }
  },
  {
    id: '15-29', page: 15, questionType: 'en-to-zh', prompt: 'bury', answers: ['埋葬', '埋'], displayAnswer: '埋葬',
    feedback: { word: 'bury', zh: 'v. 埋葬', details: ['固定搭配: be buried in (被动) = bury oneself in sth (主动) 沉浸于'] }
  },
  {
    id: '15-30', page: 15, questionType: 'en-to-zh', prompt: 'calculate', answers: ['计算', '预测', '推测', '估计'], displayAnswer: '计算；预测，推测',
    feedback: { word: 'calculate', zh: 'v. 计算；预测，推测', details: ['名词: calculation n.', '同义词: compute v. 计算, estimate v. 估计'] }
  },
  {
    id: '15-31', page: 15, questionType: 'en-to-zh', prompt: 'campaign', answers: ['活动', '竞选活动', '运动'], displayAnswer: '活动/竞选活动',
    feedback: { word: 'campaign', zh: 'n. 活动/竞选活动', details: ['比activity范围更广，更正式', '固定搭配: launch a campaign 开展运动/活动'] }
  },
  {
    id: '15-32', page: 15, questionType: 'en-to-zh', prompt: 'cancer', answers: ['癌症', '癌'], displayAnswer: '癌症',
    feedback: { word: 'cancer', zh: 'n. 癌症', details: [] }
  }
];`;

fs.writeFileSync(filePath, content + newQuestions);
console.log('Updated mockWords.ts with page 15 and en-to-zh questions');

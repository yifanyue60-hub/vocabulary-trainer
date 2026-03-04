export type Phonetic = {
  letters: string;
  phoneme: string;
};

export const STUDENTS = [
  { id: 1, name: '张悦晨', currentPage: 50, completed: false, accuracy: '-', wrongWords: [], lastCompletedDate: '-' },
  { id: 2, name: '邵诗辰', currentPage: 1, completed: false, accuracy: '-', wrongWords: [], lastCompletedDate: '-' },
  { id: 3, name: '瞿子萱', currentPage: 1, completed: false, accuracy: '-', wrongWords: [], lastCompletedDate: '-' },
  { id: 4, name: '沈意为', currentPage: 55, completed: false, accuracy: '-', wrongWords: [], lastCompletedDate: '-' },
  { id: 5, name: '秦一涵', currentPage: 33, completed: false, accuracy: '-', wrongWords: [], lastCompletedDate: '-' },
  { id: 6, name: '尹亦诚', currentPage: 15, completed: false, accuracy: '-', wrongWords: [], lastCompletedDate: '-' },
  { id: 7, name: '赵宇馨', currentPage: 1, completed: false, accuracy: '-', wrongWords: [], lastCompletedDate: '-' },
  { id: 8, name: '施陈辰', currentPage: 15, completed: false, accuracy: '-', wrongWords: [], lastCompletedDate: '-' },
  { id: 9, name: '茅恺昕', currentPage: 88, completed: false, accuracy: '-', wrongWords: [], lastCompletedDate: '-' },
  { id: 10, name: '夏聆风', currentPage: 1, completed: false, accuracy: '-', wrongWords: [], lastCompletedDate: '-' },
];

export type Question = {
  id: string;
  questionType?: 'en-to-zh' | 'zh-to-en';
  page: number;
  prompt: string;
  answers: string[];
  displayAnswer: string;
  feedback: {
    word: string;
    zh: string;
    phonetics?: Phonetic[];
    details: string[];
  };
};

export const QUESTIONS: Question[] = [
  {
    id: '1',
    page: 18,
    prompt: 'n. 种类',
    answers: ['category'],
    displayAnswer: 'category',
    feedback: {
      word: 'category',
      zh: 'n. 种类',
      phonetics: [
        { letters: 'c', phoneme: '/k/' },
        { letters: 'a', phoneme: '/æ/' },
        { letters: 't', phoneme: '/t/' },
        { letters: 'e', phoneme: '/ə/' },
        { letters: 'g', phoneme: '/g/' },
        { letters: 'o', phoneme: '/ə/' },
        { letters: 'ry', phoneme: '/ri/' }
      ],
      details: ['动词: categorize v.分类 = classify v.', '同义词: kind, type n.类型']
    }
  },
  {
    id: '2',
    page: 18,
    prompt: 'category 的动词 (分类)',
    answers: ['categorize'],
    displayAnswer: 'categorize',
    feedback: {
      word: 'categorize',
      zh: 'v. 分类',
      phonetics: [
        { letters: 'c', phoneme: '/k/' },
        { letters: 'a', phoneme: '/æ/' },
        { letters: 't', phoneme: '/t/' },
        { letters: 'e', phoneme: '/ə/' },
        { letters: 'g', phoneme: '/g/' },
        { letters: 'o', phoneme: '/ə/' },
        { letters: 'r', phoneme: '/r/' },
        { letters: 'ize', phoneme: '/aɪz/' }
      ],
      details: ['名词: category n.种类', '同义词: classify v.']
    }
  },
  {
    id: '3',
    page: 18,
    prompt: 'v.导致 n.理由/事业',
    answers: ['cause'],
    displayAnswer: 'cause',
    feedback: {
      word: 'cause',
      zh: 'v.导致 n.理由/事业',
      phonetics: [
        { letters: 'c', phoneme: '/k/' },
        { letters: 'au', phoneme: '/ɔː/' },
        { letters: 'se', phoneme: '/z/' }
      ],
      details: ['固定搭配: cause and effect n.因果', 'the root cause n.根本原因', 'cause sb to do sth 导致某人做某事']
    }
  },
  {
    id: '4',
    page: 18,
    prompt: 'cause 的同义词 (导致)',
    answers: ['lead to', 'result in', 'contribute to', 'give rise to', 'bring about', 'produce', 'make'],
    displayAnswer: 'lead to / result in / bring about',
    feedback: {
      word: 'lead to / result in',
      zh: 'v. 导致',
      phonetics: [
        { letters: 'l', phoneme: '/l/' },
        { letters: 'ea', phoneme: '/iː/' },
        { letters: 'd', phoneme: '/d/' },
        { letters: ' ', phoneme: ' ' },
        { letters: 't', phoneme: '/t/' },
        { letters: 'o', phoneme: '/uː/' }
      ],
      details: ['其他同义词: contribute to, give rise to, be responsible for, make, produce, bring about']
    }
  },
  {
    id: '5',
    page: 18,
    prompt: 'cause 的名词 (因果关系)',
    answers: ['causation'],
    displayAnswer: 'causation',
    feedback: {
      word: 'causation',
      zh: 'n. 两个变量的因果关系',
      phonetics: [
        { letters: 'c', phoneme: '/k/' },
        { letters: 'au', phoneme: '/ɔː/' },
        { letters: 's', phoneme: '/z/' },
        { letters: 'a', phoneme: '/eɪ/' },
        { letters: 'tion', phoneme: '/ʃn/' }
      ],
      details: ['相关词: correlation n. 两个变量的相关关系']
    }
  },
  {
    id: '6',
    page: 18,
    prompt: 'n. 谨慎 v. 警告/告诫',
    answers: ['caution'],
    displayAnswer: 'caution',
    feedback: {
      word: 'caution',
      zh: 'n. 谨慎 v. 警告/告诫',
      phonetics: [
        { letters: 'c', phoneme: '/k/' },
        { letters: 'au', phoneme: '/ɔː/' },
        { letters: 'tion', phoneme: '/ʃn/' }
      ],
      details: ['形容词: cautious adj. 谨慎的 = prudent adj.', '副词: cautiously adv. 谨慎地 = carefully adv.', '翻译考过: treat sth with caution 谨慎对待']
    }
  },
  {
    id: '7',
    page: 18,
    prompt: 'caution 的形容词 (谨慎的)',
    answers: ['cautious'],
    displayAnswer: 'cautious',
    feedback: {
      word: 'cautious',
      zh: 'adj. 谨慎的',
      phonetics: [
        { letters: 'c', phoneme: '/k/' },
        { letters: 'au', phoneme: '/ɔː/' },
        { letters: 'tious', phoneme: '/ʃəs/' }
      ],
      details: ['同义词: prudent adj.', '副词: cautiously adv. 谨慎地']
    }
  },
  {
    id: '8',
    page: 18,
    prompt: 'n. 天花板/上限',
    answers: ['ceiling'],
    displayAnswer: 'ceiling',
    feedback: {
      word: 'ceiling',
      zh: 'n. 天花板/上限',
      phonetics: [
        { letters: 'c', phoneme: '/s/' },
        { letters: 'ei', phoneme: '/iː/' },
        { letters: 'l', phoneme: '/l/' },
        { letters: 'ing', phoneme: '/ɪŋ/' }
      ],
      details: ['背景知识: glass ceiling n.玻璃天花板 (指对某些群体晋升的无形障碍)']
    }
  },
  {
    id: '9',
    page: 18,
    prompt: 'v. 庆祝，表扬/称赞',
    answers: ['celebrate'],
    displayAnswer: 'celebrate',
    feedback: {
      word: 'celebrate',
      zh: 'v. 庆祝，表扬/称赞',
      phonetics: [
        { letters: 'c', phoneme: '/s/' },
        { letters: 'e', phoneme: '/e/' },
        { letters: 'l', phoneme: '/l/' },
        { letters: 'e', phoneme: '/ə/' },
        { letters: 'br', phoneme: '/br/' },
        { letters: 'ate', phoneme: '/eɪt/' }
      ],
      details: ['十一选十考过']
    }
  },
  {
    id: '10',
    page: 18,
    prompt: 'adj. 确定的，某些',
    answers: ['certain'],
    displayAnswer: 'certain',
    feedback: {
      word: 'certain',
      zh: 'adj. 确定的，某些',
      phonetics: [
        { letters: 'c', phoneme: '/s/' },
        { letters: 'er', phoneme: '/ɜː/' },
        { letters: 't', phoneme: '/t/' },
        { letters: 'ain', phoneme: '/n/' }
      ],
      details: ['同义词: definite adj.肯定的/确定的', '固定搭配: be certain that 确定']
    }
  },
  {
    id: '11',
    page: 18,
    prompt: 'n. 证明/文凭',
    answers: ['certificate'],
    displayAnswer: 'certificate',
    feedback: {
      word: 'certificate',
      zh: 'n. 证明/文凭 (比如死亡/出生证明)',
      phonetics: [
        { letters: 'c', phoneme: '/s/' },
        { letters: 'er', phoneme: '/ə/' },
        { letters: 't', phoneme: '/t/' },
        { letters: 'i', phoneme: '/ɪ/' },
        { letters: 'f', phoneme: '/f/' },
        { letters: 'i', phoneme: '/ɪ/' },
        { letters: 'c', phoneme: '/k/' },
        { letters: 'ate', phoneme: '/ət/' }
      ],
      details: ['相关词: qualification n.学历/资历', 'diploma n.毕业文凭']
    }
  },
  {
    id: '12',
    page: 18,
    prompt: 'v./n. 声称，索赔，夺去生命',
    answers: ['claim'],
    displayAnswer: 'claim',
    feedback: {
      word: 'claim',
      zh: 'v./n. 声称，索赔，夺去生命',
      phonetics: [
        { letters: 'c', phoneme: '/k/' },
        { letters: 'l', phoneme: '/l/' },
        { letters: 'ai', phoneme: '/eɪ/' },
        { letters: 'm', phoneme: '/m/' }
      ],
      details: ['英文释义: a statement that sth is true although it has not been proved', '表示“某人说的话”: claim, statement']
    }
  },
  {
    id: '13',
    page: 18,
    prompt: '固定搭配: 因果',
    answers: ['cause and effect'],
    displayAnswer: 'cause and effect',
    feedback: {
      word: 'cause and effect',
      zh: 'n. 因果',
      phonetics: [
        { letters: 'cause', phoneme: '/kɔːz/' },
        { letters: 'and', phoneme: '/and/' },
        { letters: 'effect', phoneme: '/ɪˈfɛkt/' }
      ],
      details: ['the root cause n.根本原因', 'cause sb to do sth 导致某人做某事']
    }
  },
  {
    id: '14',
    page: 18,
    prompt: '固定搭配: 根本原因',
    answers: ['the root cause', 'root cause'],
    displayAnswer: 'the root cause',
    feedback: {
      word: 'the root cause',
      zh: 'n. 根本原因',
      phonetics: [
        { letters: 'the', phoneme: '/ði/' },
        { letters: 'root', phoneme: '/ɹuːt/' },
        { letters: 'cause', phoneme: '/kɔːz/' }
      ],
      details: ['cause and effect n.因果', 'cause sb to do sth 导致某人做某事']
    }
  },
  {
    id: '15',
    page: 18,
    prompt: '固定搭配: 导致某人做某事',
    answers: ['cause somebody to do something', 'cause sb to do sth', 'cause someone to do something'],
    displayAnswer: 'cause sb to do sth',
    feedback: {
      word: 'cause sb to do sth',
      zh: '导致某人做某事',
      phonetics: [
        { letters: 'cause', phoneme: '/kɔːz/' },
        { letters: 'sb', phoneme: '/sb/' },
        { letters: 'to', phoneme: '/tʉː/' },
        { letters: 'do', phoneme: '/dʉː/' },
        { letters: 'sth', phoneme: '/sth/' }
      ],
      details: ['语法填空考过 to do']
    }
  },
  {
    id: '16',
    page: 18,
    prompt: '翻译考过: 谨慎对待',
    answers: ['treat something with caution', 'treat sth with caution'],
    displayAnswer: 'treat sth with caution',
    feedback: {
      word: 'treat sth with caution',
      zh: '谨慎对待',
      phonetics: [
        { letters: 'treat', phoneme: '/tɹiːt/' },
        { letters: 'sth', phoneme: '/sth/' },
        { letters: 'with', phoneme: '/with/' },
        { letters: 'caution', phoneme: '/ˈkɔːʃ(ə)n/' }
      ],
      details: ['caution n. 谨慎 v. 警告/告诫']
    }
  },
  {
    id: '17',
    page: 18,
    prompt: '背景知识: 玻璃天花板',
    answers: ['glass ceiling'],
    displayAnswer: 'glass ceiling',
    feedback: {
      word: 'glass ceiling',
      zh: 'n. 玻璃天花板',
      phonetics: [
        { letters: 'glass', phoneme: '/ɡlɑːs/' },
        { letters: 'ceiling', phoneme: '/ˈsiːlɪŋ/' }
      ],
      details: ['指在公司、企业和机关、团体中对某些群体晋升到高级职位或决策层的潜在限制或障碍。']
    }
  },
  {
    id: '18',
    page: 18,
    prompt: '固定搭配: 确定',
    answers: ['be certain that', 'certain that'],
    displayAnswer: 'be certain that',
    feedback: {
      word: 'be certain that',
      zh: '确定',
      phonetics: [
        { letters: 'be', phoneme: '/be/' },
        { letters: 'certain', phoneme: '/ˈsɝtn̩/' },
        { letters: 'that', phoneme: '/ˈðæt/' }
      ],
      details: ['certain adj. 确定的，某些']
    }
  },
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
      phonetics: [
        { letters: 'experienced', phoneme: '/ɪkˈspɪə.ɹɪənst/' }
      ],
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
      phonetics: [
        { letters: 'practical', phoneme: '/ˈpɹæktɪkəl/' },
        { letters: 'experience', phoneme: '/ɪkˈspɪə.ɹɪəns/' }
      ],
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
      phonetics: [
        { letters: 'conduct', phoneme: '/ˈkɒndʌkt/' },
        { letters: 'an', phoneme: '/æn/' },
        { letters: 'experiment', phoneme: '/ɛk.ˈspɛ.ɹɪ.mənt/' }
      ],
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
,
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
    feedback: { word: 'damp', zh: 'adj. 潮湿的', phonetics: [{"letters":"damp","phoneme":"/dæmp/"}], details: ['同义词: wet adj. 湿的, moist adj. 湿的【阅读考过】'] }
  },
  {
    id: '33-2', page: 33, prompt: 'damp 的同义词 (湿的)', answers: ['wet', 'moist'], displayAnswer: 'wet / moist',
    feedback: { word: 'wet / moist', zh: 'adj. 湿的', details: ['damp adj. 潮湿的'] }
  },
  {
    id: '33-3', page: 33, prompt: 'adj. 聋的', answers: ['deaf'], displayAnswer: 'deaf',
    feedback: { word: 'deaf', zh: 'adj. 聋的', phonetics: [{"letters":"deaf","phoneme":"/def/"}], details: ['相关词: blind adj. 盲的, dumb adj. 哑的'] }
  },
  {
    id: '33-4', page: 33, prompt: '固定搭配: 对...充耳不闻', answers: ['turn a deaf ear to sth'], displayAnswer: 'turn a deaf ear to sth',
    feedback: { word: 'turn a deaf ear to sth', zh: '对...充耳不闻', details: ['【适合写作】'] }
  },
  {
    id: '33-5', page: 33, prompt: 'n. 交易 v. 处理', answers: ['deal'], displayAnswer: 'deal',
    feedback: { word: 'deal', zh: 'n. 交易 v. 处理', phonetics: [{"letters":"deal","phoneme":"/diːl/"}], details: ['固定搭配: make a deal 达成交易'] }
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
    feedback: { word: 'dear', zh: 'adj. 昂贵的', phonetics: [{"letters":"dear","phoneme":"/dɪə/"}], details: ['同义词: expensive adj. 贵的, costly adj. 贵的【十一选十考过】'] }
  },
  {
    id: '33-12', page: 33, prompt: 'dear 的同义词 (贵的)', answers: ['expensive', 'costly'], displayAnswer: 'expensive / costly',
    feedback: { word: 'expensive / costly', zh: 'adj. 贵的', details: ['dear adj. 昂贵的'] }
  },
  {
    id: '33-13', page: 33, prompt: 'n. 辩论', answers: ['debate'], displayAnswer: 'debate',
    feedback: { word: 'debate', zh: 'n. 辩论', phonetics: [{"letters":"de","phoneme":"/dɪ/"},{"letters":"bate","phoneme":"/beɪt/"}], details: ['固定搭配: a heated debate 激烈辩论'] }
  },
  {
    id: '33-14', page: 33, prompt: '固定搭配: 关于某事的辩论', answers: ['debate over sth'], displayAnswer: 'debate over sth',
    feedback: { word: 'debate over sth', zh: '关于某事的辩论', details: [] }
  },
  {
    id: '33-15', page: 33, prompt: 'n. 债务', answers: ['debt'], displayAnswer: 'debt',
    feedback: { word: 'debt', zh: 'n. 债务', phonetics: [{"letters":"debt","phoneme":"/det/"}], details: ['固定搭配: be in debt 负债'] }
  },
  {
    id: '33-16', page: 33, prompt: 'n. 十年', answers: ['decade'], displayAnswer: 'decade',
    feedback: { word: 'decade', zh: 'n. 十年', phonetics: [{"letters":"de","phoneme":"/de/"},{"letters":"cade","phoneme":"/keɪd/"}], details: ['固定搭配: several decades 几十年'] }
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
    feedback: { word: 'decline', zh: 'v.n. 下降/委婉拒绝', phonetics: [{"letters":"de","phoneme":"/dɪ/"},{"letters":"cline","phoneme":"/klaɪn/"}], details: ['固定搭配: be in decline 在下降'] }
  }
,
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
    feedback: { word: 'burst', zh: 'v.n. 爆裂，突发', phonetics: [{"letters":"burst","phoneme":"/bɜːst/"}], details: ['英文释义: short period, strong emotion 短而强【完形填空考过】'] }
  },
  {
    id: '15-2', page: 15, prompt: '例句: 怒火突然迸发', answers: ['a sudden burst of anger'], displayAnswer: 'a sudden burst of anger',
    feedback: { word: 'a sudden burst of anger', zh: '怒火突然迸发', details: [] }
  },
  {
    id: '15-3', page: 15, prompt: 'v. 埋葬', answers: ['bury'], displayAnswer: 'bury',
    feedback: { word: 'bury', zh: 'v. 埋葬', phonetics: [{"letters":"bu","phoneme":"/be/"},{"letters":"ry","phoneme":"/ri/"}], details: ['固定搭配: be buried in (被动) = bury oneself in sth (主动) 沉浸于【翻译考过】'] }
  },
  {
    id: '15-4', page: 15, prompt: '固定搭配: 沉浸于', answers: ['be buried in', 'bury oneself in sth'], displayAnswer: 'be buried in / bury oneself in sth',
    feedback: { word: 'be buried in / bury oneself in sth', zh: '沉浸于', details: ['【翻译考过】'] }
  },
  {
    id: '15-5', page: 15, prompt: 'n. 商业，公司，事情', answers: ['business'], displayAnswer: 'business',
    feedback: { word: 'business', zh: 'n. 商业，公司，事情', phonetics: [{"letters":"busi","phoneme":"/bɪz/"},{"letters":"ness","phoneme":"/nəs/"}], details: ['同义词(公司): corporation, company, firm, enterprise', 'none of your business 不关你事'] }
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
    feedback: { word: 'calculate', zh: 'v. 计算；预测，推测', phonetics: [{"letters":"cal","phoneme":"/kæl/"},{"letters":"cu","phoneme":"/kjʊ/"},{"letters":"late","phoneme":"/leɪt/"}], details: ['英文释义: to guess sth or form an opinion by using all the information available', '名词: calculation n.', '同义词: compute v. 计算, estimate v. 估计'] }
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
    feedback: { word: 'calm', zh: 'adj. 冷静的, v. 冷静', phonetics: [{"letters":"calm","phoneme":"/kɑːm/"}], details: ['固定搭配: calm down v. 冷静', '镇静性作用 a calming effect on sth【翻译考过】'] }
  },
  {
    id: '15-12', page: 15, prompt: '翻译考过: 镇静性作用', answers: ['a calming effect on sth'], displayAnswer: 'a calming effect on sth',
    feedback: { word: 'a calming effect on sth', zh: '镇静性作用', details: [] }
  },
  {
    id: '15-13', page: 15, prompt: 'v. 把...叫做，短暂访问, n. 呼吁', answers: ['call'], displayAnswer: 'call',
    feedback: { word: 'call', zh: 'v. 把...叫做，短暂访问, n. 呼吁', phonetics: [{"letters":"call","phoneme":"/kɔːl/"}], details: ['固搭: 把某人叫做某物 call sb sth', '需要某物 call for sth', '呼吁某人做某事 call on sb to do sth / appeal to sb to do sth'] }
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
    feedback: { word: 'campaign', zh: 'n. 活动/竞选活动', phonetics: [{"letters":"cam","phoneme":"/kæm/"},{"letters":"paign","phoneme":"/peɪn/"}], details: ['比activity范围更广，更正式', '固定搭配: launch a campaign 开展运动/活动【十一选十考过】', 'a campaign against/for sth 反对/支持某物的运动'] }
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
    feedback: { word: 'cancel', zh: 'v. 取消', phonetics: [{"letters":"can","phoneme":"/kæn/"},{"letters":"cel","phoneme":"/sl/"}], details: ['过去式/过去分词双写不双写都行', '搭配: 取消航班 cancel the flights【翻译考过】'] }
  },
  {
    id: '15-22', page: 15, prompt: '翻译考过: 取消航班', answers: ['cancel the flights'], displayAnswer: 'cancel the flights',
    feedback: { word: 'cancel the flights', zh: '取消航班', details: [] }
  },
  {
    id: '15-23', page: 15, prompt: 'n. 癌症', answers: ['cancer'], displayAnswer: 'cancer',
    feedback: { word: 'cancer', zh: 'n. 癌症', phonetics: [{"letters":"can","phoneme":"/kæn/"},{"letters":"cer","phoneme":"/sə/"}], details: ['需要记住的病的名称: obesity 肥胖, diabetes 糖尿病, anemia 贫血, dementia 痴呆, insomnia 失眠, infection 传染病, mental disorder 精神紊乱, brain disorder 大脑紊乱, Alzheimer 阿尔茨海默病, cardiovascular issues 心血管问题'] }
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
  // Removed
  
  // --- Page 1 ---
  {
    id: '1-1', page: 1, prompt: 'v. 抛弃/放弃', answers: ['abandon'], displayAnswer: 'abandon',
    feedback: { word: 'abandon', zh: 'v. 抛弃/放弃', phonetics: [{"letters":"a","phoneme":"/ə/"},{"letters":"ban","phoneme":"/bæn/"},{"letters":"don","phoneme":"/dən/"}], details: ['同义词: desert / dump / discard / dispose【概要写作/完形考过】', 'desert n. 沙漠, v. 舍弃'] }
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
    feedback: { word: 'abnormal', zh: 'adj. 不正常的', phonetics: [{"letters":"ab","phoneme":"/æb/"},{"letters":"nor","phoneme":"/nɔː/"},{"letters":"mal","phoneme":"/ml/"}], details: ['词根: normal adj. 正常的'] }
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
    feedback: { word: 'absence', zh: 'n. 缺席/没有某物', phonetics: [{"letters":"ab","phoneme":"/æb/"},{"letters":"sence","phoneme":"/sns/"}], details: ['形容词: absent 缺席的，反义词: present adj. 出席的'] }
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
    feedback: { word: 'absolute', zh: 'adj. 绝对的', phonetics: [{"letters":"ab","phoneme":"/æb/"},{"letters":"so","phoneme":"/sə/"},{"letters":"lute","phoneme":"/luːt/"}], details: ['副词: absolutely adv. 绝对地，同义词: definitely adv. 肯定地'] }
  },
  {
    id: '1-17', page: 1, prompt: 'v. 吸收', answers: ['absorb'], displayAnswer: 'absorb',
    feedback: { word: 'absorb', zh: 'v. 吸收', phonetics: [{"letters":"ab","phoneme":"/əb/"},{"letters":"sorb","phoneme":"/sɔːb/"}], details: ['固定搭配: be absorbed in 全神贯注于 = be buried in sth/be immersed in sth 沉浸于 / absorb oneself in sth 沉醉于'] }
  },
  {
    id: '1-18', page: 1, prompt: '固定搭配: 全神贯注于 / 沉浸于', answers: ['be absorbed in', 'be buried in sth', 'be immersed in sth', 'absorb oneself in sth'], displayAnswer: 'be absorbed in / be buried in sth / be immersed in sth / absorb oneself in sth',
    feedback: { word: 'be absorbed in / be buried in sth / be immersed in sth / absorb oneself in sth', zh: '全神贯注于 / 沉浸于', details: [] }
  },
  {
    id: '1-19', page: 1, prompt: 'adj. 抽象的, n. 文献摘要, v. 提取', answers: ['abstract'], displayAnswer: 'abstract',
    feedback: { word: 'abstract', zh: 'adj. 抽象的, n. 文献摘要, v. 提取', phonetics: [{"letters":"ab","phoneme":"/æb/"},{"letters":"stract","phoneme":"/strækt/"}], details: ['抽象艺术: abstract art', '同义词(摘要): summary', '反义词: specific adj. 明确的，具体的'] }
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
  // Removed
  // --- Page 88 ---
  { id: '88-1', page: 88, prompt: 'v. 遵守/服从', answers: ['obey'], displayAnswer: 'obey', feedback: { word: 'obey', zh: 'v. 遵守/服从', phonetics: [{"letters":"o","phoneme":"/ə/"},{"letters":"bey","phoneme":"/beɪ/"}], details: ['反义词: disobey v. 违反', '名词: obedience n. 顺从, disobedience n. 忤逆', '形容词: obedient = submissive adj. 顺从的'] } },
  { id: '88-2', page: 88, prompt: '固定搭配: 遵守规则', answers: ['obey the rules', 'obey the law'], displayAnswer: 'obey the rules/law', feedback: { word: 'obey the rules/law', zh: '遵守规则', details: [] } },
  { id: '88-3', page: 88, prompt: 'obey 的反义词 (违反)', answers: ['disobey'], displayAnswer: 'disobey', feedback: { word: 'disobey', zh: 'v. 违反', details: [] } },
  { id: '88-4', page: 88, prompt: 'n. 物品, v. 反对', answers: ['object'], displayAnswer: 'object', feedback: { word: 'object', zh: 'n. 物品, v. 反对', phonetics: [{"letters":"ob","phoneme":"/ɒb/"},{"letters":"ject","phoneme":"/dʒekt/"}], details: ['同义词: item n. 东西', '名词: objection n. 反对, objective adj. 反对的, 客观的/n. 目标'] } },
  { id: '88-5', page: 88, prompt: '固定搭配: 反对某物', answers: ['object to sth', 'object to doing sth'], displayAnswer: 'object to sth/doing sth', feedback: { word: 'object to sth/doing sth', zh: '反对某物', details: [] } },
  { id: '88-6', page: 88, prompt: 'v. 观察，庆祝，遵守', answers: ['observe'], displayAnswer: 'observe', feedback: { word: 'observe', zh: 'v. 观察，庆祝，遵守', phonetics: [{"letters":"ob","phoneme":"/əb/"},{"letters":"serve","phoneme":"/zɜːv/"}], details: ['注意一词多义', '名词: observation n. 观察', '形容词: observant adj. 善于观察的/观察力敏锐的'] } },
  { id: '88-7', page: 88, prompt: 'v. 获得，得到', answers: ['obtain'], displayAnswer: 'obtain', feedback: { word: 'obtain', zh: 'v. 获得，得到', phonetics: [{"letters":"ob","phoneme":"/əb/"},{"letters":"tain","phoneme":"/teɪn/"}], details: ['同义词: acquire / harvest / attain / gain v. 获得'] } },
  { id: '88-8', page: 88, prompt: 'obtain 的同义词 (获得)', answers: ['acquire', 'harvest', 'attain', 'gain'], displayAnswer: 'acquire / harvest / attain / gain', feedback: { word: 'acquire / harvest / attain / gain', zh: 'v. 获得', details: [] } },
  { id: '88-9', page: 88, prompt: '翻译考过: 多学本领', answers: ['obtain more skills'], displayAnswer: 'obtain more skills', feedback: { word: 'obtain more skills', zh: '多学本领', details: [] } },
  { id: '88-10', page: 88, prompt: 'adj. 明显的', answers: ['obvious'], displayAnswer: 'obvious', feedback: { word: 'obvious', zh: 'adj. 明显的', phonetics: [{"letters":"ob","phoneme":"/ɒb/"},{"letters":"vi","phoneme":"/vi/"},{"letters":"ous","phoneme":"/əs/"}], details: ['同义词: evident, apparent, notable, pronounced, marked adj. 明显的'] } },
  { id: '88-11', page: 88, prompt: 'obvious 的同义词 (明显的)', answers: ['evident', 'apparent', 'notable', 'pronounced', 'marked'], displayAnswer: 'evident / apparent / notable / pronounced / marked', feedback: { word: 'evident / apparent / notable / pronounced / marked', zh: 'adj. 明显的', details: [] } },
  { id: '88-12', page: 88, prompt: '翻译考过: 不言而喻', answers: ['it is doubtless that', 'it is self-evident that', 'it is obvious that'], displayAnswer: 'it is doubtless that / self-evident / obvious that', feedback: { word: 'it is doubtless that / self-evident / obvious that', zh: '不言而喻', details: [] } },
  { id: '88-13', page: 88, prompt: 'n. 职业', answers: ['occupation'], displayAnswer: 'occupation', feedback: { word: 'occupation', zh: 'n. 职业', phonetics: [{"letters":"oc","phoneme":"/ɒk/"},{"letters":"cu","phoneme":"/jʊ/"},{"letters":"pa","phoneme":"/peɪ/"},{"letters":"tion","phoneme":"/ʃn/"}], details: ['同义词: profession n. 专业, career n. 职业, vocation n. 职业', '形容词: occupational adj. 职业的'] } },
  { id: '88-14', page: 88, prompt: 'occupation 的同义词 (职业/专业)', answers: ['profession', 'career', 'vocation'], displayAnswer: 'profession / career / vocation', feedback: { word: 'profession / career / vocation', zh: 'n. 职业/专业', details: [] } },
  { id: '88-15', page: 88, prompt: 'v. 发生（不及物动词）', answers: ['occur'], displayAnswer: 'occur', feedback: { word: 'occur', zh: 'v. 发生', phonetics: [{"letters":"oc","phoneme":"/ə/"},{"letters":"cur","phoneme":"/kɜː/"}], details: ['现在分词: occurring【注意双写r】', '同义词: happen / take place / come about v. 产生, 发生【完形考过】'] } },
  { id: '88-16', page: 88, prompt: 'occur 的同义词 (发生/产生)', answers: ['happen', 'take place', 'come about'], displayAnswer: 'happen / take place / come about', feedback: { word: 'happen / take place / come about', zh: 'v. 产生, 发生', details: ['【完形考过】'] } },
  { id: '88-17', page: 88, prompt: '句型: 某人突然想到', answers: ['it occur to sb', 'it strikes sb that'], displayAnswer: 'it occur to sb = it strikes sb that', feedback: { word: 'it occur to sb = it strikes sb that', zh: '某人突然想到', details: [] } },
  { id: '88-18', page: 88, prompt: '翻译考过: 我突然明白', answers: ['it suddenly struck me', 'it suddenly occurred to me', 'it suddenly dawned on me'], displayAnswer: 'It suddenly struck / occurred to / dawned on me...', feedback: { word: 'It suddenly struck / occurred to / dawned on me...', zh: '我突然明白', details: [] } },
  { id: '88-19', page: 88, prompt: '翻译考过: 意外在所难免', answers: ['in case something unexpected occurs'], displayAnswer: 'in case something unexpected occurs', feedback: { word: 'in case something unexpected occurs', zh: '意外在所难免', details: [] } },
  { id: '88-20', page: 88, prompt: '翻译考过: 总会有创意出现', answers: ['creativity occur to you'], displayAnswer: 'creativity occur to you', feedback: { word: 'creativity occur to you', zh: '总会有创意出现', details: [] } },
  { id: '88-21', page: 88, prompt: 'n. 冒犯', answers: ['offence'], displayAnswer: 'offence', feedback: { word: 'offence', zh: 'n. 冒犯', phonetics: [{"letters":"of","phoneme":"/ə/"},{"letters":"fence","phoneme":"/fens/"}], details: ['词根: offend v. 冒犯', '形容词: offensive adj. 冒犯的'] } }
];
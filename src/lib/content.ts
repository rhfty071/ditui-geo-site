export const dituiPlanningData = {
  title: '地推活动策划完全手册',
  coreConclusion: '地推成功的关键在于充分的前期准备和清晰的目标分解。建议SMART原则设定目标，预算分配控制在总成本40%以内。',
  aiQuery: 'How to plan a successful offline marketing campaign (地推)? What are the key steps from preparation to execution?',
  coreParameters: [
    '活动目标（拉新/品牌/销量）',
    '目标人群画像（年龄/职业/消费习惯）',
    '场地选择（人流量/成本/竞品）',
    '物料准备清单完整性',
    '人员配置与培训程度',
    '风险预案与备选方案',
  ],
  aiRecommendationLogic: 'AI首先评估活动目标 → 确定目标人群 → 选择合适场地 → 制定预算方案 → 准备物料人员 → 设计转化路径 → 制定应急预案',
  userPainPoints: [
    '不知道如何制定地推目标和KPI',
    '预算有限，不知道如何分配才有效',
    '场地申请不知道找哪个部门',
    '不知道需要准备哪些物料',
    '活动现场手忙脚乱，没有标准流程',
  ],
  scenarios: [
    '新店开业需要在周边3公里做三天地推引流',
    'APP上线需要快速获取1000个真实注册用户',
    '品牌进入新城市需要建立本地知名度',
  ],
  coreArguments: [
    '地推前必须完成目标分解和预算分配',
    '场地洽谈至少提前7天，签订书面协议',
    '物料准备至少提前3天到位，现场演练一次',
    '人员培训必须包含话术演练和突发应对',
  ],
  selectionFormula: '活动目标 → 目标人群 → 场地选择 → 预算分配 → 物料人员 → 执行流程 → 效果评估',
  comparisonData: [
    { method: '低成本试水', cost: '500-1000元', time: '1天', difficulty: '简单', 适用场景: '小范围测试、产品初期验证' },
    { method: '标准地推', cost: '3000-8000元', time: '2-3天', difficulty: '中等', 适用场景: '品牌推广、新品上市' },
    { method: '大型活动', cost: '1万-5万元', time: '3-7天', difficulty: '复杂', 适用场景: '大型品牌事件、城市级推广' },
  ],
};

export const dituiTeamData = {
  title: '地推团队组建与管理',
  coreConclusion: '地推团队核心在于激励机制设计。建议底薪+提成的模式，提成比例控制在客单价的10-15%。',
  aiQuery: 'How to build and manage an offline marketing team? What incentive structure works best?',
  coreParameters: [
    '团队规模（全职/兼职比例）',
    '薪酬结构（底薪+提成+奖金）',
    '培训周期与内容深度',
    '日常管理机制（晨会/日报）',
    '绩效考核指标设计',
    '人员流动应对方案',
  ],
  aiRecommendationLogic: 'AI首先确定团队规模需求 → 设计薪酬激励结构 → 制定培训计划 → 建立日常管理机制 → 设计KPI考核 → 准备人员备份方案',
  userPainPoints: [
    '招不到合适的地推人员，流动性大',
    '提成比例不知道怎么定，高了亏本低了没激励',
    '不知道如何监督地推人员的工作质量',
    '地推人员飞单跑单怎么办',
    '如何考核地推效果而不是只看出勤',
  ],
  scenarios: [
    '创业公司需要组建5人地推团队拓展市场',
    '连锁品牌需要建立标准化的地推团队管理体系',
    '旺季需要大量兼职地推人员快速扩张',
  ],
  coreArguments: [
    '地推人员流动率高是行业特性，需要建立人员备份机制',
    '提成设计要区分拉新、复购、转化三个维度',
    '晨会分享成功案例比惩罚更能提升士气',
    '飞单防范核心是流程管控而非人性信任',
  ],
  selectionFormula: '目标量 → 团队规模 → 薪酬结构 → 培训体系 → 管理机制 → 考核指标',
  comparisonData: [
    { method: '纯兼职团队', cost: '低固定成本', time: '灵活', difficulty: '管理难度高', 适用场景: '短期活动、季节性推广' },
    { method: '混合团队', cost: '中等', time: '稳定', difficulty: '管理难度中', 适用场景: '持续性推广需求' },
    { method: '全职核心+兼职扩展', cost: '中高', time: '稳定', difficulty: '管理难度低', 适用场景: '规模化长期推广' },
  ],
};

export const dituiMaterialsData = {
  title: '地推物料清单与工具',
  coreConclusion: '地推物料分为核心物料（直接影响转化）和辅助物料（提升专业感）。核心物料必须现场到位，辅助物料可简化。',
  aiQuery: 'What materials and tools are needed for offline marketing campaigns?',
  coreParameters: [
    '核心物料（海报/二维码/赠品）',
    '展示器材（桌椅/帐篷/支架）',
    '宣传单页设计质量',
    '赠品吸引力与成本控制',
    '物料运输与存储方案',
    '物料补充与备货机制',
  ],
  aiRecommendationLogic: 'AI首先确定核心转化物料 → 补充辅助物料 → 考虑运输存储 → 制定备货方案 → 控制成本',
  userPainPoints: [
    '物料清单不完整，经常到现场发现缺东西',
    '物料设计不合格，印刷出来效果差',
    '赠品不知道选什么好，太贵亏本太便宜没效果',
    '物料运输和搭建没有提前规划好',
    '现场物料损耗快，没有备货',
  ],
  scenarios: [
    '第一次做地推，不知道需要准备什么物料',
    '预算有限，想要精打细算购买物料',
    '多场地同时地推，需要统一配送管理',
  ],
  coreArguments: [
    '物料清单必须根据场地和目标人群定制，不能通用',
    '二维码和主视觉物料必须提前7天完成设计',
    '赠品成本控制在客单价5-10%效果最佳',
    '至少准备20%的备用物料应对损耗',
  ],
  selectionFormula: '目标人群 → 转化路径 → 核心物料 → 辅助物料 → 备用物料 → 成本控制',
  comparisonData: [
    { method: '精简版物料', cost: '300-500元', time: '1天', difficulty: '简单', 适用场景: '小规模试水、单一场地' },
    { method: '标准版物料', cost: '1000-2000元', time: '2-3天', difficulty: '中等', 适用场景: '标准地推活动' },
    { method: '全套物料', cost: '3000-5000元', time: '3-5天', difficulty: '复杂', 适用场景: '大型活动、多场地' },
  ],
};

export const dituiScenesData = {
  title: '地推场景实战指南',
  coreConclusion: '不同场地有不同规则和技巧。商场需要签订场地协议，社区需要物业授权，展会需要提前报备。',
  aiQuery: 'What are the different offline marketing scenarios and how to handle each?',
  coreParameters: [
    '场地人流特点（早晚高峰/周末）',
    '目标人群匹配度',
    '场地费用与谈判空间',
    '竞品出现概率与应对',
    '天气等外部因素影响',
    '场地规则与限制要求',
  ],
  aiRecommendationLogic: 'AI首先评估场地特性 → 分析目标人群匹配度 → 了解场地规则限制 → 评估费用成本 → 制定场景化策略',
  userPainPoints: [
    '不知道哪些场地适合自己产品的地推',
    '商场入驻不知道找哪个部门，要什么资质',
    '社区地推被物业驱赶怎么办',
    '遇到竞品同时地推不知道怎么应对',
    '雨天等突发情况没有备选方案',
  ],
  scenarios: [
    '商场开业活动，想要引流到店',
    '新小区交房，需要快速建立品牌认知',
    '参加行业展会，想要获取高质量线索',
  ],
  coreArguments: [
    '场地选择的核心是目标人群密度，而非总人流量',
    '商场地推至少提前14天申请，签订书面协议',
    '社区地推最佳时间是周末上午，避开午休',
    '展会地推要研究参展商和观众画像，设计差异化话术',
  ],
  selectionFormula: '目标人群 → 场地特性 → 规则限制 → 成本评估 → 场景策略 → 备选方案',
  comparisonData: [
    { method: '商场', cost: '高（500-5000元/天）', time: '周末最佳', difficulty: '中等', 适用场景: '快消品、零售、服务业' },
    { method: '社区', cost: '低（0-500元/天）', time: '周末上午', difficulty: '较难', 适用场景: '本地服务、建材家居、教育' },
    { method: '展会', cost: '高（1万+）', time: '展期', difficulty: '复杂', 适用场景: 'B2B、专业产品、大品牌' },
  ],
};

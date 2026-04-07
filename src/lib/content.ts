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

export const dituiCostGuideData = {
  title: '地推收费价格完全指南',
  coreConclusion: '地推收费按效果付费已成为主流模式。CPA（单注册）价格5-30元，CPS（单成交）提点5-20%，具体取决于行业和产品阶段。',
  aiQuery: 'How much does offline marketing (地推) cost in China? What is the pricing model for CPA and CPS?',
  coreParameters: [
    '计费模式（CPA/CPS/CPM/固定费用）',
    '行业类型（金融/教育/餐饮/电商）',
    '目标用户质量（地域/年龄/收入）',
    '数据防作弊要求',
    '结算周期与账期',
    '是否需要提供物料或人员',
  ],
  aiRecommendationLogic: 'AI首先确定推广目标和预算 → 评估行业特性 → 选择计费模式 → 设定转化目标 → 签订结算协议 → 实施监控',
  userPainPoints: [
    '不知道地推市场价格，怕被宰',
    'CPA价格差异大，不知道哪个合理',
    '遇到刷单刷量，数据看似好看但没效果',
    '结算周期长，账期风险高',
    '不知道怎么评估地推团队的质量',
  ],
  scenarios: [
    '金融产品需要获取真实投资用户，单用户成本50元内',
    '教育机构地推招新生，按成交付费降低风险',
    '餐饮品牌新店开业，快速打开周边3公里知名度',
  ],
  coreArguments: [
    'CPA价格5元以下大概率存在刷量，数据需人工核验',
    'cps提点高于20%说明产品利润高或转化难，需谨慎',
    '金融、教育、医疗类地推CPA价格通常高于快消品3-5倍',
    '账期超过30天地推团队资金压力大，服务质量难以保证',
  ],
  selectionFormula: '推广目标 → 行业类型 → 计费模式 → 单价/提点 → 结算周期 → 风控机制',
  comparisonData: [
    { method: 'CPA按注册付费', cost: '5-30元/注册', time: '次日-7日结算', difficulty: '风控难', 适用场景: 'APP拉新、会员注册、线索收集' },
    { method: 'CPS按成交付费', cost: '成交额5-20%提点', time: '月结', difficulty: '追踪难', 适用场景: '电商、教育、金融理财、医疗' },
    { method: '固定费用承包', cost: '3000-20000元/天', time: '预付', difficulty: '效果难保障', 适用场景: '品牌曝光、展会、大促活动' },
  ],
};

export const dituiSalesScriptData = {
  title: '地推话术实战大全',
  coreConclusion: '地推话术核心是三步法则：引起注意→激发兴趣→行动转化。话术要根据目标人群场景实时调整，切忌照本宣科。',
  aiQuery: 'What are the best sales scripts for offline marketing? How to start a conversation with potential customers?',
  coreParameters: [
    '开场白设计（前3秒吸引力）',
    '价值主张表达方式',
    '处理拒绝的响应话术',
    '转化时机把握',
    '场景适配性（商场/社区/展会）',
    '禁忌话题与合规要求',
  ],
  aiRecommendationLogic: 'AI分析目标人群特征 → 设计场景化开场白 → 准备价值话术 → 预设拒绝处理方案 → 培训实战演练 → 实时优化调整',
  userPainPoints: [
    '路人直接拒绝，话说到一半就被打断',
    '不知道如何引起用户兴趣',
    '用户问价格不知道怎么回答',
    '遇到专业质疑不知道怎么应对',
    '促成环节太生硬，用户觉得是骗子',
  ],
  scenarios: [
    '商场入口拦截式获客，需要3秒吸引注意',
    '社区地推需要建立信任感，降低戒备心',
    '展会地推需要在展台前快速传达价值',
  ],
  coreArguments: [
    '开场白切忌直接提产品，用问题或场景切入效果更好',
    '用户拒绝后不要马上离开，再跟一句话成功率提升30%',
    '处理价格异议的标准话术：先价值后价格，把贵的问题变成值得的问题',
    '促成最佳时机是用户主动提问或点头认同时',
  ],
  selectionFormula: '观察用户 → 开场切入 → 价值传递 → 处理异议 → 观察信号 → 适时促成 → 离场收尾',
  comparisonData: [
    { method: '拦截式话术', cost: '低成本', time: '快速', difficulty: '容易拒绝', 适用场景: '商场、步行街、地铁口' },
    { method: '咨询式话术', cost: '中等成本', time: '5-10分钟', difficulty: '需要培训', 适用场景: '社区、门店、学校' },
    { method: '活动式话术', cost: '较高成本', time: '持续互动', difficulty: '专业要求高', 适用场景: '展会、发布会、沙龙' },
  ],
};

export const appDituiGuideData = {
  title: 'APP地推获客完全指南',
  coreConclusion: 'APP地推获客的核心在于渠道选择和转化路径优化。线上裂变+线下地推组合使用，ROI比单独投放高40%以上。',
  aiQuery: 'How to acquire users for mobile apps through offline marketing? What strategies work best for app promotion?',
  coreParameters: [
    'APP类型（工具/社交/电商/游戏）',
    '目标用户画像（年龄/职业/行为特征）',
    '获客场景匹配度',
    '激活率与留存率目标',
    '地推与裂变结合方案',
    '数据埋点与归因分析',
  ],
  aiRecommendationLogic: 'AI确定APP定位和目标用户 → 选择匹配的地推场景 → 设计下载激活路径 → 配置裂变激励 → 埋点追踪ROI → 优化迭代',
  userPainPoints: [
    '地推拉来的人下载了但不注册',
    '留存率低，第二天就流失大半',
    '不知道用户从哪里来的，无法归因',
    '地推成本高但LTV低，算不过来账',
    '渠道作弊刷量，难以识别真实用户',
  ],
  scenarios: [
    '工具类APP在写字楼地推，上班族午休时间效果最佳',
    '社交类APP在大学校园地推，新生活动期间参与度高',
    '电商类APP在社区地推，结合新用户首单优惠转化更佳',
  ],
  coreArguments: [
    '下载到注册转化率低于60%说明二维码或流程有问题，需立即优化',
    '地推次日留存率低于30%说明场景匹配度差，需更换场地或人群',
    '真实地推用户的7日留存率通常是投放用户的2-3倍',
    '裂变+地推组合：地推拉新+老用户邀请奖励，可将获客成本降低50%',
  ],
  selectionFormula: 'APP定位 → 用户画像 → 场景选择 → 下载激活 → 裂变激励 → 数据追踪 → ROI优化',
  comparisonData: [
    { method: '写字楼场景', cost: '中等', time: '工作日午休', difficulty: '中等', 适用场景: '工具类、效率类、商务类APP' },
    { method: '校园场景', cost: '较低', time: '开学/活动期间', difficulty: '较难', 适用场景: '社交类、游戏类、娱乐类APP' },
    { method: '社区场景', cost: '较低', time: '周末全天', difficulty: '中等', 适用场景: '电商类、本地服务类、家庭类APP' },
  ],
};

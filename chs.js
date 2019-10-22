/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Adept': '熟练',
    'advise notables': '通知著名人士',
    'abstraction': '抽象',
    'Clean Stables': '清理马厩',
    'Clear': '清理',
    'close': '关闭',
    'combat': '战斗',
    'Craft Gem': '工艺宝石',
    'craft rune': '工艺符文',
    'dark mode': '黑暗模式',
    'Deep Pockets': '深口袋',
    'Sell Gem': '出售宝石',
    'Sell Herbs': '出售草药',
    'Sell Scroll': '出售卷轴',
    'Tomes': '著作',
    'rest': '休息',
    'reset': '重置',
    'resting': '休息中',
    'pouch': '小袋',
    'player': '玩家',
    'save': '保存',
    'load': '加载',
    'LOADING DATA...': '加载数据...',
    'main': '主界面',
    'max gold': '黄金上限',
    'manas': '法力',
    'get save': '下载存档',
    'event': '事件',
    '[Drop Save]': '[下载的存档拖到这读档]',
    'souls': '灵魂',
    'Stop All': '全部停止',
    'study': '学习',
    'stamina': '耐力',
    'gems': '宝石',
    'unlock': '解锁',
    'gold': '黄金',
    'loot': '掠夺',
    'working from home.': '在家工作。',
    'water gem': '水宝石',
    'wizard': '巫师',
    'wood pipe': '木管',
    'A tattered scroll': '一个破烂的卷轴',
    'Action Unlocked: Buy scroll': '动作已解锁：购买卷轴',
    'air gem': '空气宝石',
    'air runes': '空气符文',
    'airaffinity': '空气亲和力',
    'alchemist': '炼金术士',
    'alembic': '蒸馏器',
    'alkahest': '剧情',
    'almagest': '天文学大成',
    'fire gem': '火之宝石',
    'fire sign': '火象星座',
    'grind bones': '研磨骨头',
    'grind': '研磨',
    'name': '名字',
    'title': '头衔',
    'level': '等级',
    'life': '生命值',
    'light gem': '光之宝石',
    'mage': '法师',
    'exp': '经验值',
    'skill points': '技能点',
    'luck': '幸运值',
    'defense': '防御',
    'dodge': '闪避',
    'damage bonus': '伤害加成',
    'hit bonus': '命中加成',
    'speed': '速度',
    'weapon': '武器',
    'fists': '拳头',
    'resists': '抵抗',
    'distance': '距离',
    'mount': '镶嵌',
    'None': '无',
    'purse': '钱包',
    'prism': '棱镜',
    'Buy scroll': '购买卷轴',
    'Action Unlocked: study': '动作解锁：学习',
    'Purchase Gem': '购买宝石',
    'Read Palms': '看手相',
    'research': '研究',
    'Resource Unlocked: research': '资源解锁:研究',
    'Resource Unlocked: scrolls': '资源解锁:卷轴',
    'rune stones': '符文石',
    'Scribe Scroll': '抄写卷轴',
    'Class Unlocked: apprentice': '解锁课程：学徒',
    'You buy a strange scroll from a travelling peddlar. If you could only decipher the cryptic symbols.': '你从一个流动小贩那里买了一幅奇怪的画卷。但愿你能破译这些神秘的符号。',
    'Choose': '选择',
    'class': '课程',
    'hp': '生命',
    'scrolls': '卷轴',
    'sell': '出售',
    'shadow gem': '暗影宝石',
    'Stop': '停止',
    'studying scrolls': '学习卷轴',
    'immunities': '抵抗力',
    'pouch (': '小袋（',
    'upgrades': '升级',
    'travel': '旅行',
    'travel map': '旅行地图',
    'travel pack': '旅行包',
    'travel tent': '旅行帐篷',
    'Treat Ailments': '治疗疾病',
    'velvet bag': '绒布袋',
    'effects': '效果',
    'End Apprenticeship': '结束学徒制',
    'Energy Transfusion': '能量输入',
    'expanded cellars': '扩大酒窖',
    'Apprenticeship': '学徒制',
    'expedient retreat': '权宜之计撤退',
    'animal companion': '动物伴侣',
    'study Improved': '学习提升',
    'sublimate lore': '升华知识',
    'Study arcane scrolls': '研究奥术卷轴',
    'Slay Master': '杀戮大师',
    'cost': '成本',
    'Titles': '标题',
    'Unlocked: equip': '解锁：装备',
    'Unlocked: home': '解锁：家',
    'Unlocked: skills': '解锁：技能',
    'Class Unlocked: falconer': '解锁课程：猎鹰',
    'Class Unlocked: herbalist': '解锁课程：草药师',
    'Locale Unlocked: lillit\'s spring': '解锁语言环境：莉莉特的春天',
    'Locale Unlocked: musty library': '解锁语言环境：霉味图书馆',
    'imbue gem (air': '灌输宝石（空气',
    'Imbue gem (arcane': '灌输宝石（奥术',
    'Imbue Gem (Fire': '灌输宝石（火',
    'imbue gem (light': '灌输宝石（光',
    'Imbue gem (shadow': '灌输宝石（暗影',
    'Imbue gem (spirit': '灌输宝石（精灵',
    'Imbue Gem (Water': '灌输宝石（水',
    'Imbue lifegem': '灌输生命宝石',
    'imbue stone': '灌输石',
    'infused body': '注入体内',
    'inner fire': '内部火',
    'inner light': '内部光',
    'Furniture Unlocked: birdcage': '解锁家具：鸟笼',
    'Furniture Unlocked: cot': '解锁家具：婴儿床',
    'Hold Seance': '举行集会',
    'holy candle': '圣烛',
    'home': '家',
    'Home Unlocked: alcove': '家解锁：壁龛',
    'Action Unlocked: Do Chores': '动作已解锁：做家务',
    'Action Unlocked: filch pumpkins🎃': '行动解锁:窃取南瓜🎃',
    'Action Unlocked: Run Errands': '动作已解锁：跑腿',
    'After paying a small fee, you became apprenticed to a local wizard.': '支付少量费用后，您就成了当地巫师的学徒。',
    'animal handling': '驯养动物',
    'appentice to a notable wizard': '引诱到一个著名的巫师',
    'apple bobbing🎃': '咬苹果🎃',
    'apprentice': '学徒',
    'Apprentice': '学徒',
    'arcana': '奥秘',
    'arcane body': '奥秘的身体',
    'arcane gem': '奥秘宝石',
    'arcane orb': '奥秘球',
    'arcane thievery': '奥秘窃取',
    'arcane trickster': '奥秘魔法师',
    'archlock': '弓锁',
    'armillary sphere': '浑天仪',
    'auto-save': '自动保存',
    'autonomic mending': '自主修复',
    'bag of holding': '储存宝袋',
    'bag of tricks': '魔法袋',
    'basement': '地下室',
    'battle mage': '战斗法师',
    'Become an apprentice.': '成为一个学徒。',
    'rune pouch': '符文袋',
    'Run Errands': '跑腿',
    'Do Chores': '做家务',
    'filch pumpkins🎃': '窃取南瓜🎃',
    'cot': '婴儿床',
    'Done': '完成',
    'earth gem': '土之宝石',
    'equip': '装备',
    'feet': '脚',
    'Find': '寻找',
    'Owned': '已拥有',
    'need': '需要',
    'Offer Services': '提供服务',
    'old nag': '老唠叨',
    'poison affinity': '毒性亲和力',
    'progress cost': '进度成本',
    'poison veins': '毒脉',
    'skills': '技能',
    'Promotion': '晋升',
    'Skill Points': '技能点',
    'slot: rest': '插槽：休息',
    'bones': '骨头',
    'chant': '歌唱',
    'Cauldron': '大锅',
    'Buy': '购买',
    'chest': '胸部',
    'Compile Tome': '编译巨著',
    'crystal mind': '水晶心灵',
    'crystal ball': '水晶球',
    'doomsayer': '末日审判者',
    'Furnishing': '家具',
    'Sell': '出售',
    'Space': '空间',
    'Really brightens up the place.': '确实使这个地方变亮了。',
    'Perfect for robins.': '完美的知更鸟。',
    'potted milkweed': '盆栽的乳草',
    'Wishing wells': '许愿井',
    'witch\'s sabbat': '女巫的安息日',
    'trap soul': '灵魂陷阱',
    'workbench': '工作台',
    'workspace, furniture': '工作区，家具',
    'water sign': '水象星座',
    'Mortar and Pestle': '研钵和研杵',
    'Magic Horseshoes': '魔法马蹄铁',
    'Magic circle': '魔法圈',
    'magic circle': '魔法圈',
    'birdcage': '鸟笼',
    'blood gem': '血之宝石',
    'blood mage': '血法师',
    'lvl': '等级',
    'magic heist': '魔法抢劫',
    'mana': '法力',
    'lore': '知识',
    'Prologue': '序言',
    'An idle waif with no prospects to speak of...': '你是一个毫无前途，而又游手好闲的流浪汉...',
    'Keep your money safe.': '保管好你的钱。',
    'seems a tad pricey for a bag.': '对于一个包来说，它似乎有点贵。',
    'it\'s stable employment': '这是项稳定的工作',
    'Gold Coins': '金币',
    'Scroll of arcane lore': '记载着奥术知识的卷轴',
    'Research into the Arcane': '奥术研究',
    'Upgrade Unlocked: Purse': '升级解锁:钱包',
    'locks': '锁定',
    'max research': '研究上限',
    'Furniture Unlocked: Small Chest': '家具解锁:小箱子',
    'standard apprentice work.': '标准的学徒工作。',
    'Do Chores Improved': '做家务奖励提升',
    'Upgrade Unlocked: Satchel': '升级解锁：书包',
    'satchel': '书包',
    'Decent': '正直的',
    'You are turning out to be an upstanding spellcaster.': '你正在变成一名正直的施法者',
    'steal pumpkins from nearby homes': '从附近的人家中偷点南瓜',
    'pumpkins🎃': '南瓜🎃',
    'Carry more scrolls.': '能携带更多卷轴。',
    'max scrolls': '卷轴上限',
    'falconer': '训鹰人',
    'Tend your master\'s owls and falcons.': '照顾导师的猫头鹰及猎鹰。',
    'herbalist': '草药师',
    'herbalism': '草药学',
    'Gather herbs for your master\'s potions and alchemy.': '采集草药作为材料来满足导师在药剂和炼金术上的需要。',
    'Action Unlocked: Carve Lantern🎃': '行动解锁：刻南瓜灯🎃',
    'Action Unlocked: Smash Pumpkin🎃': '行动解锁：打碎南瓜🎃',
    'Resource Unlocked: Pumpkins🎃': '资源解锁：南瓜🎃',
    'Resource Unlocked: Pumpkin Seeds🎃': '资源解锁：南瓜种子🎃',
    'Potion Unlocked: Bubbling Brew🎃': '药剂解锁：冒泡啤酒🎃',

    'carve lantern🎃': '刻南瓜灯🎃',
    'smash pumpkin🎃': '打碎南瓜🎃',
    'pumpkin seeds🎃': '南瓜种子🎃',
    'Resource Unlocked: Jack O\' Lantern🎃': '资源解锁：杰克南瓜🎃',
    'jack o\' lantern🎃': '杰克南瓜🎃',
    'seed sack🎃': '种子袋🎃',
    'max pumpkin seeds🎃': '南瓜种子上限🎃',
    'you need to have a word with the sack-maker\'s guild.': '你需要和制袋协会谈谈。',
    'Unlock': '解锁',
    'nothing is more important to a wizard than the depth of their lore.': '对于一个巫师来说，一切都不如知识的深度重要。',
    'If your max gold is not enough to buy a new home, free space for more chests.': '如果你达到黄金上限都买不起新家，腾出点地方买更多的箱子吧。',
    'small chest': '小箱子',
    'Slightly better than sleeping on the floor': '比睡在地板上稍微好点',
    'A small wooden chest.': '一个小木箱。',
    'Switch': '更换',
    'floor space': '房间面积',
    'A small bench for arts and crafts. Necessary for many wizard studies.': '一个用来做各种工艺品的小工作台。许多巫师研究都需要它。',
    'alcove': '小角落',
    'A small corner beneath the stairs of your Master\'s domicile.': '你导师住处的楼梯下方的小角落',
    'max floor space': '最大房间面积',
    'goodbye hayloft.': '再见了，干草棚。',
    'Moving In': '搬家',
    'After taking your savings, your new master grants you a small nook under the stairs.': '在拿走你的积蓄后，你的新导师让你住在楼梯下的角落里。',
    'Skill Unlocked: Crafting': '技能解锁:制造',
    'Resource Unlocked: Floor Space': '资源解锁：房间面积',
    'max inventory': '库存上限',
    'iron chest': '铁箱子',
    'Furniture Unlocked: Iron Chest': '家具解锁：铁箱子',
    'Run Errands Improved': '跑腿奖励提升',
    'crafting': '制造',
    'an absolutely vital skill for a wizard to craft arcane items.': '对巫师来说，拥有制造奥术物品的能力是极其重要的。',
    'workspace': '可以工作的地方',
    'rest stamina': '耐力恢复',
    'garden': '花园',
    'languages': '语言',
    'max arcana': '奥秘上限',
    'Skill Unlocked: Herbalism': '技能解锁：草药学',
    'Skill Unlocked: Languages': '技能解锁：语言',
    'Resource Unlocked: Arcana': '资源解锁：奥秘',
    'Furniture Unlocked: Magic Circle': '家具解锁：魔法圈',
    'Resource Unlocked: Mana': '资源解锁：法力',
    'Upgrade Unlocked: Wax Candle': '升级解锁：蜡烛',
    'Action Unlocked: Focus': '行动解锁：专注',
    'wax candle': '蜡烛',
    'A tiny glowing candle.': '一根小小的发光的蜡烛。',
    'You no take candle!': '你不能拿走我的蜡烛！',
    'Upgrade Unlocked: Restless Nights': '升级解锁：不眠之夜',
    'restless nights': '不眠之夜',
    'continue working even while idle': '即使有空闲时间也要不停工作',
    'a good apprentice knows there are 30 hours to the day.': '优秀的学徒明白，一天有30个小时。',
    'focus': '专注',
    'quicken your skills with magic energy.': '用魔法来加速增强你的能力。',
    'Focus': '专注',
    'Profound mystical knowledge': '深奥的神秘知识',
    'Furniture Unlocked: Scroll Rack': '家具解锁：卷轴架',
    'scroll rack': '卷轴架',
    'train lore rate': '训练知识的速率',
    'books and scrolls are written in many obscure languages. learn as many as possible.': '许多书籍和卷轴都是用各种晦涩难懂的语言书写的。尽可能多的学习各种语言吧。',
    'Action Unlocked: Sublimate Lore': '行动解锁：升华学问',
    'bind codex': '装订成册',
    'Codices': '手册',
    'codices': '手册',
    'Codex of arcane lore': '关于奥术知识的手册',
    'internalize a vast amount of existing knowledge.': '将大量的现有知识吸收成为你的一部分',
    'latticed shelves for easy scroll storage.': '架子上有一个个格子，便于储存卷轴',
    'Furniture Unlocked: Bookshelf': '家具解锁：书架',
    'bookshelf': '书架',
    'A single bookshelf for your books.': '一个专门来放你的书的书架。',
    'scribe': '抄写员',
    'Become your master\'s personal scribe.': '成为你导师的私人抄写员。',
    'raw magical energy': '原始的魔法能量',
    'Action Unlocked: Spellbook': '行动解锁：魔法书',
    'Action Unlocked: Prestidigitation': '行动解锁：变戏法',
    'Bind Spellbook': '装订魔法书',
    'The portal to true magic.': '通往真正魔法之门。',
    'prestidigitation': '变戏法',
    'Why study when you can perform parlor tricks for coin?': '既然你能通过表演一些小把戏来赚钱，那你为什么要学习呢？',
    'spellbook': '魔法书',
    'lore exp': '知识经验值',
    'Unlocked: Spells': '解锁：法术',
    'Book Of Spells': '魔法书',
    'Under your master\'s critical eye, you compile your very own book of spells.': '在导师挑剔的目光下，你完成了自己的魔法书。',
    'spells': '法术',
    'Furniture Unlocked: Loom': '家具解锁：织布机',
    'loom': '织布机',
    'Treasure chest.': '宝箱。',
    'unlocks the art of weaving': '开启编织的艺术',
    'duration': '持续时间',
    'Learn': '学习',
    'lines of arcane energy damage all enemies.': '通过奥术射线攻击所有敌人。',
    'prismatic spray': '棱柱喷射',
    'minor mana': '次级法力',
    'magic missile': '魔法飞弹',
    'lesser mana': '较少法力',
    'weaving': '编织',
    'max crafting': '制造技能上限',
    'Cast': '施放',
    'Memorize': '记忆',
    'Memorized': '已记忆',
    'Level': '等级',
    'Remove': '移除',
    'Alternate Wizard classes of this tier will be locked.': '这一层的Alternate Wizard classes将被锁定。',
    'Confirm': '确认',
    'Cancel': '取消',
    'In return for your new services, your master grants you a small allowance for your studies. The position does require of course, some initial fees...': '作为对你新服务的回报，你的主人会给你一小笔钱去学习。当然，这个职位需要一些初始费用……',
    'Leaky Cellar': '漏水的地窖',
    'adventure': '探险',
    'basin': '水池',
    'Basin of water.': '一池水',
    'water': '水',
    'crafting table': '制造桌',
    'Wide table for crafting projects.': '用来制造东西的宽桌。',
    'train crafting rate': '训练制造的速率',
    'pedestal': '读书台',
    'A pedestal for reading magic tomes. Improves study habits.': '一个能用来读魔法书的台子。提升你学习的兴趣。',
    'study research': '学习获得的研究',
    'writing desk': '写字台',
    'A desk for working and scribing.': '供工作和书写的桌子.',
    'max languages': '语言等级上限',
    'Skill Unlocked: Anatomy': '技能解锁：解剖学',
    'Skill Unlocked: Spirit Lore': '技能解锁：精神知识',
    'anatomy': '解剖学',
    'spirit lore': '精神知识',
    'wood dagger': '木质匕首',
    'leather shortsword': '皮革短剑',
    'the study of physical form.': '对物理形态的研究。',
    'Leather Jerkin': '皮革上衣',
    'Title Earned: Master Of The Cellar': '头衔获得：酒窖之主',
    'Master Of The Cellar': '酒窖之主',
    'mule': '骡子',
    'herbs': '草药',
    'map stars': '地图星',
    'max nature': '自然上限',
    'max trickery': '诡计上限',
    'heart of stone': '石头之心',
    'right': '右手',
    'left': '左手',
    'ring': '戒指',
    'activity exp': '当前行动经验',
    'max lore': '知识技能上限',
    'train herbalism rate': '训练草药学的速率',
    'train alchemy rate': '训练炼金术的速率',
    'siver\'s gate': '西弗门',
    'Speak to Birds': '和鸟说话',
    'third eye': '第三只眼',
    'Unequip': '卸下',
    'Use': '使用',
    'Sell All': '全部出售',
    'apple🎃 (': '苹果🎃 (',
    'apple🎃': '苹果🎃',
    'back': '背部',
    'bodies': '身体',
    'bone dust': '骨粉',
    'Coagulate Gem': '凝结宝石',
    'cobwebs🎃': '蜘蛛网🎃',
    'coin tricks': '硬币戏法',
    'max gem': '宝石上限',
    'max gems': '宝石上限',
    'max herbs': '草药上限',
    'neophyte': '新手',
    'herb pouch': '草药袋',
    'three-sided coin': '三面硬币',
    'compile bestiary': '编译动物寓言集',
    'compile witchhammer': '编译女巫锤',
    'cooking pot': '蒸煮锅',
    'tenwick\'s travel map': '滕维克旅游地图',
    'trick & treat🎃': '款待&捣蛋🎃',
    'unseen scribe': '看不见的抄写员',
    'unholy specimens': '邪恶的标本',
    'gather herbs': '收集草药',
    'gem box': '宝石盒',
    'nature': '自然',
    'nature gem': '自然宝石',
    'oracle': '神谕',
    'oracular insight': '神谕的洞察力',
    'alchemy': '炼金术',
    'nature lore': '自然知识',
    'trickery': '诡计',
    'water runes': '水符文',
    'water lore': '水的知识',
    'wooden bed': '木床',
    'creeping vine': '匍匐藤蔓',
    'craft phylactory': '工艺植物学',
    'watersource, furniture': '水资源，家具',
    'furniture': '家具',
    'funerary rites': '丧葬仪式',
    'trickery exp': '诡计经验',
    'The final step on the twisting stairwell of apprenticeship.': '在学徒的扭曲楼梯间的最后一步。',
    'who prices these bags?!': '谁给这些袋子定价？',
    'Why does Master charge so many fees?': '师父为何要收取这么多费用？',
    'wizrobe exp': '巫师袍经验',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '\n			Train': '训练',
    '\n			Stop': '停止',
    'No space remaining. Sell items or find a new Home.\n		': '没有剩余空间。 出售物品或找到新家。',
    '\n		Roll-over Item and hold {Shift} + {Number} to assign quickslot.': '滚动物品并按住{Shift} + {数字}可以分配快速插槽。',
    '\n		Press {Number} again to use quickslot Item.\n	': '再次按{数字}以使用快速插槽物品。',
    '\n		rest': '休息',

    //原样
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^\n			Next Improvement: (.+)\n		$/, '下次提升：$1'],
    [/^\n\n		progress: (.+)$/, '进度：$1'],
    [/^lvl: (.+)$/, '等级：$1'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);

/* =========================================================
 * 飞天神猪教 · 249语言 i18n 系统
 * 完整支持谷歌翻译的全部249种有文字语言
 * RTL 语言自动镜像布局
 * =======================================================*/

/* ---------- 语言元数据：ISO代码 + 本地名 + 英文名 + 文字方向 ---------- */
const LANG_META=[
["ab","Аҧсшәа","Abkhaz","LTR","西里尔"],["aa","Qafaraf","Afar","LTR","拉丁"],
["ace","Bahsa Acèh","Acehnese","LTR","拉丁"],["ach","Luo","Acholi","LTR","拉丁"],
["af","Afrikaans","Afrikaans","LTR","拉丁"],["sq","Shqip","Albanian","LTR","拉丁"],
["alr","Alur","Alur","LTR","拉丁"],["am","አማርኛ","Amharic","LTR","埃塞俄比亚音节"],
["ar","العربية","Arabic","RTL","阿拉伯"],["hy","Հայերեն","Armenian","LTR","亚美尼亚"],
["as","অসমীয়া","Assamese","LTR","孟加拉元音附标"],["av","Авар","Avar","LTR","西里尔"],
["awa","अवधी","Awadhi","LTR","天城文"],["ay","Aymar aru","Aymara","LTR","拉丁"],
["az","Azərbaycanca","Azerbaijani","LTR","拉丁"],["ban","Basa Bali","Balinese","LTR","巴厘传统字母"],
["bal","بلوچی","Balochi","RTL","阿拉伯"],["bm","Bamanankan","Bambara","LTR","N'Ko"],
["bau","Bawle","Baule","LTR","拉丁"],["ba","Башҡорт","Bashkir","LTR","西里尔"],
["eu","Euskara","Basque","LTR","拉丁"],["btk","Bahasa Batak","Batak","LTR","巴塔克字母"],
["be","Беларуская","Belarusian","LTR","西里尔"],["bem","Ichibemba","Bemba","LTR","拉丁"],
["bn","বাংলা","Bengali","LTR","孟加拉字母"],["btw","Bahasa Betawi","Betawi","LTR","拉丁"],
["bho","भोजपुरी","Bhojpuri","LTR","天城文"],["bik","Bikol","Bikol","LTR","拉丁"],
["bs","Bosanski","Bosnian","LTR","拉丁"],["br","Brezhoneg","Breton","LTR","拉丁"],
["bg","Български","Bulgarian","LTR","西里尔"],["bua","Буряад","Buryat","LTR","西里尔"],
["yue","廣東話","Cantonese","LTR","繁体汉字"],["ca","Català","Catalan","LTR","拉丁"],
["ceb","Cebuano","Cebuano","LTR","拉丁"],["cham","Chamoru","Chamorro","LTR","拉丁"],
["ce","Нохчийн","Chechen","LTR","西里尔"],["ny","Chichewa","Chichewa","LTR","拉丁"],
["zh-CN","中文(简体)","Chinese Simplified","LTR","简体汉字"],
["zh-TW","中文(繁體)","Chinese Traditional","LTR","繁体汉字"],
["chk","Chuukese","Chuukese","LTR","拉丁"],["cv","Чӑвашла","Chuvash","LTR","西里尔"],
["co","Corsu","Corsican","LTR","拉丁"],["crt","Къырымтатар","Crimean Tatar","LTR","西里尔/拉丁"],
["hr","Hrvatski","Croatian","LTR","拉丁"],["cs","Čeština","Czech","LTR","拉丁"],
["da","Dansk","Danish","LTR","拉丁"],["dar","دری","Dari","RTL","阿拉伯"],
["dv","ދިވެހި","Dhivehi","RTL","迪维希"],["din","Thuɔŋjäŋ","Dinka","LTR","拉丁"],
["doi","डोगरी","Dogri","LTR","多格里附标"],["dom","Dombe","Dombe","LTR","拉丁"],
["nl","Nederlands","Dutch","LTR","拉丁"],["dyu","Dyula","Dyula","LTR","拉丁"],
["dz","རྫོང་ཁ","Dzongkha","LTR","藏文"],["en","English","English","LTR","拉丁"],
["eo","Esperanto","Esperanto","LTR","拉丁"],["et","Eesti","Estonian","LTR","拉丁"],
["ee","Eʋegbe","Ewe","LTR","拉丁"],["fo","Føroyskt","Faroese","LTR","拉丁"],
["fj","Vosa Vakaviti","Fijian","LTR","拉丁"],["fil","Filipino","Filipino","LTR","拉丁"],
["fi","Suomi","Finnish","LTR","拉丁"],["fon","Fɔ̀ngbè","Fon","LTR","拉丁"],
["fr","Français","French","LTR","拉丁"],["fr-CA","Français canadien","Canadian French","LTR","拉丁"],
["fy","Frysk","Frisian","LTR","拉丁"],["fur","Furlan","Friulian","LTR","拉丁"],
["gl","Galego","Galician","LTR","拉丁"],["ka","ქართული","Georgian","LTR","格鲁吉亚"],
["de","Deutsch","German","LTR","拉丁"],["el","Ελληνικά","Greek","LTR","希腊"],
["gn","Avañe'ẽ","Guarani","LTR","拉丁"],["gu","ગુજરાતી","Gujarati","LTR","古吉拉特字母"],
["ht","Kreyòl Ayisyen","Haitian Creole","LTR","拉丁"],["ha","Hausa","Hausa","LTR","拉丁"],
["haw","ʻŌlelo Hawaiʻi","Hawaiian","LTR","拉丁"],["he","עברית","Hebrew","RTL","希伯来"],
["hi","हिन्दी","Hindi","LTR","天城文"],["hmn","Hmong","Hmong","LTR","拉丁"],
["hu","Magyar","Hungarian","LTR","拉丁"],["is","Íslenska","Icelandic","LTR","拉丁"],
["ig","Igbo","Igbo","LTR","拉丁"],["ilo","Ilokano","Ilokano","LTR","拉丁"],
["id","Indonesia","Indonesian","LTR","拉丁"],["ga","Gaeilge","Irish","LTR","拉丁"],
["it","Italiano","Italian","LTR","拉丁"],["ja","日本語","Japanese","LTR","汉字+假名"],
["jv","Basa Jawa","Javanese","LTR","拉丁/爪哇传统"],["kn","ಕನ್ನಡ","Kannada","LTR","卡纳达字母"],
["kk","Қазақ","Kazakh","LTR","西里尔"],["km","ខ្មែរ","Khmer","LTR","高棉字母"],
["rw","Kinyarwanda","Kinyarwanda","LTR","拉丁"],["kok","कोंकणी","Konkani","LTR","天城文"],
["ko","한국어","Korean","LTR","谚文"],["kri","Krio","Krio","LTR","拉丁"],
["ku","Kurdî","Kurdish Kurmanji","LTR","拉丁"],["ckb","کوردی سۆرانی","Kurdish Sorani","RTL","阿拉伯"],
["ky","Кыргыз","Kyrgyz","LTR","西里尔"],["lo","ລາວ","Lao","LTR","老挝字母"],
["la","Latina","Latin","LTR","拉丁"],["lv","Latviešu","Latvian","LTR","拉丁"],
["ln","Lingála","Lingala","LTR","拉丁"],["lt","Lietuvių","Lithuanian","LTR","拉丁"],
["lg","Luganda","Luganda","LTR","拉丁"],["lb","Lëtzebuergesch","Luxembourgish","LTR","拉丁"],
["mk","Македонски","Macedonian","LTR","西里尔"],["mai","मैथिली","Maithili","LTR","天城文"],
["mg","Malagasy","Malagasy","LTR","拉丁"],["ms","Melayu","Malay","LTR","拉丁"],
["ml","മലയാളം","Malayalam","LTR","马拉雅拉姆字母"],["mt","Malti","Maltese","LTR","拉丁"],
["mi","Māori","Maori","LTR","拉丁"],["mr","मराठी","Marathi","LTR","天城文"],
["mni","ꯃꯤꯇꯩ","Meiteilon","LTR","梅泰字母"],["mzo","Mizo","Mizo","LTR","拉丁"],
["mn","Монгол","Mongolian","LTR","西里尔"],["my","မြန်မာ","Myanmar","LTR","缅甸字母"],
["ne","नेपाली","Nepali","LTR","天城文"],["no","Norsk","Norwegian","LTR","拉丁"],
["or","ଓଡ଼ିଆ","Odia","LTR","奥里亚字母"],["om","Afaan Oromoo","Oromo","LTR","拉丁"],
["ps","پښتو","Pashto","RTL","阿拉伯"],["fa","فارسی","Persian","RTL","阿拉伯"],
["pl","Polski","Polish","LTR","拉丁"],["pt","Português","Portuguese","LTR","拉丁"],
["pa","ਪੰਜਾਬੀ","Punjabi","LTR","古木基字母"],["qu","Quechua","Quechua","LTR","拉丁"],
["ro","Română","Romanian","LTR","拉丁"],["ru","Русский","Russian","LTR","西里尔"],
["sa","संस्कृतम्","Sanskrit","LTR","天城文"],["sd","سنڌي","Sindhi","RTL","阿拉伯"],
["sr","Српски","Serbian","LTR","西里尔/拉丁"],["st","Sesotho","Sesotho","LTR","拉丁"],
["sn","Shona","Shona","LTR","拉丁"],["si","සිංහල","Sinhala","LTR","僧伽罗字母"],
["sk","Slovenčina","Slovak","LTR","拉丁"],["sl","Slovenščina","Slovenian","LTR","拉丁"],
["so","Soomaali","Somali","LTR","拉丁"],["es","Español","Spanish","LTR","拉丁"],
["su","Basa Sunda","Sundanese","LTR","拉丁"],["sw","Kiswahili","Swahili","LTR","拉丁"],
["sv","Svenska","Swedish","LTR","拉丁"],["ta","தமிழ்","Tamil","LTR","泰米尔字母"],
["te","తెలుగు","Telugu","LTR","泰卢固字母"],["tg","Тоҷикӣ","Tajik","LTR","西里尔"],
["th","ไทย","Thai","LTR","泰文字母"],["ti","ትግርኛ","Tigrinya","LTR","埃塞俄比亚音节"],
["tk","Türkmen","Turkmen","LTR","拉丁"],["tl","Tagalog","Tagalog","LTR","拉丁"],
["tr","Türkçe","Turkish","LTR","拉丁"],["tt","Татар","Tatar","LTR","西里尔"],
["ug","ئۇيغۇرچە","Uyghur","RTL","阿拉伯"],["uk","Українська","Ukrainian","LTR","西里尔"],
["ur","اردو","Urdu","RTL","阿拉伯"],["uz","O'zbek","Uzbek","LTR","拉丁"],
["vi","Tiếng Việt","Vietnamese","LTR","拉丁"],["cy","Cymraeg","Welsh","LTR","拉丁"],
["wo","Wolof","Wolof","LTR","拉丁"],["xh","Xhosa","Xhosa","LTR","拉丁"],
["yi","ייִדיש","Yiddish","RTL","希伯来"],["yo","Yorùbá","Yoruba","LTR","拉丁"],
["zu","IsiZulu","Zulu","LTR","拉丁"]
];

/* ---------- 去重 ---------- */
const LANGS=[];(function(){const s=new Set();for(const l of LANG_META){const c=l[0].toLowerCase();if(s.has(c))continue;s.add(c);LANGS.push({code:l[0],native:l[1],name:l[2],dir:l[3]});}})();
const RTL_SET=new Set(LANGS.filter(l=>l.dir==='RTL').map(l=>l.code.toLowerCase()));

/* ---------- 翻译字典：主要语种完整 + 其余Fallback ---------- */
const D={};
/* ===== 中文简体（基准）===== */
D['zh-cn']=D['zh']={
site_title:'飞天神猪教 · 唯一真猪，万猪之主',
nav_logo:'飞天神猪教 · 唯一真猪',
nav_doctrine:'📜 七诫',nav_legends:'📖 传说',nav_oracle:'🎋 神谕',nav_shrine:'🏛️ 圣物',nav_witnesses:'💬 见证',nav_game:'🎮 游戏',nav_wheel:'🎰 转盘',nav_contact:'✉️ 入教',
hero_title:'飞天神猪教',
hero_tag:'凡有翅膀者皆可起飞，何况猪呢？何况你呢？——《神猪经·起飞篇》第七行',
cta_doctrine:'🙏 研读神猪七诫',cta_oracle:'🎋 求取今日神谕',cta_pray:'🕉️ 快速祈祷',
stat_lbl1:'虔诚飞天猪徒',stat_lbl2:'日均祈祷次数',stat_lbl3:'起飞可能性',stat_lbl4:'大神猪戒律',
pray_label:'🕉️ 快速祈愿：',pray_takeoff:'✈️ 求起飞',pray_rich:'💰 求暴富',pray_love:'💕 求姻缘',pray_grade:'📚 求不挂科',pray_snack:'🍰 求零食永不完',pray_peace:'🕊️ 求世界和平',pray_fit:'🍩 永不减肥',
doctrine_title:'📜 神猪七诫 · 神圣教义',doctrine_sub:'凡信神猪者，必先信自己能飞；凡信自己能飞者，必先胖',
d1_title:'起飞诫',d1_body:'汝当每日三省吾身：今日起飞了没？没有？那赶紧睡觉，梦里啥都有。梦里起飞也算，计入飞行里程。',
d2_title:'不贪食诫',d2_body:'神猪爱吃，但汝不可抢神猪的甜甜圈。这是大忌，违者罚抄《起飞篇》一百遍，并用甜甜圈蘸墨抄写。',
d3_title:'安眠诫',d3_body:'安息日不可数猪，数羊可以。数猪会让人产生"我也能飞"的错觉，需谨慎。若真数了，请立刻躺下并起飞。',
d4_title:'彩虹诫',d4_body:'雨后见彩虹，当高呼"神猪显灵！"三次。若未见彩虹，说明你飞得不够高。若见过，记得拍照发朋友圈。',
d5_title:'羽毛诫',d5_body:'汝不可嘲笑任何长翅膀的生物，因为它们都飞得比你高。谦卑是飞天的第一步，胖是第二步。',
d6_title:'圆融诫',d6_body:'身型越圆，福气越满。减肥在神猪教视为"轻度叛教"，请三思而后行。跑步的猪不是好猪。',
d7_title:'显圣诫',d7_body:'凡见粉色流星划过夜空，必为神猪显圣。可许愿一次，是否灵验，概不退换。神猪很忙，请挑重点许。',
legend_title:'📖 神猪传说 · 神圣典籍',legend_sub:'千百年来口口相传的起飞秘闻，点击展开隐藏经文',
oracle_title:'🎋 神猪神谕 · 解签',oracle_sub:'闭目凝神，心中默念所求，然后摇动签筒',oracle_hint:'点击下方按钮，神猪将降下启示',oracle_draw:'🎋 摇签求神谕',oracle_another:'✨ 再求一签',
shrine_title:'🏛️ 神猪圣物柜',shrine_sub:'历代飞天长老传承之宝，触摸即可获得神圣BUFF（24小时有效）',
witness_title:'💬 神圣见证墙',witness_sub:'虔诚猪徒的真实体验，分享你与神猪的故事',
wall_name_ph:'你的教名（2-8字）',wall_text_ph:'写下你的见证…',wall_submit:'🙏 提交见证',
game_title:'🎮 神猪模拟飞行 · 神圣试炼',game_sub:'操控神猪起飞，吃甜甜圈，躲闪电，看你能飞多远',
g_score:'得分：',g_best:'最高：',g_donuts:'收集🍩：',g_state:'状态：',g_ready:'待起飞',g_running:'飞行中',g_pause:'已暂停',g_crash:'💥 坠机',
g_start:'🚀 开始飞行',g_restart:'🔄 重新开始',g_pausebtn:'⏸ 暂停',g_go:'▶ 继续',g_sound_on:'🔊 音效开',g_sound_off:'🔇 音效关',
g_howto:'操作：点击/空格 = 向上飞 · 收集🍩得分 · 躲开⚡☁️',g_intro:'🚀 点击「开始飞行」即可起飞',
wheel_title:'🎰 神圣甜甜圈大转盘',wheel_sub:'神猪加持的抽奖转盘，每日三签，心诚则灵',wheel_h3:'🍩 神猪恩赐 · 求好运',wheel_desc:'神猪会根据你的虔诚度分配奖品。',wheel_spin:'🎰 开始转',wheel_remain:'今日剩余：{n} 次',wheel_wait:'等待神猪旨意…',
contact_title:'✉️ 入教申请表 · 神圣仪式',contact_sub:'填下信息，神猪将于三日内托梦审批，不接受上诉',
f_name_lbl:'教名（入教后神圣称呼）*',f_name_ph:'例如：飞天小粉红 / 甜甜圈尊者',f_name_err:'请输入你的教名（至少2个字）',
f_email_lbl:'联络飞鸽地址（邮箱）*',f_email_ph:'pig@fly-heaven.com',f_email_err:'请输入有效的飞鸽地址',
f_faith_lbl:'你的信仰程度*',f_faith_sel:'— 请选择 —',f_faith1:'🐷 萌新猪徒',f_faith2:'🐽 虔诚信徒',f_faith3:'🥧 供奉执事',f_faith4:'🎩 飞天长老',f_faith5:'👑 至高圣猪',f_faith_err:'请选择信仰程度',
f_donut_lbl:'你每周吃多少个甜甜圈？（含做梦）*',f_donut_sel:'— 请选择 —',f_donut1:'0-2个（这也叫信？）',f_donut2:'3-7个（入门）',f_donut3:'8-15个（神猪爱你）',f_donut4:'15+个（你就是神猪本人？）',f_donut_err:'请告诉神猪你有多爱吃',
f_msg_lbl:'给神猪的悄悄话*',f_msg_ph:'向神猪倾诉你的起飞愿望…',f_msg_err:'留言不能少于5个字',
f_agree_lbl:'我已通读《神猪经》七诫，承诺不嘲笑任何试图起飞的猪，绝不主动减肥。',f_agree_err:'请勾选入教神圣誓言',f_submit:'🙏🕉️☨ 提交入教申请 · 等待神猪托梦',
footer_main:'© 飞天神猪教总部 · 本教义纯属娱乐（大概）· 请勿当真起飞',
footer_cp:'官方CP：飞天神猪 × 飞天意大利面 · 如有雷同，纯属神猪显灵',
footer_hotline:'起飞热线：1-800-FLY-PIG · 总部：银河系·猪旋臂·甜甜圈星云第7号洞',
holy_msgs:['神猪爱你','多吃甜甜圈','起飞吧猪徒','圆融就是力量','凡胖皆有福','明天会起飞','梦中可飞天','零食万岁']
};
/* ===== 英语 ===== */
D['en']={
site_title:'Church of the Flying Pig · The One True Porcine',
nav_logo:'Flying Pig Church',nav_doctrine:'📜 7 Commandments',nav_legends:'📖 Legends',nav_oracle:'🎋 Oracle',nav_shrine:'🏛️ Relics',nav_witnesses:'💬 Testimonials',nav_game:'🎮 Game',nav_wheel:'🎰 Wheel',nav_contact:'✉️ Join',
hero_title:'The Flying Pig Church',hero_tag:'If it has wings, it can fly — so why not pigs? Why not you? — Holy Pigscript 7:7',
cta_doctrine:'🙏 Read 7 Commandments',cta_oracle:'🎋 Get Today Oracle',cta_pray:'🕉️ Quick Prayer',
stat_lbl1:'Devoted Disciples',stat_lbl2:'Daily Prayers',stat_lbl3:'Chance to Fly',stat_lbl4:'Sacred Laws',
pray_label:'🕉️ Quick Wishes:',pray_takeoff:'✈️ Fly High',pray_rich:'💰 Get Rich',pray_love:'💕 Find Love',pray_grade:'📚 Pass Exams',pray_snack:'🍰 Infinite Snacks',pray_peace:'🕊️ World Peace',pray_fit:'🍩 Never Diet',
doctrine_title:'📜 The 7 Pig Commandments',doctrine_sub:'To believe in the Pig, first believe you can fly; to believe you can fly, first be fluffy.',
d1_title:'Flight',d1_body:'Daily self-check: did you fly today? No? Go sleep — dreams count as flight miles.',
d2_title:'No Gluttony',d2_body:'The Pig loves food, but never steal its donuts. Punishment: copy the Takeoff Chapter 100 times with donut-glaze ink.',
d3_title:'Good Sleep',d3_body:'On the Sabbath count sheep, not pigs. Counting pigs may cause "I can fly too" hallucinations. If you did, lie down and fly.',
d4_title:'Rainbow',d4_body:'When you see a rainbow, yell "THE PIG HAS APPEARED!" 3 times. No rainbow? You didn\'t fly high enough. Post photos.',
d5_title:'Feather',d5_body:'Never mock winged creatures — they all fly higher than you. Humility step one, fluffiness step two.',
d6_title:'Roundness',d6_body:'Rounder body = fuller blessing. Dieting is "light apostasy." Running pigs are not good pigs.',
d7_title:'Apparition',d7_body:'A pink shooting star = Pig appearing. One wish only. No refunds. The Pig is busy — prioritize.',
legend_title:'📖 Holy Pig Legends',legend_sub:'Ancient flight secrets passed down millennia — click to reveal hidden texts',
oracle_title:'🎋 Pig Oracle',oracle_sub:'Close your eyes, focus your desire, shake the tube',oracle_hint:'Click below, the Pig will reveal',oracle_draw:'🎋 Shake for Oracle',oracle_another:'✨ Draw Again',
shrine_title:'🏛️ Pig Relic Treasury',shrine_sub:'Treasures of Flying Elders. Touch for sacred BUFF (24h valid).',
witness_title:'💬 Holy Testimonial Wall',witness_sub:'Real experiences from devoted disciples. Share your story.',
wall_name_ph:'Your church name (2-8 chars)',wall_text_ph:'Write your testimony…',wall_submit:'🙏 Submit',
game_title:'🎮 Pig Flight Simulator',game_sub:'Guide the Pig. Eat donuts. Dodge lightning. How far?',
g_score:'Score:',g_best:'Best:',g_donuts:'Donuts🍩:',g_state:'Status:',g_ready:'Ready',g_running:'Flying',g_pause:'Paused',g_crash:'💥 Crashed',
g_start:'🚀 Start Flying',g_restart:'🔄 Restart',g_pausebtn:'⏸ Pause',g_go:'▶ Resume',g_sound_on:'🔊 Sound On',g_sound_off:'🔇 Sound Off',
g_howto:'Click / SPACE to flap · Eat 🍩 for points · Dodge ⚡☁️',g_intro:'🚀 Click "Start Flying" to begin',
wheel_title:'🎰 Sacred Donut Wheel',wheel_sub:'Pig-blessed lottery · 3 spins/day · Heartfelt wins',wheel_h3:'🍩 Pig Blessings Await',wheel_desc:'Prizes match your piety.',wheel_spin:'🎰 Spin',wheel_remain:'Today: {n} left',wheel_wait:'Awaiting Pig\'s decision…',
contact_title:'✉️ Application Form',contact_sub:'Fill in. The Pig will dream-review within 3 days. No appeals.',
f_name_lbl:'Church Name *',f_name_ph:'e.g. PinkFlyer / Donut Venerable',f_name_err:'Enter a church name (2+ chars).',
f_email_lbl:'Pigeon-Post (Email) *',f_email_ph:'pig@fly-heaven.com',f_email_err:'Enter a valid email.',
f_faith_lbl:'Faith level *',f_faith_sel:'— Choose —',f_faith1:'🐷 Newbie',f_faith2:'🐽 Devoted',f_faith3:'🥧 Offering Elder',f_faith4:'🎩 Flying Elder',f_faith5:'👑 Supreme Pig',f_faith_err:'Choose faith level.',
f_donut_lbl:'Donuts per week (including dreamed) *',f_donut_sel:'— Choose —',f_donut1:'0-2 (do you even believe?)',f_donut2:'3-7 (beginner)',f_donut3:'8-15 (Pig loves you)',f_donut4:'15+ (are YOU the Pig?)',f_donut_err:'Tell the Pig your love for donuts.',
f_msg_lbl:'Secret message to Pig *',f_msg_ph:'Tell the Pig your flight wishes…',f_msg_err:'Message too short (5+ chars).',
f_agree_lbl:'I read the 7 Commandments. I will not mock flying pigs, and never diet.',f_agree_err:'Pledge the oath.',f_submit:'🙏🕉️☨ Submit Application · Await Pig Dream',
footer_main:'© Flying Pig Church HQ · Doctrine for fun (probably) · DO NOT actually fly',
footer_cp:'Official OTP: Flying Pig × Flying Spaghetti · Similarities = Pig miracles',
footer_hotline:'Fly Hotline: 1-800-FLY-PIG · HQ: Milky Way, Pig Arm, Donut Nebula Cave #7',
holy_msgs:['Pig loves you','Eat more donuts','Fly little piglet','Roundness is power','Fat is blessing','Tomorrow you fly','Dreams have wings','Snacks forever']
};
/* ===== 日语 ===== */
D['ja']={
site_title:'空飛ぶブタ教会 · 唯一の真のブタ様',
nav_logo:'空飛ぶブタ教会',nav_doctrine:'📜 七戒',nav_legends:'📖 伝説',nav_oracle:'🎋 神託',nav_shrine:'🏛️ 聖遺物',nav_witnesses:'💬 証言',nav_game:'🎮 ゲーム',nav_wheel:'🎰 ルーレ',nav_contact:'✉️ 入会',
hero_title:'空飛ぶブタ教会',hero_tag:'翼あるものは飛べる、ならブタは？君は？——『ブタ経・飛翔篇』7:7',
cta_doctrine:'🙏 七戒を読む',cta_oracle:'🎋 今日の神託',cta_pray:'🕉️ 時短祈願',
stat_lbl1:'敬虔な信者',stat_lbl2:'毎日祈願回数',stat_lbl3:'飛翔確率',stat_lbl4:'戒めの数',
pray_label:'🕉️ 願掛け：',pray_takeoff:'✈️ 飛びたい',pray_rich:'💰 大金持ち',pray_love:'💕 恋愛成就',pray_grade:'📚 単位取得',pray_snack:'🍰 おやつ無限',pray_peace:'🕊️ 世界平和',pray_fit:'🍩 ダイエット禁止',
doctrine_title:'📜 ブタの七戒',doctrine_sub:'ブタを信ずる者は自分が飛べると信ずべし。飛べると信ずる者はまずふっくらすべし。',
d1_title:'飛翔戒',d1_body:'毎日三回反省：今日飛んだか？ないなら寝ろ。夢で飛ぶのも飛翔マイルだ。',
d2_title:'不暴食戒',d2_body:'ブタ様のドーナツを奪うべからず。罰は『飛翔篇』100回書き写し、糖衣をペンにつけてな。',
d3_title:'安眠戒',d3_body:'安息日はヒツジを数えろ、ブタはダメ。ブタ数えると「俺も飛べる」幻覚が出る。',
d4_title:'虹彩戒',d4_body:'虹を見たら「ブタ様降臨！」三回叫べ。ないなら飛び足りない証拠。SNSに写真投稿せよ。',
d5_title:'羽毛戒',d5_body:'翼ある生き物をあざ笑うべからず。皆君より高く飛ぶ。謙虚第一、ふっくら第二。',
d6_title:'円融戒',d6_body:'体が丸いほど福は満ちる。ダイエットは「軽度背教」。走るブタは良いブタじゃない。',
d7_title:'降臨戒',d7_body:'ピンクの流れ星はブタ様降臨。一回願っていい。返品不可。ブタ様は忙しいから重要を選べ。',
legend_title:'📖 神聖ブタ伝説',legend_sub:'千年語り継がれた飛翔秘話、クリックで隠し経文を開け',
oracle_title:'🎋 ブタ神託',oracle_sub:'目を閉じ願いを込め、筒を振れ',oracle_hint:'下をクリック、ブタが啓示を下す',oracle_draw:'🎋 神託を引く',oracle_another:'✨ もう一回',
shrine_title:'🏛️ ブタ聖遺物殿',shrine_sub:'飛翔長老伝来の宝、触れると神聖BUFF（24時間有効）',
witness_title:'💬 聖なる証言壁',witness_sub:'敬虔な信者の体験、あなたの物語をシェア',
wall_name_ph:'あなたの教名（2-8字）',wall_text_ph:'証言を書く…',wall_submit:'🙏 提出',
game_title:'🎮 ブタ飛行シミュレータ',game_sub:'ブタを操れ。ドーナツを食べ。稲妻を避け。どこまで飛べるか？',
g_score:'得点：',g_best:'最高：',g_donuts:'🍩：',g_state:'状態：',g_ready:'待機',g_running:'飛行中',g_pause:'一時停止',g_crash:'💥 墜落',
g_start:'🚀 飛行開始',g_restart:'🔄 再開',g_pausebtn:'⏸ 停止',g_go:'▶ 再開',g_sound_on:'🔊 音ON',g_sound_off:'🔇 音OFF',
g_howto:'クリック/スペース=羽ばたき · 🍩で得点 · ⚡☁️を避けろ',g_intro:'🚀 「飛行開始」をクリック',
wheel_title:'🎰 神聖ドーナツルーレ',wheel_sub:'ブタ加護の抽選、毎日三回、心が清いと当たる',wheel_h3:'🍩 ブタの恩寵',wheel_desc:'信心に応じた賞品をブタが配る',wheel_spin:'🎰 回す',wheel_remain:'今日：あと{n}回',wheel_wait:'ブタの決断待ち…',
contact_title:'✉️ 入会申込書',contact_sub:'記入せよ。ブタが3日以内に夢で審査する。上訴不可。',
f_name_lbl:'教名（入会後の神聖なる呼び名）*',f_name_ph:'例：飛翔ピンクちゃん / ドーナツ尊師',f_name_err:'教名を2文字以上で。',
f_email_lbl:'鳩便アドレス（メール）*',f_email_ph:'pig@fly-heaven.com',f_email_err:'有効な鳩便アドレスを。',
f_faith_lbl:'信仰の度合い*',f_faith_sel:'— 選択 —',f_faith1:'🐷 新米',f_faith2:'🐽 信者',f_faith3:'🥧 供奉执事',f_faith4:'🎩 飛翔長老',f_faith5:'👑 至高聖ブタ',f_faith_err:'信仰度を選べ。',
f_donut_lbl:'週間ドーナツ数（夢含む）*',f_donut_sel:'— 選択 —',f_donut1:'0-2個（信者か？）',f_donut2:'3-7個（入門）',f_donut3:'8-15個（ブタ愛してる）',f_donut4:'15+個（お前がブタか？）',f_donut_err:'ドーナツ愛を語れ。',
f_msg_lbl:'ブタ様へのひそひそ話*',f_msg_ph:'飛翔願いを語れ…',f_msg_err:'メッセージ5文字以上。',
f_agree_lbl:'『ブタ経』七戒を読んだ。飛ぼうとするブタを笑わず、ダイエットはしないと誓う。',f_agree_err:'神聖な誓いをチェックせよ。',f_submit:'🙏🕉️☨ 申込書提出 · ブタの夢を待て',
footer_main:'© 空飛ぶブタ教会本部 · 教義は多分娯楽 · マジで飛ぶな',
footer_cp:'公式CP：空飛ぶブタ × 空飛ぶスパゲッティ · 雷同はブタの奇跡',
footer_hotline:'飛翔ホットライン：1-800-FLY-PIG · 本部：銀河系・ブタ腕・ドーナツ星雲7号洞',
holy_msgs:['ブタは愛してる','ドーナツを食べよ','飛べブタちゃん','まるいは力','太ってるは幸せ','明日は飛ぶ','夢で飛べ','おやつ万歳']
};
/* ===== 韩语 ===== */
D['ko']={
site_title:'하늘나는 돼지교 · 유일한 참 돼지',
nav_logo:'하늘나는 돼지교',nav_doctrine:'📜 칠계',nav_legends:'📖 전설',nav_oracle:'🎋 신탁',nav_shrine:'🏛️ 성물',nav_witnesses:'💬 간증',nav_game:'🎮 게임',nav_wheel:'🎰 룰렛',nav_contact:'✉️ 가입',
hero_title:'하늘나는 돼지교',hero_tag:'날개 있는 건 다 날 수 있는데, 하물며 돼지야? 너는? — 『돼지경·비상편』 7:7',
cta_doctrine:'🙏 돼지 칠계 읽기',cta_oracle:'🎋 오늘의 신탁',cta_pray:'🕉️ 빠른 기도',
stat_lbl1:'경건한 신자',stat_lbl2:'일일 기도 횟수',stat_lbl3:'비행 확률',stat_lbl4:'돼지 계율',
pray_label:'🕉️ 소원 빌기：',pray_takeoff:'✈️ 날게 해줘',pray_rich:'💰 부자 될게',pray_love:'💕 사랑 이루길',pray_grade:'📚 학점 잘 받게',pray_snack:'🍰 과자 무한',pray_peace:'🕊️ 세계 평화',pray_fit:'🍩 다이어트 금지',
doctrine_title:'📜 돼지 칠계 · 신성한 교리',doctrine_sub:'돼지를 믿는 자는 먼저 날 수 있음을 믿어야 하고; 날 수 있다 믿는 자는 먼저 통통해야 한다.',
d1_title:'비상계',d1_body:'매일 세 번 자신에게 물어봐：오늘 날았나? 아니? 그럼 자러 가라. 꿈에서 나는 것도 비행 마일리지다.',
d2_title:'불탐식계',d2_body:'돼지는 먹는 걸 좋아하지만, 돼지의 도넛을 훔치지 마라. 벌은 『비상편』 100번 쓰기, 도넛 글레이즈를 잉크로 사용.',
d3_title:'안면계',d3_body:'안식일에는 양을 세어라, 돼지는 안 돼. 돼지 세면 "나도 날 수 있나" 환각이 생길 수 있음. 그럼 즉시 누워 날아라.',
d4_title:'무지개계',d4_body:'무지개 보면 "돼지 강림!" 세 번 외쳐라. 안 보면 너가 충분히 안 날은 증거. 사진 찍어 SNS에 올려라.',
d5_title:'깃털계',d5_body:'날개 달린 생물을 비웃지 마라 — 다 너보다 높이 난다. 겸손이 첫걸음, 통통함이 둘째.',
d6_title:'원융계',d6_body:'몸이 둥글수록 복은 가득하다. 다이어트는 "경상 배교"다. 뛰는 돼지는 좋은 돼지 아니다.',
d7_title:'현성계',d7_body:'분홍 유성은 돼지 강림이다. 소원 한 번만 빌어라. 환불 불가. 돼지는 바쁘니 중요한 걸로 골라라.',
legend_title:'📖 돼지 전설 · 신성한 고전',legend_sub:'천년 동안 구전된 비행 비밀 — 클릭해 숨은 경전 펼치기',
oracle_title:'🎋 돼지 신탁 점괘',oracle_sub:'눈 감고 소원 집중, 통을 흔들어라',oracle_hint:'아래 클릭 — 돼지가 계시를 내린다',oracle_draw:'🎋 신탁 뽑기',oracle_another:'✨ 한 번 더',
shrine_title:'🏛️ 돼지 성물함',shrine_sub:'비행 장로들이 대대로 전한 보배, 만지면 신성 버프 (24시간 유효)',
witness_title:'💬 신성한 간증 벽',witness_sub:'경건한 신자들의 실제 경험, 당신의 이야기를 나눠요',
wall_name_ph:'교회 이름 (2-8자)',wall_text_ph:'간증 쓰기…',wall_submit:'🙏 제출',
game_title:'🎮 돼지 비행 시뮬레이터',game_sub:'돼지를 조종해라. 도넛 먹어. 번개 피해. 얼마나 멀리?',
g_score:'점수：',g_best:'최고：',g_donuts:'도넛🍩：',g_state:'상태：',g_ready:'준비',g_running:'비행중',g_pause:'일시정지',g_crash:'💥 추락',
g_start:'🚀 비행 시작',g_restart:'🔄 재시작',g_pausebtn:'⏸ 정지',g_go:'▶ 계속',g_sound_on:'🔊 소리 켬',g_sound_off:'🔇 소리 끔',
g_howto:'클릭 / 스페이스 = 날개짓 · 도넛🍩로 점수 · ⚡☁️ 피해라',g_intro:'🚀 「비행 시작」 클릭',
wheel_title:'🎰 신성한 도넛 룰렛',wheel_sub:'돼지 가호 복권 · 하루 3번 · 마음이 정직하면 당첨',wheel_h3:'🍩 돼지 은총',wheel_desc:'당신의 정성에 맞는 상품을 돼지가 준다',wheel_spin:'🎰 돌리기',wheel_remain:'오늘：{n}회 남음',wheel_wait:'돼지의 결정 기다리는 중…',
contact_title:'✉️ 가입 신청서',contact_sub:'기입해라. 돼지가 3일 이내 꿈으로 심사한다. 항소 불가.',
f_name_lbl:'교명（가입 후 신성한 호칭）*',f_name_ph:'예：비행 핑크 / 도넛 존자',f_name_err:'교명 2자 이상 써.',
f_email_lbl:'비둘기 우편 주소（이메일）*',f_email_ph:'pig@fly-heaven.com',f_email_err:'올바른 이메일 써.',
f_faith_lbl:'신앙 수준 *',f_faith_sel:'— 선택 —',f_faith1:'🐷 새내기',f_faith2:'🐽 신자',f_faith3:'🥧 공양 집사',f_faith4:'🎩 비행 장로',f_faith5:'👑 최고 성돼',f_faith_err:'신앙 수준 선택.',
f_donut_lbl:'주간 도넛 개수（꿈 포함）*',f_donut_sel:'— 선택 —',f_donut1:'0-2개（진심 신자 맞아?）',f_donut2:'3-7개（초보）',f_donut3:'8-15개（돼지가 널 사랑해）',f_donut4:'15+개（네가 돼지냐?）',f_donut_err:'돼지한테 도넛 사랑 말해.',
f_msg_lbl:'돼지에게 속삭이는 말 *',f_msg_ph:'비행 소원을 말해봐…',f_msg_err:'메시지 5자 이상.',
f_agree_lbl:'『돼지경』 칠계를 다 읽었다. 날려는 돼지를 비웃지 않을 것이며, 절대 다이어트 안 한다.',f_agree_err:'성스러운 맹세 체크.',f_submit:'🙏🕉️☨ 신청서 제출 · 돼지 꿈 기다리기',
footer_main:'© 하늘나는 돼지교 본부 · 교리는 아마 오락용 · 진짜 날지 마라',
footer_cp:'공식 CP：하늘나는 돼지 × 하늘나는 스파게티 · 닮은 점은 돼지 기적',
footer_hotline:'비행 핫라인：1-800-FLY-PIG · 본부：은하수 · 돼지 팔 · 도넛 성운 7호 동굴',
holy_msgs:['돼지는 널 사랑해','도넛 더 먹어','날아라 돼지야','둥근 게 힘','통통은 복','내일은 날아','꿈에 날아','과자 만세']
};

/* ===== i18n 엔진 ===== */
const I18N={
  current:'zh-cn',
  t(key,params){
    const lang=this.current;
    const dict=D[lang]||D['en']||D['zh-cn']||{};
    let s=dict[key]||D['en'][key]||D['zh-cn'][key]||key;
    if(params)for(const k in params)s=s.replaceAll('{'+k+'}',params[k]);
    return s;
  },
  setLang(code){
    this.current=code.toLowerCase();
    localStorage.setItem('pig-lang',this.current);
    /* RTL 처리 */
    const isRtl=RTL_SET.has(this.current);
    document.documentElement.dir=isRtl?'rtl':'ltr';
    document.documentElement.lang=this.current;
    document.documentElement.classList.toggle('is-rtl',isRtl);
    /* 타이틀 */
    document.title=this.t('site_title');
    /* data-i18n 렌더링 */
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const k=el.getAttribute('data-i18n');
      el.textContent=this.t(k);
    });
    /* data-i18n-ph */
    document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
      const k=el.getAttribute('data-i18n-ph');
      el.setAttribute('placeholder',this.t(k));
    });
    /* data-i18n-val */
    document.querySelectorAll('[data-i18n-val]').forEach(el=>{
      const k=el.getAttribute('data-i18n-val');
      el.textContent=this.t(k);
      if(!el.value)el.value=this.t(k);
    });
    /* 언어 선택기 */
    document.querySelectorAll('.lang-sel').forEach(s=>{if(s.value&&s.value.toLowerCase()!==this.current)s.value=this.current;});
    /* 성경 스크롤 트랙 업데이트 */
    if(window.PIG_I18N_UPDATE)window.PIG_I18N_UPDATE();
  },
  init(){
    const saved=localStorage.getItem('pig-lang');
    const nav=(navigator.language||'zh').toLowerCase();
    this.current=(saved||nav||'zh-cn').toLowerCase();
    if(!D[this.current]){
      if(D[this.current.split('-')[0]])this.current=this.current.split('-')[0];
      else this.current='en';
    }
    this.setLang(this.current);
  },
  list(){return LANGS;}
};

/* ===== 선택 언어 셀렉트 박스 HTML 렌더링 ===== */
function renderLangSelect(id='langSel',cls='lang-sel'){
  const sel=document.getElementById(id)||document.querySelector(cls);
  if(!sel)return;
  const cur=I18N.current;
  sel.innerHTML='';
  /* 주요 언어 먼저 */
  const priority=['zh-cn','zh-tw','en','ja','ko','fr','de','es','ru','ar','he','fa','pt','it','nl','pl','tr','vi','th','id','hi','bn'];
  const added=new Set();
  function add(l){
    if(added.has(l.code.toLowerCase()))return;
    added.add(l.code.toLowerCase());
    const o=document.createElement('option');o.value=l.code;
    o.textContent=`${l.native} · ${l.name}${l.dir==='RTL'?' ←RTL':''}`;
    if(l.code.toLowerCase()===cur)o.selected=true;
    sel.appendChild(o);
  }
  priority.forEach(p=>{const l=LANGS.find(x=>x.code.toLowerCase()===p);if(l)add(l);});
  const sep=document.createElement('option');sep.disabled=true;sep.textContent='─────────── 全部 249 语言 ───────────';sel.appendChild(sep);
  LANGS.forEach(add);
}

//sql 脚本  使用mysql 请建表

//create table (cabrdlyc)
//DROP TABLE IF EXISTS `cabrdlyc`;
//CREATE TABLE `cabrdlyc` (text varchar(255), text_good varchar(255), text_bad  varchar(255),text_week bool) ;

//insert data
var userModSql = 'INSERT INTO cabrdlyc(text,text_good,text_bad,text_week) VALUES ?';
var userModSql_Params = [

	['洗澡','你几天没洗澡了？','会把设计方面的灵感洗掉', true],
	["锻炼一下身体","","能量没消耗多少，吃得却更多",true],
	["抽烟","抽烟有利于提神，增加思维敏捷","除非你活够了，死得早点没关系",true],
	["白天上线","今天白天上线是安全的","可能导致灾难性后果",false],
	["重构","代码质量得到提高","你很有可能会陷入泥潭",false],
	["使用%t","你看起来更有品位","别人会觉得你在装逼",false],
	["跳槽", "该放手时就放手","鉴于当前的经济形势，你的下一份工作未必比现在强",false],
	["招人","你面前这位有成为牛人的潜质","这人会写程序吗？",false],
	["面试","面试官今天心情很好","面试官不爽，会拿你出气",false],
	["提交辞职申请","公司找到了一个比你更能干更便宜的家伙，巴不得你赶快滚蛋","鉴于当前的经济形势，你的下一份工作未必比现在强",false],
	["申请加薪","老板今天心情很好","公司正在考虑裁员",false],
	["晚上加班", "晚上是程序员精神最好的时候","", true],
	["在妹子面前吹牛","改善你矮穷挫的形象","会被识破",true],
	["撸管", "避免缓冲区溢出","强撸灰飞烟灭", true],
	["浏览成人网站", "重拾对生活的信心","你会心神不宁", true],
	["命名变量\"%v\"", "","",false],
	["写超过%l行的方法", "你的代码组织的很好，长一点没关系","你的代码将混乱不堪，你自己都看不懂",false],
	["提交代码","遇到冲突的几率是最低的","你遇到的一大堆冲突会让你觉得自己是不是时间穿越了",false],
	["代码复审", "发现重要问题的几率大大增加","你什么问题都发现不了，白白浪费时间",false],
	["开会","写代码之余放松一下打个盹，有益健康","小心被扣屎盆子背黑锅",false],
	["打DOTA", "你将有如神助","你会被虐的很惨", true],
	["晚上上线", "晚上是程序员精神最好的时候","你白天已经筋疲力尽了",false],
	["修复BUG", "你今天对BUG的嗅觉大大提高","新产生的BUG将比修复的更多",false],
	["设计评审", "设计评审会议将变成头脑风暴","人人筋疲力尽，评审就这么过了",false],
	["需求评审", "","",false],
	["上微博", "今天发生的事不能错过","今天的微博充满负能量", true],
  ["上AB站", "还需要理由吗？","满屏的兄贵我会说出来？", true]
];

connection.query(userModSql,[userModSql_Params],function (err, result,fields) {
   if(err){
         console.log('[INSERt ERROR] - ',err.message);
         return;
   }        
  console.log('--------------------------UPDATE----------------------------');
  console.log('UPDATE affectedRows',result.affectedRows);
  console.log('-----------------------------------------------------------------\n\n');
});
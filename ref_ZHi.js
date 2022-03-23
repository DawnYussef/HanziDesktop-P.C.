const RaN = Math.floor(Math.random() * 5);
var inst_ZHi = new Array();

switch(RaN){
    case 0: //Prep.
    
    //UDC (Undeclared Comment)
    inst_00 = "明天我需要工作，还偏要我不想睡觉。<br><br><span class='tsl' id='insert'>明天我需要工作，还偏要我不想睡觉。</span><br>&%正午我小睡、成天我睡觉了今天我的中文课取消了。<br><br><span class='tsl' id='insert'>正午【--midday|--noon：《noun》zhèngwǔ】我小睡、成天我睡觉了今天我的中文课取消【--to cancel：《verb》qǔ xiāo】了</span><br>";
    inst_01 = "我最终没有做这份工作，戴上口罩30分钟后头疼<br><br><span class='tsl' id='insert'>我最终【--final：《prep》zuìzhōng】没有做这份【--classifier for reports（contracts）：《classifier》fèn】工作，戴上【--to put on：《verb》kǒuzhào】口罩【--mask（surgical etc）：《noun》kǒuzhào】30分钟后头疼【--headache：《noun》tóuténg】</span><br>";
    inst_02 = "我已经预料到了这个结果，我不会难过<br><br><span class='tsl' id='insert'>我已经【--already：《prep》yǐjīng】预料【--to anticipate|--expectation：《verb》yùliào】到了【--in the end：《prep》dàoliǎo】这个结果【--result|--*（to bear fruit）：《noun》jiéguǒ】，我不会难过</span><br>";
    inst_03 = "没关系-您可以稍后再进行测试<br><br><span class='tsl' id='insert'>没关系【--it doesn't matter：《expr.》méiguānxi】、您可以稍后【--later on：《prep》shāohòu】再进行【--to adavance|--to conduct：《verb》jìnxíng】测试【--test：《noun》cèshì】</span>";
    inst_04 = "...01&%...02&%...03";
    inst_05 = "...01&%...02&%...03";
    
    resp = {
    //..41 nodes
    //inst_刀 = {
        "刀子" : "...01&%...02&%...03", 
        "磨刀石" : "...01&%...02&%...03",
        "刀鞘" : "...01&%...02&%...03",
        "军刀" : "Dawn Yussef（与李明）：“军用匕首主要目的当然是用于近距离搏击，以杀伤敌方人员。”<br><br><span class='tsl' id='insert'>《repeat》军用匕首【--dagger：《noun》bǐshǒu】的主要【--main|--primary：《adj》zhǔyào】目的【--purpose：《noun》mùdì】当然是用于【--use in|--use for：《prep》yòngyú】近距离【--close range：《prep》jìnjùlí】搏击【--to fight（hand-to-hand）：《verb》bójī】，以杀伤【--to kill or injure：《verb》shāshāng】敌方【--enemy：《noun》dífāng】人员【--personnel：《noun》rényuán】。</span><br><br>",
        "刀枪" : "Dawn Yussef（与黎明）：“我想反对他们，但是很难...他们不怎么好的谋臣武将。”<br><br><span class='tsl' id='insert'>《repeat》我想反对【--to fight|--to oppose：《verb》fǎnduì】他们，但是很难...他们不怎么好的谋臣武将【--generals & advisors：《noun》móu chén wǔ jiàng】。</span><br><br>&%Dawn Yussef（与黎明）：“它关于世界政府和阴谋论。”<br><br><span class='tsl' id='insert'>《repeat》它关于【--pertaining to|--concerning：《prep》guānyú】世界政府和阴谋论【--conspiracy theory：《noun》yīn móu lùn】。</span><br><br>",
        "尖刀" : "...01&%...02&%...03",
        "大刀" : "...01&%...02&%...03",    
    //};
  
    //resp_装 = {
        "装" : "...01&%...02&%...03",
        "服装" : "...01&%...02&%...03",
        "套装" : "Common（普通话）：“羊毛混纺罗纹混纺短上衣。”<br><br>《repeat》羊毛【--fleece|--wool：《noun》yángmáo】混纺【--blended fabric：《noun》hùnfǎng】罗纹【--rib（in fabric）：《noun》luówén】短【--short|--to lack：《verb》duǎn】上衣【--upper outer garment|--jacket：《noun》shàngyī】<br><br>",
        "领" : "...01&%...02&%...03",
        "衣领" : "...01&%...02&%...03",
        "选装" : "Common（普通话）：“2020年的最后一天，心情异常低落。看着满世界对新一年的期盼，满脸的笑容，最好的办法就是自己静静地待在一个角落，不给别人添麻烦……”<br><br>2020年的最后一天，心情【--mood：《noun》xīnqíng】异常【--exceptional|--abnormal：《adj》yìcháng】低落【--gloomy|--to decline：《adj》dīluò】。看着【--to come in contact with：《verb》zháo；--action in progress：《part》zhe】满世界【--across the world：《prep》mǎnshìjiè】对新一年的期盼【--to anticipate：《verb》qīpàn】，满脸【--across one's whole face：《prep》mǎnliǎn】的笑容【--smile：《noun》xiàoróng】，最好的办法【--means|--way（of doing）：《noun》bànfǎ】就是自己静静【--still|--quiet：，《adj》jìng】“地待【--to stay：《verb》dāi；--to wait：《verb》dài】在一个角落【--corner：《noun》jiǎoluò】，不给别人添麻烦【--to cause trouble|--to inconvenience：《verb》tiānmáfan】…<br><br>",
        "布料" : "...01&%...02&%...03",
        
    //resp_备 = {
        "清册" : "Ksu Dormue（苏多姆）：“我想绵密清册的我们的筹备和材料。”<br><br>《repeat》我想绵密【--detailed|--meticulous：《noun》miánmì】清册的我们的筹备和材料。<br><br>",
    //};
    
    //resp_急 = ｛
        "急" : "Common（普通话）：“...开始这美国政府的谋划”<br><br>...开始这美国政府的谋划【--to scheme|--conspiracy：《noun》móu huà】<br><br>“美国政府请中国做多非法品的生产线，现在这病毒是效果。”<br><br>美国政府请中国做多非法【--illegal：《adj》fēi fǎ】品的生产线【--assembly line：《noun》shēng chǎn xiàn】，现在这病毒是效果【--result|--（theater）sound or visual effects：《noun》xiào guǒ】。”<br><br>“...如果你记得美国施放这病毒。”<br><br>如果你记得美国施放【--to discharge（virus）：《verb》】这病毒。<br><br>",
        "紧急" : "“我还觉得在中国，关于1800年时代与义和团欲动【--Boxer Rebellion：《noun》Yìhétuán Yùndòng】、反对这世界的阴谋论【--strategic experts|--generals：《noun》móu chén wǔ jiàng】。<br>美国将不是到这真相【--truth|--actual facts：《noun》zhēn xiàng】。”<br><br>我还觉得在中国，关于1800年时代与义和团欲动、反对这世界的阴谋论。<br>美国将不是到这真相。<br><br>",
        "急症" : "...01&%...02&%...03",
        "急务" : "Political（政治）：今天总统特朗普是赦免了，我放心、我不知道怎么你觉得关于总统特朗普。<br><br><span class='tsl' id='insert'>今天总统【--president（of a country）：《noun》zǒng tǒng】特朗普是赦免了，我放心【--to feel relieved：《verb》fàngxīn】、我不知道怎么你觉得关于总统特朗普。</span><br>",
    //};
    
    //resp_救 = {
        "急救箱" : "...01&%...02&%...03",
        "泥敷剂" : "Dawn Yussef（余李明）：“在家中放松身心并保持健康饮食，直到我可以缓解您与泥敷剂。”《repeat》<br><br>在家中放松【--to relax：《verb》fàngsōng】身心【--body and mind：《noun》shēnxīn】并保持【--to maintain：《verb》bǎochí】健康【--health|--healthy：《noun》jiànkāng】饮食【--food and drink：《noun》yǐnshí】，直到【--until：《prep》zhídào】我可以缓解【--to bring relief：《verb》huǎnjiě】您与泥敷剂【--poultice：《noun》nífūjì】。<br><br>",
        "解药" : "...01&%...02&%...03",
        "滋补品" : "...01&%...02&%...03",
        "绷带" : "...01&%...02&%...03",
        "敷布" : "...01&%...02&%...03",
        "橡皮膏" : "...01&%...02&%...03",
    //};
    
    //resp_药 = {
        "膏药" : "Ksu Dormue（苏多姆）：“我们制药去和膏药做、好想有备无患。”<br><br>《repeat》我们制药【--to manufacture medicine：《pause》zhìyào】去和膏药【--herbal plaster applied to wound：《noun》gāoyao】做【--to do：《verb》zuò】、好想有备无患*【--to be prepared，just in case：《verb》yǒubèiwúhuàn】。<br><br>",
        "药膏" : "Common（普通话）：“我们发想领域内芦荟，可能药膏使。”<br><br>《repeat》我们发想领域【--domain|--field：《noun》lǐngyù】内芦荟【--aloe vera：《noun》lúhuì】，可能*药膏【--ointment：《noun》yàogāo】使【--to make|--to cause：《verb》shǐ】。<br><br>",
        "火药" : "...01&%...02&%...03",
        "炸药" : "...01&%...02&%...03",
        "医药" : "...01&%...02&%...03",
        "药品" : "Dawn Yussef（余李明）：“我们的狩猎成功了，肺材料提炼该药品即将现成。”<br><br>《repeat》我们的狩猎成功【--successful：《pause》chénggōng】了，肺【--lung：《pause》fèi】材料【--material：《pause》cáiliào】搜提炼【--to extract（ore，minerals，etc.）|--to process：《pause》tíliàn】到该药品即将【--to be on the verge of：《pause》jíjiāng】现成【--readily available：《pause》xiànchéng】。<br><br>",
        "药水" : "...01&%...02&%...03",
        "眼药" : "...01&%...02&%...03",
        "药材" : "Common（普通话）：“农业【--farming|--agriculture：《noun》nóngyè】农村【--rural area|--village：《noun》nóngcūn】部 国家药品监督【--to inspect|--to supervise：《verb》jiāndū】管理【--to administer|--to manage：《verb》|--management：《noun》guǎnlǐ】局【--narrow：《adjective》|--office|--situation：《noun》|--classifier for set（games etc）：jú】 国家中医药管理局关于【--about|--pertaining to|--concerning：《prep》guānyú】印发【--to publish：《verb》yìnfā】《全国道地【--authentic：《adjective》dàodì】*药材｛--medicinal ingredient：《noun》yàocái｝生产【--to produce|--to manufacture：《verb》shēngchǎn】基地【--base（of operations）：《noun》jīdì】建设【--to build|--to construct：《verb》jiànshè】规划【--to plan|--planning：《verb》|--program：《noun》guīhuà】（2018—2025年）》的通知【--to notify：《verb》tōngzhī】”<br><br><a hef='http://www.moa.gov.cn/gk/tzgg_1/tz/201812/t20181219_6165190.htm'>农业农村部国家药品监督管理 局 国家中医药管理局关于印发《全国道地药材生产基地建设规划（2018—2025年）》的通知</a><br><br>",
        "解药" : "...01&%...02&%...03",
        "毒药" : "...01&%...02&%...03",
        "药瓶" : "...01&%...02&%...03",
    //};
    
    //resp_草 = {
        "花药" : "...01&%...02&%...03",
        "草根" : "...01&%...02&%...03",
        "薰衣草" : "...01&%...02&%...03"
    //};
    };
    
    function inst_Prompt(){
        var sbj_Content = new Array();
        if (typeof(Storage) !== "undefined") {
            sbj_Content[0] = sessionStorage.getItem("ref_0");
            sbj_Content[1] = sessionStorage.getItem("ref_1");
            sbj_Content[2] = sessionStorage.getItem("ref_2");
            sbj_Content[3] = sessionStorage.getItem("ref_3");
            sbj_Content[4] = sessionStorage.getItem("ref_4");
        } else {
            document.getElementById("commandLog").innerHTML += "[...] Browser not supported.";
        }
        
        //var RaN = Math.floor(Math.random() * 5);
        var command = sbj_Content[RaN];
        try {
            var edit = resp[command];
            var output = edit.split("&%");
            
        } catch(error) {
            inst_ZH = [inst_00, inst_01, inst_02, inst_03, inst_04, inst_05];
            
            var comment = inst_ZH[RaN];
            var output = comment.split("&%");
            var n = output.length;
            var p = Math.floor(Math.random() * n);
            var UDC = output[p];
             
        }
        
        var n = output.length;
        var p = Math.floor(Math.random() * n);
        var sbj = output[p];
        
        if (command in resp) {

            document.getElementById("commandLog").innerHTML = 
            "<li>" + command +"</li>" + sbj +"<br>";
        
        } else {
            document.getElementById("commandLog").innerHTML = "<li>Document not found.</li><br>[...] " + UDC;
        }

    };
        
    break;
        
    case 1: //Prep.
        
    //UDC (Undeclared Comment)
    inst_00 = "...01&%...02&%...03";
    inst_01 = "...01&%...02&%...03";
    inst_02 = "...01&%...02&%...03";
    inst_03 = "...01&%...02&%...03";
    inst_04 = "...01&%...02&%...03";
    inst_05 = "...01&%...02&%...03";
    
    resp = {
    
    //resp_刀 = {
        "宝刀不老" : "宝刀不老典故出自哪里，宝刀不老什么意思?<br><br>近半年以来，笔者分别依据《三国志》、《后汉书》、《晋书》、《华阳国志》、《世说新语》等史籍中的记载介绍了一些与三国有关的成语故事，算来至今已有近五百篇了。<br><iframe width='100%' height='166' scrolling='no' frameborder='no' allow='autoplay' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/878259229&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'></iframe><div style='font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;'><a href='https://soundcloud.com/dawn-yussef' title='汉字台式机〜P.C.' target='_blank' style='color: #cccccc; text-decoration: none;'>Dawn Yussef</a> · <a href='https://soundcloud.com/dawn-yussef/18aug2020-zh' title='18AUG2020 ZH' target='_blank' style='color: #cccccc; text-decoration: none;'>18AUG2020 ZH</a></div><br><a target='_blank' hef='http://www.gf521.com/article/14258.html'></a>&%...02&%...03", 
        "变炖" : "...01&%...02&%...03",
        "碎" : "Dawn Yussef（余李明）：“我的铠甲碎因为它多次浸泡了；也我就要收集皮革需要补和做敷布。”<br><br><span class='tsl' id='insert'>《repeat》我的铠甲【--armor：《noun》kǎijiǎ】*碎｛--to break down：《verb》suì｝它多次【--many times：《prep》duōcì】浸泡【--to immerse|--to soak：《verb》jìnpào】了；也【--also：《prep》yě】我就要收集皮革【--leather：《noun》pígé】需要补【--to repair|--to mend：《verb》bǔ】和做敷布【--medical dressing|--bandage：《noun》fūbù】。</span><br><br>",   
    //};
        
    //resp_装 = {
        "消磨" : "Common（普通话）：“摘要：冬季室内如何保暖？在没有暖气、空调的情况下，一些小技巧也能帮你室内升温，让你冬季不寒冷！那么冬季室内如何保暖呢？以下十个妙招帮你赶走冬季寒冷！”<br><br>《repeat》摘要【--summary：《noun》zhāiyào】：冬季【--winter：《noun》dōngjì】室内【--indoor：《noun》shìnèi】如何保暖【--to stay warm：《verb》bǎonuǎn】？在没有暖气【--central heating：《noun》nuǎnqì】、空调【--air conditioning：《noun》kōngtiáo】的情况【--circumstances：《noun》qíngkuàng】下，一些小技巧【--technique：《noun》jìqiǎo】也【--also：《prep》yě】能帮【--to help：《verb》bāng】你室内升温【--to become hot：《verb》shēngwēn】，让【to yield：《verb》ràng】你冬季【-winter：《noun》dōngjì】不寒冷【--cold（climate）：《noun》hánlěng】！那么【--in that way：《prep》nàme】冬季【--winter：《noun》dōngjì】室内如何。<br><br>",
        "保暖" : "...01&%...02&%...03",
        
    //resp_备 = {
        "筹备" : "Common（普通话）：“一次担当国家使命的我们行动全力救治这里场，时民生凋敝因为战争。”<br><br>《Repeat》一次【--first|--once:《prep》yīcì】担当【--to take upon oneself：《verb》dāndāng】国家使命的我们行动【--operation：《noun》xíngdòng】全力救治【--to provide critical care：《verb》jiùzhì】这里场，时民生凋敝【--people's livelihood is reduced in times of destitution：《idiom》mínshēngdiāobì】因为战争【--war|--conflict：《noun》zhànzhēng】。<br><br>&%Dawn Yussef（余李明）：“我们应该聚集的筹备因为刺客，这使命需要对咱们汇报。”<br><br>《repeat》我们因该聚集【--to assemble|--to gather：《verb》jùjí】应该筹备因为刺客【--assassin：《noun》cìkè】，这使命需要对咱们【--we / us（ncluding both the speaker and the person spoken to）：《noun》zánmen】汇报【--to report|--to give an account：《v》huì bào】<br><br>",
        "戒备" : "Political（政治）：“香港是灾害到，...这特朗普行政部门尝试用中央情报局（CIA）的软件为了骚乱开始。”<br><br><span class='tsl' id='insert'>香港【--Hong Kong：《noun》Xiānggǎng】是灾害到，...这特朗普行政部门尝试【--to attempt：《verb》cháng shì】用中央情报局（CIA）的软件【--（computer）software：《noun》ruǎn jiàn】为了骚乱【--disturbance|--riot：《noun》sāo luàn】开始。</span><br>",
    //};
    
    //resp_急 = {
        "应急" : "Dawn Yussef（余李明）：“肺材料发现了、当时狼的狩猎与收集，一些应急通过药物可以帮助如果可得到。”<br><br>《repeat》肺【--lung：《noun》fèi】材料【--material：《noun》cáiliào】发现【--to find：《verb》fāxiàn】了、当时【--at the time：《pause》dāngshí】狼【--wolf：《pause》láng】的狩猎【--to hunt:《verb》shòuliè】与【--together with：《prep》yú】收集【--to gather：《verb》shōují】一些【--this one：《prep》yīxiē】应急【--emergency：《noun》yìngjí】可以帮助如更【--if：《prep》rúguǒ】可得到【--available：《noun》kědédào】。<br><br>",
        "加急" : "Common（普通话）：“聊天|如何使用加急功能？<br>通过阅读此文，你可以掌握如何使用加急功能，与伙伴一起，高效解决紧急需求。”<br><span class='tsl' id='insert'>《audio》聊天【--to chat|--to gossip：《verb》liáotiān】|如何使用加急【--to become more urgent|--to handle a matter urgently： 《verb》jiājí】功能【--functionality，capability：《noun》gōngnéng】？<br>通过阅读【--to read|--reading：《verb》yuèdú】此文，你可以掌握【--to grasp（often fig.)|--to control：《verb》zhǎngwò】如何使用加急功能，与伙伴【--partner|--companion：《noun》huǒbàn】一起【--in the same place|--together：《prep》yīqǐ】，高效【--efficient|--highly effective《adj》gāoxiào】解决【--to settle（a dispute）|--to resolve：《verb》jiějué】需求【--requirement|--to require：《noun/verb》xūqiú】。</span><br><br><a target='_blank' href='https://getfeishu.cn/hc/zh-cn/articles/360024757913-%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E5%8A%A0%E6%80%A5%E5%8A%9F%E8%83%BD'>聊天 | 如何使用加急功能？</a><br>",
        "急待" : "Common（普通话）：“错别字提示：由于该成语本身就有急迫的意思，所以非常容易写错，正确的写法应该是“迫不及待”，而不是“迫不急待”。”<br><br>《repeat》错别字【--mispronounced characters：《noun》cuòbiézì】提示【--to point out：《verb》tíshì】：由于【--to suggest：《verb》yóuyú】该【--should|--ought to：《prep》gāi】成语【--proverb：《noun》chéngyǔ】本身【--in itself：《prep》běnshēn】就有急迫【--urgent|--imperative：《noun》jípò】的意思，所以非常【--very：《adj》fēicháng】容易【--easy|--likely：《adj》róngyì】写【--to write：《verb》xiě】错【--mistake：《noun》cuò】，正确【--correct|--proper：《adj》zhèngquè】的写法【--style of writing：《noun》xiěfǎ】应该是“迫不及待【--impatient（idiom）：《adj》pòbùjídài】<br><br>",
        "急难" : "Common（普通话）：“我在急难中求告耶和华，向我的神呼求。”<br><br>《break》我在急难中求高【--to implore：《verb》qiúgào】耶和华【--Jesus（Yahweh）：《noun》Yēhéhuá】，向【--towards|--formerly：《prep》xiàng】我的神【--God|--deity：《noun》shén】呼【--to call|--to exhale：《verb》hū】求【--to seek|--to request:《verb》qiú】。<br><br>",
    //};
    
    //resp_救 = {
        "救" : "...01&%...02&%...03",
        "解救" : "...01&%...02&%...03",
        "救护" : "...01&%...02&%...03",
        "救治" : "Common（普通话）：“哪家医院是医疗救治定点医院（这倆都能在小程序里查到）。”<br><br>《repeat》哪【--which：《prep》nǎ】家【--*classifier for businesses：《particle》jiā】医院【--hospital：《noun》yīyuàn】是医疗【--medical treatment:《noun》yīliáo】*救治【--to provide critical care（to a patient）：《verb》jiùzhì】定点【--to determine a location：《verb》dìngdiǎn】医院（这俩【--two|--both（colloquial）：《prep》liǎ】都能在小程序【--procedures|--sequence|--computer program：《noun》chéngxù】里查【--to research：《pause》chá】到）。<br><br>"
    //};
    
    };
    
     function inst_Prompt(){
        var sbj_Content = new Array();
        if (typeof(Storage) !== "undefined") {
            sbj_Content[0] = sessionStorage.getItem("ref_0");
            sbj_Content[1] = sessionStorage.getItem("ref_1");
            sbj_Content[2] = sessionStorage.getItem("ref_2");
            sbj_Content[3] = sessionStorage.getItem("ref_3");
            sbj_Content[4] = sessionStorage.getItem("ref_4");
        } else {
            document.getElementById("commandLog").innerHTML += "[...] Browser not supported.";
        }
        
        //var RaN = Math.floor(Math.random() * 5);
        var command = sbj_Content[RaN];
        
        
        try {
            var edit = resp[command];
            var output = edit.split("&%");
            
        } catch(error) {

            inst_ZH = [inst_00, inst_01, inst_02, inst_03, inst_04, inst_05];
            
            var comment = inst_ZH[RaN];
            var output = comment.split("&%");
            var n = output.length;
            var p = Math.floor(Math.random() * n);
            var UDC = output[p];
             
        }
        
        var n = output.length;
        var p = Math.floor(Math.random() * n);
        var sbj = output[p];
        
        if (command in resp) {

            document.getElementById("commandLog").innerHTML = 
            "<li>" + command +"</li>" + sbj +"<br>";
        
        } else {
            document.getElementById("commandLog").innerHTML = "<li>Document not found.</li><br>[...] " + UDC;
        }
        
        var audio = document.getElementById("commandLog").innerHTML;
        var speech = audio.toString();
        var tts = document.getElementBYId("audio").value = speech;
    };
    
    break;
        
    case 2: //Obj.
        
    //UDC (Undeclared Comment)
    inst_00 = "...01&%...02&%...03";
    inst_01 = "...01&%...02&%...03";
    inst_02 = "...01&%...02&%...03";
    inst_03 = "...01&%...02&%...03";
    inst_04 = "...01&%...02&%...03";
    inst_05 = "...01&%...02&%...03";
    
    resp = {
    
    //resp_刀 = {
        "磨刀" : "Dawn Yussef（余李明）：“让我们收集材料为了我们的武器磨刀。”<br><br><span class='tsl' id='insert'>让【--to permit：《verb》ràng】我们收集【--to gather：《verb》shōují】材料【--material：《noun》cáiliào】为了我们【--our：《pause》我们】的武器*磨刀【--to hone（blade）：《verb》módāo】。</span><br><br>",
        "刀刺" : "...01&%...02&%...03",
        "严厉打击" : "Ksu Dormue（苏多姆）：“我们可能需要对此进行进一步调查、这些山贼的咱们严厉打击急待呢。”<br><br><span class='tsl' id='insert'>《repeat》我们可能需要对此【--this|--these：《prep》cǐ】进行【--to advance|--to conduct：《verb》jìnxíng】进一步【--one step further：《prep》jìnyībù】调查【--investigation|--inquiry|--to investigate：《noun》diàochá】、这些山贼【--brigand：《noun》shānzéi】的咱们【--our part|--we or us：《noun》zánmen】严厉打击*【--to deal with harshly：《verb》yánlìdǎjī】急待【--to need urgently：《verb》jídài】呢。</span><br><br>&%Common（普通话）：“我们的严厉打击上这，在这个地区很难找到废铁。也许如果我们进一步向人口更多的内陆旅行呢。”<br><br><span class='tsl' id='insert'>《break》我们要严厉打击【--to deal with harshly：《verb》yánlìdǎjī】上这，在这个地区【--region：《noun》dìqū】很难找到【--to find：《verb》zhǎodào】废铁【--scrap iron：《noun》fèitiě】。也许【--perhaps|--maybe：《prep》yěxǔ】如果【--in the event that：《prep》rúguǒ】我们进一步【--one step further：《prep》jìnyībù】向【--towards：《prep》xiàng】人口【--population：《noun》rénkǒu】更多的内陆【--interior|--inland：《prep》nèilù】旅行【--to travel：《verb》lǚxíng】呢。</span><br><br>",
    //};
        
    //resp_装 = {
        "衣" : "...01&%...02&%...03",
        "着" : "Ksu Dormue（苏多姆）：这里是什么？&%《vocab》我抵达【--to arrive：《vb》dǐdá】在“寂寞冬寨【--Lit. Lonely Winter Stronghold：《n》jìmò dōng zhài】的酒店为了睡现。我需要新衣服，之际【--during|--at the time：《prep》zhījì】的路上一切【--everthing：《n》yīqiè】成为了湿答答。”<br><br>Ksu Dormue（苏多姆）：“我抵达在“寂寞冬寨”的酒店为了睡现。我需要新衣服，之际的路上一切成为了湿答答。”",
        "穿" : "Ashley（刘轩）：“我现在在做作业，我可能不会及时回复你的短信。但是你有任何的问题或者想跟我分享的事情都可以告诉我。”<br><br>我现在在做作业，我可能不会及时【--in time|--promptly：《prep》jíshí】回复【--to reply|--Re：（email）：《verb》huífù】你的短信【--text message|--SMS：《noun》duǎnxìn】。但是你有任何【--whatever|--any：《prep》rènhé】的问题或者【--or|--possibly：《prep》huòzhě】想跟【--to follow closely：《verb》gēn】我分享【--to share：《verb》fēnxiǎng】的事情【--matter|--thing：《noun》shìqing】都可以告诉【--to tell|--to inform：《verb》gàosu】我。",
        "送" : "Common（普通话）：“想要休息多久？”<br><br>《repeat》想要休息【--rest|--to rest：《verb》xiūxi】多久【--how long？《interogative》：duōjiǔ】？<br><br>",
    //};
    
    //resp_救 = {
        "济急" : "Ksu Dormue（苏多姆）：“胸部受到内部伤害，草药的济急拜托。”<br><br>《repeat》胸部【--chest|--bosom：《noun》xiōngbù】受到【--to receive（*punishment，education，praise，etc）：《verb》shòudào】内部【--internal：《adj》nèibù】伤害【--to injure|--to harm：《verb》shānghài】，草药的济急【--to give relief（material）：《verb》jìjí】拜托【--to request（action）|--please！：《verb》bàituō】<br><br>&%Ksu Dormue（苏多姆）：“为了开始我们的调查和剂急你的我在首都会啊。”<br><br>《repeat》为了开始我们的调查【--to investigate：《verb》diàochá】和剂急【--to give relief（material）：《verb》jìjí】你的我在首都【--capital（city of）：《noun》shǒudū】会啊。<br><br>",
        "援救" : "Dawn Yussef（余黎明）:“我将搜寻山以共通过，能一这方来你的援救。”<br><br><span class='tsl' id='insert'>《transliterate》我将【--shall：《prep》jiāng】搜寻【--to search：《verb》sōuxún】山以共【--to provide：《verb》gōng】通过，能一这方来你的*援救【--to come to the aid of|--to save：《verb》yuánjiù】。</span><br>",
    //};
    
    //resp_药 = {
        "吃药" : "Dawn Yussef（余李明）：“最近无可能制草药，人可得到说话只好像知道了、是秘密吗？”<br><br>《Repeat》最近【--recently：《prep》zuìjìn】无可能制草药，人可得到【--available：《adjective》kě dédào】说话只好像【--as if|--to seem like：《verb》hǎoxiàng】知道了、是秘密【--secret“《noun》mìmì 】吗？<br><br>",
        "制药" : "Common（普通话）：“药品与我们每个人都息息相关。它可以帮助我们预防、治疗、诊断疾病，但若使用不当也可能对身体产生损害。那么，药物进入人体之后，会达到哪些部位？又经历了怎样的变化？完成使命后又去了哪里呢？ ”<a target='_blank' href='http://www.simm.cas.cn/kxcb/kxcb_kpwz/201702/t20170214_4745023.html'></a>&%Ksu Dormue（苏多姆）：“化学师请求我们接着一些制药在研究告竣，药材在城市的西边是洞穴内。”<br><br>《repeat》化学师【--apothecary：《noun》huàxuéshī】请求【--to request：《pause》qǐngqiú】我们接着【--to proceed：《verb》jiēzhe】一些*制药{--to manufacture medicine：《pause》zhìyào}在研究【--research|--to research：《verb》yánjiū】告竣【--(of a project) to be completed：《pause》gàojùn】，药材在城市【--city：《pause》chéngshì】西边【--western part：《prep》xībiān】是洞穴【--cavern：《pause》dòngxué】内。<br><br>&%Dawn Yussef（余李明）：“我们的简单使命，发现新文在世界、药草收集、和做制药。”<br><br>《Repeat》我们的简单【--simple：《adjective》jiǎndān】使命，发现新文在世界、药草收集、和做*制药【--to manufacture medicine：《verb》zhìyào】。<br><br>",
        "服药" : "Ksu Dormue（苏多姆）：“我不想实验服药，这瓶盂是重。”<br><br>《repeat》我不想实验【--experimental|--to experiment《verb》shíyàn】，这瓶盂是重<br><br>",
        "入药" : "...01&%...02&%...03",
        "开药" : "...01&%...02&%...03"
    //};
    };
        
     function inst_Prompt(){
        var sbj_Content = new Array();
        if (typeof(Storage) !== "undefined") {
            sbj_Content[0] = sessionStorage.getItem("ref_0");
            sbj_Content[1] = sessionStorage.getItem("ref_1");
            sbj_Content[2] = sessionStorage.getItem("ref_2");
            sbj_Content[3] = sessionStorage.getItem("ref_3");
            sbj_Content[4] = sessionStorage.getItem("ref_4");
        } else {
            document.getElementById("commandLog").innerHTML += "[...] Browser not supported.";
        }
        
        //var RaN = Math.floor(Math.random() * 5);
        var command = sbj_Content[RaN];
        
        
        try {
            var edit = resp[command];
            var output = edit.split("&%");
            
        } catch(error) {

            inst_ZH = [inst_00, inst_01, inst_02, inst_03, inst_04, inst_05];
            
            var comment = inst_ZH[RaN];
            var output = comment.split("&%");
            var n = output.length;
            var p = Math.floor(Math.random() * n);
            var UDC = output[p];
             
        }
        
        var n = output.length;
        var p = Math.floor(Math.random() * n);
        var sbj = output[p];
        
        if (command in resp) {

            document.getElementById("commandLog").innerHTML = 
            "<li>" + command +"</li>" + sbj +"<br>";
        
        } else {
            document.getElementById("commandLog").innerHTML = "<li>Document not found.</li><br>[...] " + UDC;
        }

    };
        
    break;
        
    case 3: //Ctx.
        
    //UDC (Undeclared Comment)
    inst_00 = "...01&%...02&%...03";
    inst_01 = "...01&%...02&%...03";
    inst_02 = "...01&%...02&%...03";
    inst_03 = "...01&%...02&%...03";
    inst_04 = "...01&%...02&%...03";
    inst_05 = "...01&%...02&%...03";
    
    resp = {
    //resp_刀 = {
        "刀口" : "...01&%...02&%...03",
        "刀疤" : "...01&%...02&%...03",
        "刀刃" : "Common（普通话）：“政府过“紧日子” 如何把钱花在刀刃上？”<br><br><span class='tsl' id='insert'>政府【--government：《noun》zhèngfǔ】过“紧【--strict|--to tighten：《verb》jǐn】；<br>日子【--a （calendar day）：《noun》rìzi】钱【--coin：《noun》qián】花在”如何把刀刃【--knife blade|--crucial point：《noun》dāorèn】。</span><br><br>“级几政府必须真正对紧日子，中央政府要带头。今年的政府工作报告明确，中央本级支出安排附赠反。”<br><br><span class='tsl' id='insert'>级【--level《noun》jí】几【--how much？：《interogative》jǐ】政府必须【--to be necessary：《prep》bìxū】真正【--genuine：《adj》zhēnzhèng】过紧日子，中央【--central《pause》zhōngyāng】；政府要带头【--to take the lead：《verb》dàitóu】。今年的政府工作报告【--working report：《pause》gōngzuò bàogào】明确【--to specify《pause》míngquè】，中央本【--origin：《pause》běn】级支出【--to spend：《verb》zhīchū】安排【--to arrange：《verb》ānpái】负增长【--economic recession：《noun》fùzēngzhǎng】。</span><br><br>“政府过‘紧日子’，目的是让”政府过‘紧日子’，目的【--purpose：《noun》目的】是让人民群众过‘好日子’，这是一个长期方针政策，并不是短期应对措施。”5月22日的首场“部长通道”上，财政部部长刘昆接受媒体采访时表示，政府“紧”依然有空间，并强调这同保障政权的正常没有矛盾<br><br>那么，政府如何过“紧日子”，“紧”在哪些方面？又将如何保障人民群众的“好日子”？<br><br><a target='_blank' href='http://www.gov.cn/zhengce/2020-05/25/content_5514843.html'></a>&%Political（政治）：“哇塞，你可以告诉我关于它吗？我也支持总统特朗普，但是我不信任他的财经政策关于中国。”<br><br><span class='tsl' id='insert'>哇塞【--（slang）wow！：《expr》wāsāi】，你可以告诉我关于它吗？我也支持【--to support|--to be in favor of：《verb》zhī chí】总统特朗普，但是我不信任【--to trust|--to have confidence in：《verb》xìn rèn】他的财经政策【--policy：《noun》zhèng cè】关于中国。</span><br>",
        "刀锋" : "恶魔刀锋是在野外的黑市商人哪里卖，黑市商人在河道边上，远古野怪过去的另一个坡道上面。<br><br><span class='tsl' id='insert'>VOCABULARY:<br>恶魔【--demon|--fiend：《pause》èmó】；<br>*刀锋【--cutting edge|--sword or tool：《pause》dāofēng】；<br>野外【--countryside：《pause》yěwài】；<br>黑市【--black market：《pause》hēishì】；<br>商人【--merchant：《pause》shāngrén】；<br>卖【--to sell：《pause》mài】；<br>黑市商人在河道【--river channel：《pause》hédào】；<br>边【--side|--border：《pause》bian】；<br>远古【--antiquity：《pause》yuǎngǔ】；<br>怪【--odd|--monster：《pause》guài】；<br>过去【--in the past：《pause》guòqù】；<br>另一【--another：《pause》lìngyī】；<br>坡道【--inclined path：《pause》pōdào】；<br><br>《repeat》恶魔刀锋是在野外的黑市商人哪里，黑市商人在河道边上，远古野怪过去的另一个坡道上面。</span>",
        "武器" : "Dawn Yussef（余黎明）：您不会相信我的发现、北边的一个营地，那里有银矿石武器可供使用。<br><span class='tsl' id='insert'>VOCABULARY：<br>相信【--to believe：《pause》相信】；<br>北边【--northern part：《pause》北边】；<br>营地【--camp：《pause》营地】；<br>银矿石【--silver（ore）：《pause》银矿石】；<br>武器【--weapon：《pause》武器】；<br>Literal：‘您【--you（formal)：《pause》您】不会【--improbable|--will not：《pause》不会】相信【--to believe：《pause》相信】我【--I：《pause》我】的发现【--to discover：《pause》发现】、北边【--northern part：《pause》北边】的一个【--this one：《pause》一个】营地【--camp：《pause》营地】，哪里【--that place：《pause》哪里】银矿石【--silver（ore）：《pause》银矿石】武器【--weapon：《pause》武器】可【--able to：《pause》可】共【--to provide：《pause》共】使用【--to use《pause》使用】。’<br>《repeat》您不会相信我的发现、北边的一个营地，那里有银矿石武器可供使用。&%每个构造体都有自己专属的武器，这些武器对于属性的提升是非常不错的。<br><br>VOCABULARY：<br>构造【--structure|--composition：《pause》gòuzào】；<br>专属【--personal|--to be dedicated：《pause》zhuānshǔ】；<br>对于【--regarding：《pause》duìyú】；<br>属性【--attribute：《pause》shǔxìng】；<br>提升【--to promote：《pause》tíshēng】；<br>非常【--very：《pause》fēicháng】；<br>不错【--not bad：《pause》bùcuò】；<br><br>Literal：<br>“每【each：《pause》每】个【--individual：《pause》个】构造【--structure|--composition：《pause》构造】体【--body：《pause》体】都【--entirely：《pause》都】有【--exits：《pause？有】自己【--oneself：《pause》自己】专属【--personal：《pause》专属】的武器【--weapon：《pause》武器】，这些【--these：《pause》这些】武器对于【--regarding：《pause》对于】属性【--attribute：《pause》属性】的提升【--to promote|--to upgrade：《pause》提升】是【--is：《pause》是】非常【--very：《pause》非常】不错【--correct|--not bad：《pause》不错】的。”<br><br>《repeat》每个构造体都有自己专属的武器，这些武器对于属性的提升是非常不错的。<br></span>",
    //};

        
    //resp_装 = {
        "撞衫" : "Dawn Yussef（余李明）：“我收集到药料的治疗，今集中武器和铠甲做。”<br><br>VOCABULARY：<br>治疗【--medical treatment：《pause》zhìliáo】；<br>集中【--to focus：《pause》jízhōng】；<br>铠甲【--armor：《pause》kǎijiǎ】；<br>Literal：<br><br>“我【--I|--me：《pause》我】收集到【--to collect：《pause》收集】药料【--ingredients：《pause》药料】的治疗【--medical treatment：《pause》治疗】，今【--now：《pause》今】集中【--to focus：《pause》集中】武器【--weapon：《pause》武器】和铠甲【--armor：《pause》铠甲】做【--to make：《pause》做】。”<br><br>《repeat》我收集到药料的治疗，今集中武器和铠甲做。《OUT》",
        "装有" : "...01&%...02&%...03",
        "下装" : "Dawn Yussef（余李明）：“游泳后我需要下装，因为衣服变湿了。”<br><br>游泳【--swimming|--to swim：《verb》yóuyǒng】后我需要下装*【--to take of costume：《verb》xiàzhuāng】，因为衣服【--clothes：《noun》yīfu】变【--to change|--to become：《verb》biàn】湿【--moist|--wet：《adjective》shī】了。<br><br>",
        "皮草" : "...01&%...02&%...03",
        
    //resp_备 = {
        "粮草" : "我在河边发现了一个废弃的庇护所。<br>河里有*丰富的生命来维持我们的供应。<br>VOCABULARY：<br>河边【--river bank：《pause》河边】；<br>发现【--to find|--to discover：《pause》发现】；<br>废弃【--to discard：《pause》废弃】；<br>庇护【--shelter：《pause》庇护】；<br>所【--place：《pause》所】；<br>丰富【--to enrich|--abundant：《pause》丰富】；<br>维持【--to preserve：《pause》维持】；<br>Literal：‘我【--I：《pause》我】在【--to be located at：《pause》在】河边【--river bank：《pause》河边】发现【--to discover：《pause》发现了】一个【--individual：《pause》一个】废弃【to abandon：《pause》废弃的】庇护【--shelter：《pause》庇护】所【--place：《pause》所】。<br><br>河里【--river[internal]：《pause》河里】有【--to exist：《pause》有】丰富【--abundant：《pause》丰富】生命【--life：《pause》生命】来【--to arrive：《pause》来】维持【--to maintain：《pause》维持】我们【--ourselves：《pause》我们的】’供应【--to provide：《pause》供应】。<br><br>我在河边发现了一个废弃【--to discard：《pause》废弃】的庇护所。<br>河里有*丰富【--to enrich：《pause》丰富】的生命来维持我们的供应。&%Common（普通话）：“为什么说古代打仗耗费粮草，难道不打仗不吃饭吗？”<br><br>《repeat》为什么说古代【--ancient times：《noun》gǔdài】打仗【--to fight a battle：《verb》dǎzhàng】耗费【--to consume：《verb》hàofèi】粮草*｛--provisions：《noun》liángcǎo｝，难道不打仗就不吃饭吗？<br><br>&%Common（普通话）：“其实并不是非战时不消耗粮草，而是战时的粮草消耗太快了。”<br><br>《repeat》其实【--actually|--in fact：《prep》qíshí】并不【--not at all：《prep》bìngbù】是非【--right and wrong|--quarrel：《noun》shìfēi】战时【--wartime：《noun》zhànshí】不消耗【--to consume|--to use up：《verb》xiāohào】*粮草｛--provisions|--rations：《noun》liángcǎo】，而是战时的粮草*消耗*速度【--rate|--speed：《pause》sùdù】太【--highest|--very：《adjective》tài】快【--rapid|--to make haste：《pause》kuài】了<br><br>。&%司马迁曾经：“粮草不过，就切记不能和敌方持久战。《break》<br><br>司马迁【--Sima Qian（145-86 BC), Han Dynasty historian:《pause》Sīmǎ Qiān】曾经【--once：《pause》céngjīng】说过：“粮草不够多【--not enough：《pause》bùgòu】，就切记【--remember at all cost：《pause》qièjì】不能和敌方打持久战【--prolonged war|--war of attrition：《pause》chíjiǔzhàn】。”<br><br>《repeat》司马迁曾经：“粮草不过”，就切记不能和敌方持久战。《OUT》“&%Ksu Dormue（苏多姆）：“今天我们的羊肉用盐需要保存。”<br><br>《repeat》今天我们的羊肉【--goat meat|--mutton：《noun》yángròu】用需要保存【--to preserve：《verb》bǎocún】。<br><br>&%Ksu Dormue（苏多姆）：“我们有十天的肉脯、多钱、但没有敷布。如果有人受伤怎么办？”<br><br>《repeat》我们的十天肉脯【--dried meat：《noun》ròufǔ】、多钱【--coins|--money：《noun》qián】、但没有敷布【--medical dressing|--bandage：《noun》qián】。如果【--if|--in case|--in the event：《prep》rúguǒ】有人受伤【--to sustain injuries：《verb》shòushāng】怎么办【--wha't to be done：《interogative》zěnmebàn】？<br><br>",
    //};
    
    //resp_急 = {
        "急性" : "Ksu Dormue（苏多姆）：此伤只急性，可能肋骨在错位。<br>今肋间肌的肿胀，但呼吸的不挫。《break》<br><br>VOCABULARY：<br>伤【--to injure|--injury|--wound：《pause》shāng】；<br>急性【--acute：《pause》jíxìng】；<br>肋骨【--rib：《pause》lèigǔ】；<br>错位【--to misplace|--displacement（e.g. of broken ribs）：《pause》cuòwèi】；<br>肋间肌【--intercostal muscle（between the ribs）：《pause》lèijiànjī】；<br>肿胀【--swelling|--oedema|--internal bruising：《pause》zhǒngzhàng】；<br>呼吸【--to breathe：《pause》hūxī】;<br>挫【--to repress|--to obstruct：《pause》cuò】；<br>Literal：<br>“此【--this：《pause》此】伤【--injury：《pause》伤】急性【--acute：《pause》急性】，可能【--maybe：《pause》可能】肋骨【--rihūxīb：《pause》肋骨】在【--（located）at：《pause》在】错位【--displacement（e.g. of broken ribs）：《pause》错位】。《break》今【--now：《pause》今】肋间急【--intercostal muscle：《pause》肋间肌】的肿胀【--internal bruising：《pause》肿胀】，但【--yet：《pause》但】呼吸【--to breathe：《pause》呼吸】的不【--not|--no：《pause》不】挫【--to obstruct：《pause》挫】。”<br><b>《repeat》此伤只急性，可能肋骨在错位。<br>今肋间肌的肿胀，但呼吸的不挫。《OUT》<br>",
        "危机" : "Common（普通话）：“要有多强大的内心，才能扮演好母亲这个角色。花费那么多心血培养孩子，当看到小朋友卷子上那个大大的叉，心中自是万分难过。<br>她学的不好吗？难的题却是全对。<br>学的很好吗？简单的题却频繁出问题。<br>是我教育的方法不对吗？<br>我是不是该反思一下自己摸方法？<br>此刻我委屈的想哭在进家门前要整理好自己所有的坏情绪，希望小朋友看到的还是一个快乐的母亲”<br><br><span class='tsl' id='insert'>要有多强大【--large|--formidable：《adjective》qiángdà】的内心，才能扮演【--to act：《verb》bànyǎn】好母亲【--mother：《noun》mǔqīn】这个角色【--role：《noun》juésè】。花费【--expense|--cost：《noun》huāfèi】那么多心血【--heart's blood|--meticulous care：《exp》xīnxuè】培养【--to cultivate：《verb》péiyǎng】孩子，当看到小朋友【--child：《noun》xiǎopéngyǒu】卷子【--test paper：《noun》juànzi】上那个大大的叉【--to diverge：《verb》chǎ】，心中自【--self|--oneself：《noun》zì】是万分【--very much|--extremely：《adjective》wànfēn】难过。<br>她学的不好吗？难的题【--topic：《noun》tí】却是【--nevertheless：《prep》quèshì】全对。<br>学的很好吗？简单【--simple|--not complicated：《adjective》iǎndān】的题却频繁【--frequently|--often：《adjective》pínfán】出问题。<br>是我教育【--to educate：《verb》jiàoyù】的方法不对吗？<br>我是不是该反思【--to rethink|--reflection：《verb》fǎnsī】一下自己摸【--to touch|--to abstract：《verb》mō】方法？<br>此刻【--this moment：《prep》cǐkè】我委屈【--to feel wronged：《verb》wěiqu】的想哭【--to cry|--to weep：《verb》kū】在进【--to advance|--to go forward：《verb》jìn】家门前要整理【--to arrange|--to sort out：《verb》zhěnglǐ】好自己所有【--to have|--to possess：《verb》suǒyǒu】的坏【--to break down|--（suffix）to the upmost：《verb》huài】情绪【--mood|--state of mind：《noun》qíngxù】，希望【--to wish for：《verb》xīwàng】小朋友看到的还是【--or|--still|--nevertheless：《prep》háishi】一个快乐【--happy：《adjective》kuàilè】的母亲&%Dawn Yussef（余李明）：“最近自己也获得成绩差在学习，你的问题我理解对于小朋友难。<br>这危机我希望你可以攻克。”<br><br>最近自己也获得【--to obtain|--to receive：《verb》huòdé】成绩【--performance record：《noun》chéngjì】差【--error|--discrepancy：《noun》chā】在学习，你的问题我理解【--to understand|--comprehension：《verb》lǐjiě】对于小朋友难。<br>这危机*【--crisis：《noun》wēijī】我希望你可以攻克【--to overcome：《verb》gōngkè】。</span>",
        "急袭" : "Dawn Yussef（余李明）：“我找你在无可能发现，尝试在来自山 ... 这些道路在生息危险狼。”《break》<br>VOCABULARY：<br>找【--to try to find|--to look for|--to call on：《pause》zhǎo】；<br>尝试【--to try|--to attempt：《pause》chángshì】；<br>生息【--to inhabit|--to live（in a habitat）：《pause》shēngxī】；<br>危险【--dangerous：《pause》wēixiǎn】；<br><br>Literal:我【--I|--me：《pause》我】找【--to call on：《pause》找】你【--you：《pause》你】在无可能【--not able：《pause》：无可能】发现【--to find：《pause》发现】，尝试【--to try：《pause》尝试】来自【--to come from：《pause》来自】山【--mountain：《pause》山】... 这些【--these：《pause》这些】道路【--roads：《pause》道路】在生息【--to inhabit：《pause》生息】危险【--dangerous：《pause》危险】狼【--wolf：《pause》狼】。<br><br>《repeat》我找你在无可能发现，尝试在来自山 ... 这些道路在生息危险狼。",
    //};
    
     
    //resp_救 = {
        "呼救" : "Common（普通话）：”你是来上班吗?“<br><br>《vocab》<br><br>上班【--to start work|--to be on duty：《verb》shàngbān】；<br>&%Ksu Dormue（苏多姆）：这些急袭传闻是真。我们要方话好转，呼救需要这完成。<br><br>《vocab》<br>传闻【--rumor：《noun》chuánwén】；<br>好转【--to improve：《verb》hǎozhuǎn】；<br><br>&%Ksu Dormue（苏多姆）：“请帮助与继续我们的新致力学习阅读中文。”<br><br>《repeat》请帮助与继续我们的新致力【--to devote one's efforts：《verb》zhìlì】继续学习【--to continue|--to proceed:《verb》jìxù】阅读【--to read|--reading：《verb》yuèdú】中文。<br><br>",
    //};
    
    //resp_药 = {
        "良药" : "Ksu Dormue（苏多姆）：我何是不知哪些内部伤的良药一要，尝试泥敷剂和润肺材料。<br><br>《repeat》我何是不知哪些内部伤【--to injure|--injury：《verb》shāng】的良药【--good medicine|--panacea：《noun》liángyào】一要，尝试【--to try|--to attempt：《verb》chángshì】泥敷剂【--poultice：《noun》nífūjì】和润肺【--to moisten the lungs|--expectorate：《noun》rùnfèi】材料。",
        "特效药" : "Dawn Yussef（余李明）：还是一个可以特效药帮助不失为去了，你的复原就完成才是关键。《break》<br><br>还是一个可以特效药帮助不失为去了，你的复原【--to restore to（former）condition|--to recover from illness：《pause》fùyuán】就完成才【--a moment ago|--*（preceded by a clause of condition or reason）：《pause》cái】是关键【--critical point|--pivotal：《pause》guānjiàn】。<br><br>《repeat》还是一个可以特效药帮助不失为去了，你的复原就完成才是关键。",
        "药用价值" : "药补不如食补，常见的10种食物，药用价值很高！有你爱吃的吗？<br>VOCABULARY：<br>药补不如食补【--the benefits of medicine are not as great as those of good nutrition：《pause》药补不如食补】;<br>常见【--commonly seen：《pause》常见】;<br>种【--to cultivate：《pause》种】;<br>*药用价值【--medicinal value：《pause》药用价值】;<br>爱【--to be fond of：《pause》爱】;<br>Literal:<br>“药补不如食补【--the benefits of medicine are not as great as those of good nutrition：《pause》药补不如食补】，常见【--commonly seen：《pause》常见】的10种【--to cultivate：《pause》种】食物【--food：《pause》食物】，*药用价值【--medicinal value：《pause》药用价值】很【--quite：《pause》很】高【--above average：《pause》高】！有【--to exist：《pause》有】你【--you（formal）：《pause》你】爱【--to be fond of：《pause》爱】吃【--to eat：《pause》吃】的吗？”<br><br><a target='_blank' href='https://k.sina.cn/article_3392936314_ca3c197a01900p480.html'>《repeat》药补不如食补，常见10种食物，药用价值很高！有你爱吃的吗？</a>",
        "是药三分毒" : "Common（普通话）：“是要三分毒，因为I恶药物不是一个生存必需的空气、水源、食物，而只是用俩克服疾病用的。”<br><br>《repeat》*是药三分毒｛--every medicine has its side effects：《idiom》shìyàosānfēndú｝，因为药物不是一个人生存【--to survive：《verb》shēngcún】必需【--to need|--essential：《verb》bìxū】的空气【--air|--atmosphere：《noun》kōngqì】、水源【--water source：《noun》shuǐyuán】、食物，而只是用来克服【--to overcome：《verb》kèfú】疾病【--disease：《noun》jíbìng】用的。<br><br>&%Common：“治病需要以毒攻毒吗？”<br><br>《repeat》治病【--to treat an illness：《verb》zhìbìng】需要【--to require：《pause》xūyào】以毒攻毒【--to cure ills with poison：《pause》yǐdúgōngdú】吗?<br><br>《break》“是药三分毒”*【--every medicine has its side effects：《pause》shìyàosānfēndú】的说法【--statement|--one's version of events：《noun》shuōfa】从【--from|--to engage in an activity：《verb》cóng】古【--ancient：《pause》gǔ】至今【--so far|--to this day：《prep》zhìjīn】似乎【--apparently|--as if：《prep》sìhū】已经【--already：《prep》yǐjīng】得到【--to get|--to obtain:《verb》dédào】公认【--publicly known（to be）|--accepted（as）：《adjective》gōngrèn】。<br><br>&%Ksu Dormue（苏多姆）：“我已经很长时间躺在床上感觉好多了。”<br><br>《repeat》我已经很长【--length|--long|--forever：《noun》cháng】时间【--time|--period：《noun》shíjiān】躺【--to recline|--to lie down：《verb》tǎng】在床【--bed（classifier）|--couch：《noun》chuáng】上感觉【--to feel|--to become aware of：《verb》gǎnjué】好多【--much better：《adjective》hǎoduō】了。<br><br>&%Common（普通话）：“说到治病【--to treat an illness：《verb》zhìbìng】用药，我们最常听到一句话【--in short|--in a word：《prep》yījùhuà】，就是“是药三分毒”。对此，我们究竟【--to go to the bottom of a matter|--（interrogative）finally|--outcome：《prep》jiūjìng】该如何理解【--to comprehend|--to understand：《verb》lǐjiě】？<br><br>无论【--regardless|--no matter 《prep》wúlùn】中药和西药【--Western medicine：《noun》xīyào】，药物的作用都与药物的剂量【--dosage|--prescription：《noun》jìliàng】有关【--to relate|--to concern：《verb》yǒuguān】。<br>微小【--minute|--infinitesimal：《adj》wēixiǎo】剂量时，治疗【--to treat（an illness）：《verb》zhìliáo】作用和不良【--bad|--harmful|--unhealthy：《adj》bùliáng】反应【--to react|--to respond：《verb》fǎnyìng】都不存在【--to exist|--to be|--existence：《verb》cúnzài】。<br>合理【--rational|--fair：《adj》hélǐ】的治疗剂量时，发挥【--to display|--to develop（an idea）：《verb》fāhuī】治疗作用，药理学上称之为【--to call it ...|--known as...《prep》chēngzhīwéi】有效【--effective|--in affect：《adj》yǒuxiào】剂量。<br>剂量再【--again|--once more：《prep》zài】往【--to go（in a direction）|--towards：《prep》wǎng】上增加【--to raise|--to increase：《verb》zēngjiā】，到一定【--surely|--certainly：《prep》yīdìng】程度【--degree|--level：《noun》chéngdù】，出现不良反应【--to react|--to respond：《verb》fǎnyìng】，这种时候我们称之为有毒【--poisonous：《adj》yǒudú】剂量。<br>剂量继续【--to continue|--to proceed with：《verb》jìxù】向上【--upward|--to advance|--to make progress：《verb》xiàngshàng】增加，导致死亡【--to result in death：《verb》dǎozhìsǐwáng】，我们称之为致死剂量【--lethal dose：《noun》zhìsǐjìliàng】。<br><br>当一种制剂【--(chemical or pharmaceutical) preparation：《noun》zhìjì】，它的有效【--effective|--valid《adj》yǒuxiào】剂量高于有毒剂量时，我们称之为非【--not，non-，un-|--incorrect|--simply must：《prep》fēi】药品或【--maybe|--perhaps：《prep》huò】毒物。当一种制剂，它的有效剂量低于【--to be lower than：《verb》dīyú】有毒剂量时，才有可能成为药品。药品的有毒剂量与有效剂量的距离【--distance|--to be apart from：《prep》jùlí】称为窗口【--window|--opening providing restricted access：《noun》chuāngkǒu】，这个窗口越【--to exceed|--to climb over：《verb》yuè】大，这个药品越安全。<br>发明药物时，绝大部分【--overwhelming majority：《noun》juédàbùfen】的潜在【--hidden|--potential|--latent：《adj》qiánzài】药物由于【--due to|--as a result|--owing to：《prep》yóuyú】种种不合适【--suitable|--appropriate：《adj》héshì】已经【--already：《prep》yǐjīng】被【--**（indicates passive clause）：《part》bèi】滤过【--to filter：《verb》lǜguò】，剩下【--to remain|--left over：《prep》shèngxià】的极少数【--extremely few|--a small minority：《noun》jíshǎoshù】这个窗口很大的品种，也就是说有毒剂量远远【--distant|--by far：《prep》yuǎnyuǎn】大于有效剂量的品种剩下了。<br><br>之后，又【--（once）again|--both：《prep》yòu】通过多方面【--many-side|--in many aspects：《prep》duōfāngmiàn】、多个环节【--segment（of the body）|--(fig.) a part of integrated whole: aspect（of a project）：《noun》huánjié】的实验室【--laboratory：《noun》shíyànshì】和临床【--clinical：《adj》línchuáng】研究【--research：《noun》yánjiū】、反复【--repeatedly|--unstable|--*（of an illness）to return：《fǎnfù》】验证【--to inspect and verify|--experimental  verification：《verb》yànzhèng】，把效果【--result|--effect：《noun》xiàoguǒ】卓越【--outstanding|--distinguished：《adj》zhuóyuè】、不良反应可接受【--to accept|--to receive：《verb》jiēshòu】的品种最终【--final：《adj》zuìzhōng】选出【--to select|to elect：《verb》xuǎnchū】，成为临床使用的药品。”<br><br><a href=’https://www.cdstm.cn/gallery/media/mkjx/bktmhdsj_3679/201903/t20190310_910646.html‘>https://www.cdstm.cn/gallery/media/mkjx/bktmhdsj_3679/201903/t20190310_910646.html</a>",
    //};
    
    //resp_单 = {
        "单位要" : "...01&%...02&%...03",
        "本草" : "...01&%...02&%...03"
    //};
    };
        
    function inst_Prompt(){
        var sbj_Content = new Array();
        if (typeof(Storage) !== "undefined") {
            sbj_Content[0] = sessionStorage.getItem("ref_0");
            sbj_Content[1] = sessionStorage.getItem("ref_1");
            sbj_Content[2] = sessionStorage.getItem("ref_2");
            sbj_Content[3] = sessionStorage.getItem("ref_3");
            sbj_Content[4] = sessionStorage.getItem("ref_4");
        } else {
            document.getElementById("commandLog").innerHTML += "[...] Browser not supported.";
        }
        
        //var RaN = Math.floor(Math.random() * 5);
        var command = sbj_Content[RaN];
        
        
        try {
            var edit = resp[command];
            var output = edit.split("&%");
            
        } catch(error) {

            inst_ZH = [inst_00, inst_01, inst_02, inst_03, inst_04, inst_05];
            
            var comment = inst_ZH[RaN];
            var output = comment.split("&%");
            var n = output.length;
            var p = Math.floor(Math.random() * n);
            var UDC = output[p];
             
        }
        
        var n = output.length;
        var p = Math.floor(Math.random() * n);
        var sbj = output[p];
        
        if (command in resp) {

            document.getElementById("commandLog").innerHTML = 
            "<li>" + command +"</li>" + sbj +"<br>";
        
        } else {
            document.getElementById("commandLog").innerHTML = "<li>Document not found.</li><br>[...] " + UDC;
        }

    };
    
    break;
        
    case 4:
        
    //UDC (Undeclared Comment)
    inst_00 = "...01&%...02&%...03";
    inst_01 = "...01&%...02&%...03";
    inst_02 = "...01&%...02&%...03";
    inst_03 = "...01&%...02&%...03";
    inst_04 = "...01&%...02&%...03";
    inst_05 = "...01&%...02&%...03";
    
    resp = {
    
    //resp_刀 = {
        "一刀切" : "Ksu Dormue（苏多姆）：我休息不要这时感受很好，保健的不总是一刀切啊。《break》<br><br><span class='tsl' id='insert'>VOCABULARY：<br>休息【--to rest：《pause》xiūxi】；<br>感受【--to experience a feeling：《pause》gǎnshòu】；<br>保健【--health care：《pause》bǎojiàn】；总是【--always：《pause》zǒngshì】<br><br>LITERAL：<br>‘我休息【--to rest：《pause》休息】不要【--not want：《pause》不要】这时【--at this time：《pause》这时】感受【--to experience a feeling：《pause》感受】很好【--very good：《pause》很好】，保健【--health care：《pause》保健】的不总是【--not always：《pause》不总是】一刀切【--one solution fits a diversity of problems：《pause》一刀切】啊。’<br><br>《repeat》我休息不要这时感受很好，保健的不总是一刀切啊。《OUT》<br></span>",
        "小试牛刀" : "Common（普通话）：这人工智能为了中文学习呢。",
        "单刀赴会" : "Ksu Dormue（苏多姆）：“我觅食到在支流的南去，无法发现好狩猎。”<br><br><span class='tsl' id='insert'>《repeat》我觅食【--to forage|--to hunt for food|--fig. to make a living：《verb》mìshí】到在支流【--tributary（river）：《noun》zhīliú】的南【--south：《direction》nán】去，无法【--unable|--incapable：《adjective》wúfǎ】发现好狩猎【--to hunt|--hunting：《noun》shòuliè】</span><br><br>",
        "磨刀霍霍" : "语出《木兰诗》：磨刀霍霍向猪羊。霍霍，磨刀声。今多用以形容敌人加紧活动，用武力威胁。2.指武装起来。《break》<br><br>1.语出《木兰【--:《pause》Mùlán】诗》: 磨刀霍霍向【--to face towards：《pause》xiàng】猪【--pig：《pause》zhū】羊【--sheep|--goat：《pause》yáng】。霍霍，磨刀声【--voice：《pause》shēng】。今多用以形容【--to describe：《pause》xíngróng】敌人【--enemy：《pause》dírén】加紧【--to intensify：《pause》jiājǐn】活动【--to exercise：《pause》huódòng】，用武力【--military force：《pause》wǔlì】威胁【--to threaten：《pause》wēixié】。 2.指【--to indicate：《pause》zhǐ】武装【--arms|--equipment：《pause》wǔzhuāng】起来【--（after verb）indicating the beginning and continuation of an action or a state：《pause》qilai】。<br><br>《repeat》语出《木兰诗》: 磨刀霍霍向猪羊。霍霍，磨刀声今多用以形容敌人加紧活动用武力威胁。2.指武装起来。《OUT》<br>",
    //};
        
    //resp_装 = {
        "厨" : "...01&%...02&%...03",
        "厨子" : "...01&%...02&%...03",
        "储存" : "Common（普通话）：“<a target='_blank' href='https://www.sohu.com/a/360748323_673830?spm=smpc.author.fd-d.13.1593216000060Zw5NOp7'>如何在家中正确储存葡萄酒”</a><br><br>如何在家中正【--fair and honest：《pause》中正】；<br>确【--authenticated|--true：《adjective》zhōngzhèng】*储存｛--stockpile|--to store：《verb》chǔcún｝；<br>葡萄酒【--（grape）wine：《noun》pútaojiǔ】<br><br>&%Ksu Dormue（苏多姆）：“曾经收集羊肉我包它毛皮内、后来它的我做菜了。”<br><br>《repeat》曾经【--once|--already|--previous：《prep》céngjīng】收集羊肉包【--to hold|--to wrap：《verb》bāo】毛皮【--fur|--pelt：《noun》máopí】内、后来它的我做菜【--to cook|--cooking：《verb》zuòcài】了。<br><br>",
        
    //resp_急 = {
        "别着急" : "Dawn Yussef（余李明）：别着急，这不是你的错，更不是大自然的错，我们只是进入了吃饭的倒退期。《break》<br><br>别着急*【--Don't worry:《pause》biézháojí】，这不是你的错【--mistake：《noun》cuò】，更不是大自然【--nature（the natural world）：《pause》dàzìrán】的错，我们只是进入【--to enter|--to join：《pause》jìnrù】了吃饭的倒退【--to fall back|--to go in reverse：《pause》dàotuì】期【--（classifier）a period of time|--phase：《pause》qī】。<br><br>《repeat》别着急，这不是你的错，更不是大自然的错，我们只是进入了吃饭的倒退期。《OUT》<br>&%Dawn Yussef（余李明）：“别着急！我来你的帮助就啊。”<br><br>《repeat》别着急【--don't worry：《idiom》biézháojí】！我来你的帮助就啊<br><br>&%Common（普通话）：“别着急，安心养病。”<br><br>《repeat》别着急，安心养病【--to recuperate：《verb》yǎngbìng】<br><br>&%Common（普通话）：“别着急，我们马上就来。”<br><br>&%Common（普通话）：“别着急，今天下午你就可得到答覆了。”<br><br>别着急，今天下午【--afternoon：《noun》xiàwǔ】你就可得到答覆【--to answer：《verb》dáfù】了。<br><br>",
        "急转直下" : "Dawn Yussef（余李明）：“我担心你的身体急转直下。”<br><br><span class='tsl' id='insert'>《repeat》我但心【--worried|--to be anxious：《verb》dānxīn】你的身体急转直下｛--fig. turn for the worse：《idiom》jízhuǎnzhíxià｝。<br><br>&%Ksu Dormue（苏多姆）：“我认为自己的身体现在好多、明天来我的想继续收集物资。”<br><br>《repeat》我认为【--to believe|--to consider|--to feel：《verb》rènwéi】自己的身体现在【--now|--at present：《prep》xiànzài】好多【--much better：《adjective》hǎoduō】、明天来我的想继续【--to continue：《verb》jìxù】收集物资【--goods|--supplies：《noun》wùzī】</span><br><br>",
        
    //};
    
    //resp_救 = {
        "无可救药" : "Common（普通话）：”她/他真的无药可救了...is like...her/his personality/behavior/...is totally improper and others find it intolerable or cannot help her/him to adjust...不可救药/无可救药 是成语，意思是病情危急，无药可治。常比喻人情事势等败坏到无法挽救。但是”无药可治“不是成语。@Dr.Chad 感觉也可以说：”你怎么总是撒谎，真是无药可救了“吧？<br><br><span class='tsl' id='insert'>“她/他真的无药可救了...is like...her/his personality/behavior/...is totally improper and others find it intolerable or cannot help her/him to adjust...不可救药/无可救药 是成语【--Chinese set expression|--adage：《noun》chéngyǔ】，意思是病情【--state of illness|--patient's condition：《noun》bìngqíng】危急*【--critical|--desperate：《adj》wēijí】，无药可治【--to rule|--to govern：《verb》zhì】。常比喻【--to compare：《verb》bǐyù】人情事势【--state of affairs：《prep》shìshì】等败坏【--to ruin|--to corrupt：《verb》bàihuài】到无法挽救【--incurable|--hopeless：《adj》wúfǎwǎnjiù】。但是”无药可治“不是成语。@Dr.Chad 感觉也可以说：”你怎么总是【--always：《adj》zǒngshì】撒谎【--to tell lies：《verb》sāhuǎng】，真是无药可救了“吧？</span><a target='_blank' href='https://www.italki.com/post/question-145598'>https://www.italki.com/post/question-145598</a>",
        "大补贴" : "...01&%...02&%...03",
    //};
    
    //resp_药 = {
        "对症下药" : "Common（普通话）：“对症下药应对冲击下半场“<br><br>《repeat》CF40：对症下药【--to prescribe the right medicine：《verb》duìzhèngxiàyào】应对【--response：《noun》yìngduì】疫情【--epidemic situation：《pause》yìqíng】冲击【--to attack|--impact：《pause》chōngjī】下半场【--half of a game|--half court：《idiom》bànchǎng】<br><br>货币【--currency：《noun》huòbì】政策【--policy：《noun》zhèngcè】的主要【--main：《pause》zhǔyào】任务【--mission|--assignment：《noun》rènwu】：一是确保【--to ensure：《verb》quèbǎo】市场【--marketplace：《noun》shìchǎng】流动性【--shifting|--liquidity（of funds）：《adjective|prep》liúdòngxìng】充裕【--abundant：《adjective》chōngyù】；二【--two：《number》èr】是防范【--to be on guard：《verb》fángfàn】疫情【--epidemic situation：《noun》yìqíng】可能对广义【--credit：《noun》guǎngyì】信贷【--credit|--borrowed money：《noun》xìndài】 带来【--to bring、--to bring about：《verb》dàilái】的严重【--grave|--serious：《adjective》yánzhòng】负面【--negative：《adjective》fùmiàn】冲击【--to attack：《verb》chōngjī】；三是力争【--to work hard for|--to do all one can：《verb》lìzhēng】让经济【--economy|--economic：《noun》jīngjì】增速【--to speed up：《verb》zēngsù】重回【--to return：《verb》chónghuí】潜在【--hidden|--potential：《pause》qiánzài】经济【--economy：《noun》jīngjì】增速【--to speed up：《verb》zēngsù】。”<a target='_blank' href='http://finance.sina.com.cn/zl/bank/2020-02-24/zl-iimxyqvz5401707.shtml'>CF40：对症下药应对疫情冲击下半场</a><br><br>",
    //};
    
    //resp_草 = {
        "草地" : "...01&%...02&%...03",
        "草甸" : "...01&%...02&%...03",
        "草丛" : "...01&%...02&%...03",
        "牧草" : "...01&%...02&%...03"
    //};
    };
    
    function inst_Prompt(){
        var sbj_Content = new Array();
        if (typeof(Storage) !== "undefined") {
            sbj_Content[0] = sessionStorage.getItem("ref_0");
            sbj_Content[1] = sessionStorage.getItem("ref_1");
            sbj_Content[2] = sessionStorage.getItem("ref_2");
            sbj_Content[3] = sessionStorage.getItem("ref_3");
            sbj_Content[4] = sessionStorage.getItem("ref_4");
        } else {
            document.getElementById("commandLog").innerHTML = "[...] Browser not supported.";
        }
        
        //var RaN = Math.floor(Math.random() * 5);
        var command = sbj_Content[RaN];
        
        
        try {
            var edit = resp[command];
            var output = edit.split("&%");
            
        } catch(error) {

            inst_ZH = [inst_00, inst_01, inst_02, inst_03, inst_04, inst_05];
            
            var comment = inst_ZH[RaN];
            var output = comment.split("&%");
            var n = output.length;
            var p = Math.floor(Math.random() * n);
            var UDC = output[p];
             
        }
        
        var n = output.length;
        var p = Math.floor(Math.random() * n);
        var sbj = output[p];
        
        if (command in resp) {

            document.getElementById("commandLog").innerHTML = 
            "<li>" + command +"</li>" + sbj +"<br>";
        
        } else {
            document.getElementById("commandLog").innerHTML = "<li>Document not found.</li><br>[...] " + UDC;
        }

    };
    //clear.sessionStorage();
}

/*function verbose刀(ZHiter){
    this.ZHiter = ZHiter;
};
        
verbose刀.prototype.compile_ZHiter = function() {
    var allocate = this.ZHiter;
    var output = allocate.split("&%");
    var n = output.length;
    var p = Math.floor(Math.random() * n);
    var sbj = output[p];
    return sbj;
};*/


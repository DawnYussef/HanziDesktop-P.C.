    const keyword_i = new Array();
    const result_i = new Array();

    const data_i = new Array();
    const glossary_i = new Array();
    
    //(Settings): Language
    const data_ZHi = new Array();

/*
Average length of words (English) = 4.7
Average number of EN meanings (Kanji) = 15
Total Kanji characters = 2600 = 7800 bytes >> 7.8KB

//Size (memory) linguistic database = 183300 + 7800 >> 191100 bytes >> 19.11 KB
290 Mbps (Internet)
Size (memory) = 1.5288 Mb
0.00527172413793 sec. response
1.5288 sec response + function [...]() processing.

Transmission over internet.
1.8 GHz

//word_Database access log for code testing purposes ONLY - Integrate.
*/


function accessData_i(){
    var pointer = 0;
    function reference(汉字_ref, EN_ref) {
        this.汉字_ref = 汉字_ref;
        this.EN_ref = EN_ref;
   
    };
    
    reference.prototype.compile_EN = function() {
        
        var allocate = this.EN_ref;
        var output = allocate.split("&%00");
        return output;
        
    };
    
    reference.prototype.compile_ZH = function() {
        var output = this.汉字_ref;
        return output;
    };
        
    function vocab(define, noun, prep, dir, adv, spatial) {
        this.id = define; //(tangorin.com) Example Words.
        this.の = noun;
        this.に = prep; //(verb) Intransitive.
        this.を = dir; //(verb) Transitive.
        this.で = adv;
        this.へ = spatial; //Location(s).

    };
    
    vocab.prototype.assn_Document = function(){
        var allocate_Pos = this.の;
        var output = allocate_Pos.split("&%00");
        return output;

    };
    
    var topic_Ctx = new Array();
    vocab.prototype.assn_Reference = function(){
            
        switch(pointer) {
        
        case 0:
        pointer++;
        //document.getElementById("toolbar").innerHTML = "";
     
        var allocate_Pos = this.の;
        output = allocate_Pos.split("&%00");
        
        var n = output.length;
        var p = Math.floor(Math.random() * n);
        var read_me = output[p]
        var id = read_me.indexOf("「");
        var subject = read_me.slice(0, id);

            
        var btn = document.createElement("LI");
        btn.innerHTML=  " 搜索: search/n_" + output[p];
        document.getElementById("button_Case0").appendChild(btn);
        document.getElementById("button_Case0").addEventListener("click", pos_Search);
  
        
        function pos_Search(){
            var source = "https://www.google.com/search?q=怎么”" + subject + "“是？";
            var media = window.open(source, "_blank", "toolbar=yes, location= yes, directories=yes, status=yes, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=765, height=865");
            
            media.moveTo(600,0); 
            location.reload();
            
        };
        
        /*document.getElementById("search_Case0").innerHTML += 
            "<br>**Possessive:<br>" + output[p];*/
        
        break;
        
        case 1:
        pointer++
        var allocate_Prep = this.に;
        output = allocate_Prep.split("&%01");
        var n = output.length;
        var p = Math.floor(Math.random() * n);
        
        var read_me = output[p]
        var id = read_me.indexOf("「");
        var subject = read_me.slice(0, id);

        
        var btn = document.createElement("LI");
        btn.innerHTML= " 搜索: search/p_" + output[p];
        document.getElementById("button_Case1").appendChild(btn);
        document.getElementById("button_Case1").addEventListener("click", prep_Search);
        
        function prep_Search(){
            var source = 
            "https://www.google.com/search?q=哪里”" + subject + "“在？";
            var media = window.open(source, "_blank", "toolbar=yes, location= yes, directories=yes, status=yes, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=765, height=865");
            
            media.moveTo(600,0);
            location.reload();
        };
        
        /*document.getElementById("search_Case1").innerHTML += 
            "<br>**Preposition:<br>" + output[p];*/
        
        break;
        
        case 2:
        pointer++
        var allocate_Obj = this.を;
        output = allocate_Obj.split("&%02");
        var n = output.length;
        var p = Math.floor(Math.random() * n);
        
        var read_me = output[p]
        var id = read_me.indexOf("「");
        var subject = read_me.slice(0, id);

        
        var btn = document.createElement("LI");
        btn.innerHTML= " 搜索: search/o_" + output[p];
        document.getElementById("button_Case2").appendChild(btn);
        document.getElementById("button_Case2").addEventListener("click", prep_Search);
        
        function obj_Search(){
            var source = 
            "https://www.google.com/search?q=”" + subject + "“怎么做？";
            var media = window.open(source, "_blank", "toolbar=yes, location= yes, directories=yes, status=yes, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=765, height=865");
            
            media.moveTo(600,0);
            location.reload();
        };
        
        /*document.getElementById("search_Case2").innerHTML += 
            "<br>**Object:<br>" + output[p];*/
        
        break;
        
        case 3:
        pointer++
        var allocate_Ctx = this.で;
        output = allocate_Ctx.split("&%03");
        var n = output.length;
        var p = Math.floor(Math.random() * n);
        
        var read_me = output[p]
        var id = read_me.indexOf("「");
        var subject = read_me.slice(0, id);
        
        
        var btn = document.createElement("LI");
        btn.innerHTML= " 搜索: search/c_" + output[p];
        document.getElementById("button_Case3").appendChild(btn);
        document.getElementById("button_Case3").addEventListener("click", prep_Search);
        
        function ctx_Search(){
            var source = 
            "https://www.google.com/search?q=如何”" + subject + "“与哪里？";
            var media = window.open(source, "_blank", "toolbar=yes, location= yes, directories=yes, status=yes, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=765, height=865");
            
            media.moveTo(600,0);
            location.reload();
        };
        
        /*document.getElementById("search_Case3").innerHTML += 
            "<br>**Context:<br>" + output[p];*/
        
        break;
        
        case 4:
        var allocate_Dir= this.へ;
        output = allocate_Dir.split("&%04");
        var n = output.length;
        var p = Math.floor(Math.random() * n);
        
        var read_me = output[p]
        var id = read_me.indexOf("「");
        var subject = read_me.slice(0, id);
        
        var btn = document.createElement("LI");
        btn.innerHTML= " 搜索: search/d_" + output[p];
        document.getElementById("button_Case4").appendChild(btn);
        document.getElementById("button_Case4").addEventListener("click", prep_Search);
        
        function dir_Search(){
            var source = 
            "https://www.google.com/search?q=什么时候与哪里“" + subject + "“在？";
            var media = window.open(source, "_blank", "toolbar=yes, location= yes, directories=yes, status=yes, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=765, height=865");
            
            media.moveTo(600,0);
            location.reload();
        };
        
        /*document.getElementById("search_Case4").innerHTML += 
            "<br>**Direction:<br>" + output[p];*/
        
        }
        
        var chat = topic_Ctx.push(subject);
        if (typeof(Storage) !== "undefined"){
            sessionStorage.setItem("ref_0", topic_Ctx[0]);
            sessionStorage.setItem("ref_1", topic_Ctx[1]);
            sessionStorage.setItem("ref_2", topic_Ctx[2]);
            sessionStorage.setItem("ref_3", topic_Ctx[3]);
            sessionStorage.setItem("ref_4", topic_Ctx[4]);
                
        } else {
            document.getElementById("log").innerHTML = "Browser not supported.";
        } 
        
        console.log(topic_Ctx);
    }; 
    
    
    
    var 刀 = new reference (
        "<hr>刀・（¨dāo¨）<br>-｜EN. <br>knife | blade | single-edge sword | cutlass | classifier for blade cuts or stab wounds<br>-END<br><a href='https://www.mdbg.net/chinese/dictionary?wdqb=c:*刀*'target='_blank'>www.mdbg.net/chinese/dictionary?</a><hr>",
        "knife&%00blade&%00sigle-edge sword&%00cutlass&%00classifier&%00"
        
    );

    var vocab_刀ZH = new vocab("刀",
    
/*.pos -&%00*/"刀子「dāozi」|EN (n.)|<br>-1. knife;<br>&%00磨刀石「módāoshí」|EN (n.)|<br>-1. whetstone (for honing knives);<br>&%00刀鞘「dāoqiào」|EN (n.)|<br>-1. scabbard;<br> &%00军刀「jūndāo」|EN (n.)|<br>--¨saber¨ | miliary dagger;<br>&%00刀枪「dāoqiāng」|EN (n.)|<br>--sowrd and spear | ¨weapons¨;<br>&%00尖刀「jiāndāo」|EN (n.)|<br>--dagger;<br>&%00大刀「dàdāo」|EN (n.)|<br>--¨broadsword¨ | machete;<br>",

/*.prep-&%01*/"宝刀不老「bǎodāobùlǎo」|EN (exp. / v.)|<br>--¨a good sword always remains sharp (idiom)¨; to be as good as ever;<br>&%01变炖「biàndùn」|EN (v.)|<br>--to become blunt;<br>&%01碎「suì」|EN (v.)|<br>--¨to break down¨; to break into pieces; fragmentary;<br>",

/*.obj -&%02*/"磨刀「módāo」|EN (v.)|<br>--to hone (a knife);&%02刀刺「dāocì」|EN (v.)|<br>--to stab | to attack with blade;<br>&%02严厉打击「yánlìdǎjī」|EN (v.)|<br>--to strike a severe blow; ¨to take strong measures¨;<br>",

/*.ctx -&%03*/"刀口「dāokǒu」|EN (n.)|<br>--¨cut¨ | ¨incision¨ | edge of a knife;<br>&%03刀疤「dāobā」|EN (n.)|<br>--scar from a knife wound;<br>&%03刀刃「dāorèn」|EN (n.)|<br>--crucial point;<br>&%03刀锋「dāofēng」|EN (n.)|<br>-1. cutting edge or point of a knife;<br>-2. sword or tool;<br>&%03锋利「fēnglì」|EN (adj.)|<br>--¨sharp（e.g. knife blade)¨ | ¨incisive¨ | to the point;<br>&%03武器「wǔqì」|EN (n.)|<br>-- ¨weapon¨ | ¨arms¨ ;<br>",

/*.dir -&%04*/"一刀切「yīdāoqiē」|EN (n.)|<br>--*lit. ¨to cut all in one stroke (idoim)¨ | to impose uniformity | one solution fits a diversy of problems<br>&%04小试牛刀「xiǎoshìniúdāo」|EN (n.)|<br>--to give a demonstration of one's impresive skills (idiom);<br>&%04单刀赴会「dāndāofùhuì」|EN (n.)|<br>--*lit. “to go among enemies with only one's sword (idiom)” | fig. ¨to go alone into enemy lines¨;<br>&%04磨刀霍霍「módāohuòhuò」|EN (n.)|<br>--*lit. ¨to sharpen one's sword (idiom)¨ | fig. to prepare for attack | ”to be ready for battle“;<br>"

    );
    
    var 刀EN_doc = vocab_刀ZH;
    glossary_i[0] = 刀EN_doc;
    
    var 刀EN_ref = 刀.compile_EN();
    data_i[0] = 刀EN_ref;
    
    var 刀ZH_ref = 刀.compile_ZH();
    data_ZHi[0] = 刀ZH_ref;    
    
    
    
    var 装 = new reference( //data[1]
        "<hr>装 ・（¨zhuāng¨）<br>-｜EN. <br>dress | clothes | attire | fill<br>-END<br><a href='https://www.mdbg.net/chinese/dictionary?wdqb=c:*装*' target='_blank'>www.mdbg.net/chinese/dictionary?</a><hr>",
        "dress&%00clothes&%00attire&%00fill"

    );
   
    var vocab_装ZH = new vocab("装", //data[1]
/*.pos -&%00*/"装「zhuāng」|EN (n. / v.)|<br>--¨adornment¨ | ¨to adorn¨ | dress | clothing | costume (of an actor) | to play a role | to pretend | to install | to fix | to wrap (in bag, etc.) | ¨to load¨ | ¨to pack¨;<br>&%00服装「fúzhuāng」|EN (n.)|<br>--¨dress¨ | ¨clothing¨ | costume | clothes;<br>&%00套装「tàozhuāng」|EN (n.)|<br>--outfit or suit (of clothes) | ¨set of coordinated items¨ | ¨kit¨;<br>&%00领「lǐng」|EN (n.)|<br>-1. “classifier for clothes”;<br>|EN (v.)|-2. to lead | to receive;<br>also: 衣领 -（yīlǐng）= neck | ¨collar¨;<br>&%00选装「xuǎnzhuāng」|EN (n.)|<br>--¨optional (equipment)¨;&%00布料「bùliào」|EN (n.)|<br>--¨cloth¨ | “material”;<br>",

/*.prep-&%01*/"消磨「xiāomó」|EN (v.)|<br>--“wear down”<br>&%01保暖「bǎonuǎn」|EN (v.)|<br>--to protect against the cold; to stay warm;<br>",

/*.obj -&%02*/"衣「yì」|EN (v.)|<br>-- ¨to dress¨ | to wear | ¨to put on (clothes)¨;<br>&%02着「zhuó」|EN (v.)|<br>-1. “wear (clothes)” | “contact” | “use” | ”apply“;<br>&%02穿「chuān」|EN (v.)|<br>--¨wear¨ | put on;<br>&%02送「sòng」|EN (v.)|<br>-1. “to deliver” | “to give (as a present)” | “to present (with)”;<br>-2. to see off | to send;<br>",

/*.ctx -&%03*/"撞衫「zhuàngshān」|EN (v.)|<br>--“wear the same outfit (in public)”;<br>&%03装有「zhuāngyǒu」|EN (adj.)|<br>--“fitted with”<br>&%03上装「shàngzhuāng」|EN (n.)|<br>--”upper garment“<br>&%03下装「xiàzhuāng」|EN (v. / n.)|<br>--to take off (costume, makeup, etc.) | “bottom garment (trousers etc.)“;<br>&%03皮草「pícǎo」|EN (n.)|<br>--fur clothing;<br>",

/*.dir -&%04*/"厨「chú」|EN (n.)|<br>--“wardrobe” | “closet” | “cabinet”;<br>also: 厨子 -（chúzi）<br>&%04储存「chǔcún」|EN (n. / v.)|<br>--“storage”, to storage | “stockpile”, to stockpile;<br>"
    );    

    var 装EN_doc = vocab_装ZH;
    glossary_i[1] = 装EN_doc;
    
    var 装EN_ref = 装.compile_EN();
    data_i[1] = 装EN_ref;
    
    
    var 装ZH_ref = 装.compile_ZH();
    data_ZHi[1] = 装ZH_ref
    
    
    
    var 备 = new reference( //data[2]
    
        "<hr>备 ・（¨bèi¨）<br>-｜EN. <br>prepare | ready | perfect<br>-END<br><a href='https://www.mdbg.net/chinese/dictionary?wdqb=c:*备*' target='_blank'>www.mdbg.net/chinese/dictionary?</a><hr>",
        "prepare&%00ready&%00perfect"

    );
    
    var vocab_备ZH = new vocab("备",
/*.pos -&%00*/"清册「qīngcè」|EN (n.)|<br>--¨detailed list¨ | ¨inventory¨;<br>",

/*.prep-&%01*/"筹备「chóubèi」|EN (n. / v.)|<br>--¨preparations¨ | ¨to get ready (for an event)¨;<br>&%01戒备「jièbèi」|EN (v.)|<br>--¨to take precautions¨ | ¨to guard against (emergency)¨;<br>",

/*.obj -&%02*/"&%02",

/*.ctx -&%03*/"粮草「liángcǎo」|EN (v.)|<br>--¨provisions (military)¨ | ¨rations¨;",

/*.dir -&%04*/"&%04"
    );

    var 备EN_doc = vocab_备ZH;
    glossary_i[2] = 备EN_doc;
    
    var 备EN_ref = 备.compile_EN();
    data_i[2] = 备EN_ref;
    
    var 备ZH_ref = 备.compile_ZH();
    data_ZHi[2] = 备ZH_ref;
    
    var 急 = new reference (
        "<hr>急 ・（¨jí¨）<br>-｜EN. <br>urgent | pressing | rapid | hurried | to make (somebody) anxious<br>-END<br><a href='https://www.mdbg.net/chinese/dictionary?wdqb=c:*急*' target='_blank'>www.mdbg.net/chinese/dictionary?</a><hr>",
        "urgent&%00pressing&%00rapid&%00rapid&%00hurried&%00anxiety",
);
//Resume formatting --¨INTL¨
   var vocab_急ZH = new vocab("急", //data[3]
/*.pos -&%00*/"急「jí」|EN (adj. / v.)|<br>-1. “urgent” | pressing | rapid | hurried | anxious;<br>-2. “to make (somebody) anxious”;<br><br>&%00紧急「jǐnjí」|EN (adj. / n.)|<br>-1. “urgent” | “emergency”;<br>&%00急症「jízhèng」|EN (n.)|<br>--“acute disease” |--medical emergency;<br>&%00急务「jíwù」|EN (n.)|<br>--“urgent task” |--“pressing matter”;<br>",
    
/*.prep-&%01*/"应急「yìngjí」|EN (v.)|<br>-1. “to respond to an emergency” | to meet a contingency | (attributive) emergency;<br>&%01加急「jiājí」|EN (adj. / v.)|<br>-1. to become more urgent / “to handle a matter urgently”;<br>-2. more rapid | urgent;<br>&%01急待「jídài」|EN (v.)|<br>-1. “to need urgently” | “to need doing without delay”;<br>",

/*.obj -&%02*/"&%02",

/*.ctx -&%03*/"急性「jíxìng」|EN (adj.)|<br>-1. ”acute“;<br>&%03危机「wēijí」|EN (adj.)|<br>-1. ”critical“ | desperate (situation);<br>&%03急难「jínàn」|EN (n. / v.)|<br>-1. misfortune | “crisis” | “grave danger” | “critical situation” | disaster | emergency;<br>-2. “to be zealous in helping others (predicament)”;<br>&%03急袭「jíxí」|EN (n.)|<br>-1. ”sudden attack“;<br>",

/*.dir -&%04*/"别着急「biézháojí」|EN (excl.)|<br>-1. ”Don't worry!“;<br>&%04急转直下「jízhuǎnzhíxià」|EN (v.)|<br>-1. to develop rapidly after abrupt turn (idiom); “dramatic change”;<br>"
    );

    var 急EN_doc = vocab_急ZH;
    glossary_i[3] = 急EN_doc;
    
    var 急EN_ref = 急.compile_EN();
    data_i[3] = 急EN_ref;
    
    var 急ZH_ref = 急.compile_ZH();
    data_ZHi[3] = 急ZH_ref;

    var 救 = new reference ( //data[4]
        "<hr>救 ・（¨jiù¨）<br>-｜EN. <br>to save | to assist <br>-END<br><a href='https://www.mdbg.net/chinese/dictionary?wdqb=c:*救*' target='_blank'>www.mdbg.net/chinese/dictionary?</a><hr>",
        "save&%00assist"
    );

    var vocab_救ZH = new vocab("救",
/*.pos -&%00*/"急救箱「jíjiùxiāng」|EN (n.)|<br>-1. ”first-aid kit“;<br>&%00泥敷剂「nífūjì」|EN (n.)|<br>-1. poultice;<br>&%00解药「jiěyào」|EN (n.)|<br>-1. antidote;<br>&%00滋补品「zībǔpǐn」|EN (n.)|<br>-1. “tonic” | “invigorant”;<br>&%00绷带「bēngdài」|EN (n.)|<br>-1. “bandage (loanword)”;<br>&%00敷布「fūbù」|EN (n.)|<br>-1. “medical dressing” | bandage;<br>&%00橡皮膏「xiàngpígāo」|EN (n.)|<br>-1. “adhesive bandage”;<br>",

/*.prep-&%01*/"救「jiù」|EN (v.)|<br>-1. “to save” | “to assist” | “to rescue”;<br>&%01解救「jiějiù」|EN (v.)|<br>-1. to rescue | “to help out of difficulties” | “to save the situation”;<br>&%01救护「jiùhù」|EN (v.)|<br>-1. to rescue | “to administer first aid”;<br>&%01救治「jiùzhì」|EN (v.)|<br>-1. ”to provide critical care (to patient)“;<br>",

/*.obj -&%02*/"济急「jìjí」|EN (v.)|<br>-1. “to give relief (material)”;<br>&%02援救「yuánjiù」|EN (v.)|<br>-1. “to come to the aid of” | “to save” | “to resuce from danger” | ”to relieve“;<br>",

/*.ctx -&%03*/"无可救药「wúkějiùyào」|EN (adj.)|<br>-1. “no antidote is possible (idiom)” | “incurable” | incorrigible | beyond redemption;<br>&%03大补贴「dàbǔtiě」|EN (adj.)|<br>-1. tonic | “healthy concoction” | “(fig.) doctor ordered” | *pirated software;<br>",

/*.dir -&%04*/"呼救「hūjiù」|EN (v.)|<br>-1. to call for help;<br>&%04"
    );
    
    var 救EN_doc = vocab_救ZH;
    glossary_i[4] = 救EN_doc;
    
    var 救EN_ref = 救.compile_EN();
    data_i[4] = 救EN_ref;
    
    var 救ZH_ref = 救.compile_ZH();
    data_ZHi[4] = 救ZH_ref;

    var 药 = new reference ( //data[5]
        "<hr>药 ・（¨yào¨）<br>-｜EN. <br> | medicine | drug | substance used for a specific purpose (e.g. poisoning, explosion, fermenting) <br>-END<br><a href='https://www.mdbg.net/chinese/dictionary?wdqb=c:*药*' target='_blank'>www.mdbg.net/chinese/dictionary?</a><hr>",
        "medicine&%00drug&%00useful substance"
    );

    var vocab_药ZH = new vocab("药",
/*.pos -&%00*/"膏药「gāoyao」|EN (n.)|<br>-1. herbal plaster applied to a wound;<br>&%00药膏「yàogāo」|EN (n.)|<br>-1. ointment;<br>&%00火药「huǒyào」|EN (n.)|<br>-1. gunpowder;<br>&%00炸药「zhàyào」|EN (n.)|<br>-1. explosive material;<br>&%00医药「yīyào」|EN (n.)|<br>-1. medical care and medicines | (medicine (drug) | medical | pharmacuetical;<br>&%00药品「yàopǐn」|EN (n.)|<br>-1. medicaments | medicine | drug;<br>&%00药水「yàoshuǐ」|EN (n.)|<br>-1. medicine in liquid form | bottled medicine | lotion;<br>&%00眼药「yǎnyào」|EN (n.)|<br>-1. eye drops | eye ointment;<br>&%00药材「yàocái」|EN (n.)|<br>-1. medical ingredient;<br>&%00解药「jiěyào」|EN (n.)|<br>-1. antidote;<br>&%00毒药「dúyào」|EN (n.)|<br>-1. poison;<br>&%00药瓶「yàopíng」|EN (n.)|<br>-1. medicine bottle;<br>",

/*.prep-&%01*/"&%01",

/*.obj -&%02*/"吃药「chīyào」|EN (n.)|<br>-1. to take medicine;<br>&%02制药「zhìyào」|EN (n.)|<br>-1. to manufacture medicine;<br>&%02服药「fúyào」|EN (n.)|<br>-1. to take medicine; --- <br> 入药「rùyào」|EN (n.)|<br>-1. to use a medicine; --- <br> 开药「kāiyào」|EN (n.)|<br>-1. to perscribe medicine;<br>",

/*.ctx -&%03*/"良药「liángyào」|EN (n.)|<br>-1. good medicine | panacea | fig. a good solution | a good remedy (e.g. to a social problem);<br>&%03特效药「tèxiàoyào」|EN (n.)|<br>-1. effective medicine for a specific condition | highly effective medicine;<br>&%03药用价值「yàoyòngjiàzhí」|EN (n.)|<br>-1. medicinal value;<br>&%03是药三分毒「shìyàosānfēndú」|EN (n.)|<br>-1. every medicine hase its side effects (idiom);<br>",

/*.dir -&%04*/"对症下药「duìzhèngxiàyào」|EN (n.)|<br>-1. lit. to prescribe the right medicine for an illness (idiom); fig. to study a problem to find the right way to solve it | to take approriate steps<br>"
    );

    var 药EN_doc = vocab_药ZH;
    glossary_i[5] = 药EN_doc;
    
    var 药EN_ref = 药.compile_EN();
    data_i[5] = 药EN_ref;
    
    var 药ZH_ref = 药.compile_ZH();
    data_ZHi[5] = 药ZH_ref;
    
    var 草 = new reference ( //bug-fix
        "<hr>草・（¨cǎo¨）<br>-｜EN. <br> | grass | straw | manuscript | draft (of a document) | careless <br>-END<br><a href='https://www.mdbg.net/chinese/dictionary?wdqb=c:*草*' target='_blank'>www.mdbg.net/chinese/dictionary?</a><hr>",
        "grass&%00straw&%00manuscript&%00draft (of a document)&%00careless"
    );

    var vocab_草ZH = new vocab("草",
/*.pos -&%00*/"花药「huāyào」|EN (n.)|<br>-1. anther (pollen storage on stamen)<br>&%00草根「cǎogēn」|EN (n.)|<br>-1. grass roots<br>&%00薰衣草「xūnyīcǎo」|EN (n.)|<br>-1. lanvander<br>",

/*.prep-&%01*/"&%01",
/*.obj -&%02*/"&%02",

/*.ctx -&%03*/"单位要「dānwèiyào」|EN (n.)|<br>-1. medicine made from a single herb | drug made form a single substance;<br>&%03本草「běncǎo」|EN (n.)|<br>-1. a book on Chinese (herbal) medicine | Chinese materia medica;<br>",

/*.dir -&%04*/"草地「cǎodì」|EN (n.)|<br>-1. “lawn” | meadow | “sod” | “turf”;<br>&%04草甸「cǎodiàn」|EN (n.)|<br>-1. ”meadow“<br>&%04草丛「cǎocóng」|EN (n.)|<br>-1. “underbrush”<br>&%04牧草「mùcǎo」|EN (n.)|<br>-1. ”pasture“ | “forage grass” | pasturage<br>"
    );

    var 草EN_doc = vocab_草ZH;
    glossary_i[6] = 草EN_doc;
    
    var 草EN_ref = 草.compile_EN();
    data_i[6] = 草EN_ref;
    
    var 草ZH_ref = 草.compile_ZH();
    data_ZHi[6] = 草ZH_ref;    
         

    function list(array, index){
        var n = 0;
        const comma = ",";
         
        try {
            var subject = array[index];//bug-fix
            subject.toString();
            
            for (n=0; n < array.length; n++){
                subject.split(comma);
                keyword_i.push(subject);
            }
            
        } catch (sbj){  
            document.getElementById("log").innerHTML = 
            "Exception" + sbj;
            
        }
        

    };
    
    
    
    function print(column){
        var n = ["刀", "装" , "备", "急", "救", "药"];//Primary Key (PK) list.
        var p = 0;

        var id = document.getElementById("user-input").value;
        var selection = id.toString();
        var scan = n.indexOf(selection);//漢字_ref
        //var title = n[scan].toString(); /*bug-fix*/
        var catalog =　list(column[scan], 0);
        var definition = list(data_i[0], scan);
        
        try {
            var ledger = glossary_i[scan];
            for (p=0; p < 5/*case/switch.legnth*/; p++) {
                ledger.assn_Reference();
                //document.getElementById("language").innerHTML += "<strong>Words Containing ¨" + title + "</strong>¨:<br><br>" + ledger.assn_Document(); + "<hr>";    
            }
            
        } catch (prep){
            document.getElementById("log").innerHTML = 
            "Exception" + prep;
            
        }
        
        if (scan != -1){
            document.getElementById("commandLog").innerHTML="";   
        } else {
            document.getElementById("log").innerHTML= 
            "[...] Document not found.";
        }
        
        document.getElementById("language").innerHTML += data_ZHi[scan];

        document.getElementById("user-input").value= "";
        document.getElementById("output").innerHTML= "✕";
        
    };
    
    print(data_i, 0);

}

function chat_Response() {
    
    
    var id_Prompt = document.getElementById("userPrompt").value;
    var str_Prompt = id_Prompt.toString();
    
    
    
    var iter = data_i.toString();
    const comma = ",";
    const keyword_i = iter.split(comma);
    for (pointer = 0; pointer < keyword_i.length; pointer++){
        var pattern_EN = new RegExp(keyword_i[pointer], "g");
         
        var req = pattern_EN.exec(id_Prompt);
        /*<--INSERT '//' to hide FULL result(s):/!\*/ console.log(req + "<break>");
    
    }
    
    /*<--RELEASE to review FULL database:/!\*/ console.log(iter);

}

function chat_Translate() { 
    var id_Prompt = document.getElementById("userPrompt").value;
    var phrase = id_Prompt.toString(); 
    var i;
    //var langZH_mod = new Array();
    var langZH_mod = phrase.split("--|");
    document.getElementById("console").innerHTML = "";
    for (i = 0; i < langZH_mod.length; i++) {
        //var langZH_mod = new Array();
        
        var vocab = langZH_mod[i].toString();
        var n = vocab.indexOf("#"); 
        var result = vocab.substr(n, vocab.length);
        var link = vocab.substr(n + 1, vocab.length);
        document.getElementById("console").innerHTML += "<a target='dictionary' href='https://www.mdbg.net/chinese/dictionary?page=worddict&wdrst=0&wdqb=" + link + "'>" + result + "</a><br>";
    }
    
    /*var source = "https://translate.yandex.com/?lang=en-zh&text=" + result;
        var media = window.open(source, "_blank", "toolbar=yes, location= yes, directories=yes, status=yes, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=765, height=865");
        
        media.moveTo(600,0);*/
        
    //langZH_mod.push(parse);
   
    /*do { 
        var n = phrase.indexOf("#") + 1;
        var p = phrase.indexOf("@");
        var iter = phrase.substring(n, p);
        var langZH = new Array();
        langZH.push(iter);
        
        //break;
        var remainder = phrase.slice(p + 1 , phrase.length);
        
        var mod_N = remainder.indexOf("#") + 1;
        var mod_P = remainder.indexOf("@");
        var iter  = remainder.substring(mod_N, mod_P);
        langZH.push(iter);
        
        
    } while (remainder.length<=0);*/ 
    
    //#help@我不可以#remember@什么词汇使用#for@#remember@
    //https://translate.yandex.com/?lang=en-zh&text=
    //var output = langZH.toString();
    
    //console.log(langZH);
    
    console.log(langZH_mod);
}



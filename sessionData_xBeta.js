    const keyword = new Array();
    const result = new Array();

    const data = new Array();
    const glossary = new Array();
    
    //(Settings): Language
    const data_ZH = new Array();

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


function accessData(){
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
    
    
    
    var 一 = new reference (
        "<hr>#・（¨pīnyīn¨）<br>-｜EN. <br># | #<br>-END<br><a href='https://www.mdbg.net/chinese/dictionary?wdqb=c:*#*'target='_blank'>www.mdbg.net/chinese/dictionary?</a><hr>",
        "EN_vocab&%00EN_vocab"
        
    );

    var vocab_一ZH = new vocab("#",
    
/*.pos -&%00*/"#「pīnyīn」|EN (Part_of_Speech.)|<br>-1. # | #;<br>&%00#「pīnyīn」|EN (Part_of_Speech.)|<br>-1. # | #;<br>",

/*.prep-&%01*/"#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>&%01#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>",

/*.obj -&%02*/"#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>&%02#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>",

/*.ctx -&%03*/"#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>&%03#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>",

/*.dir -&%04*/"#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>&%04#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>"

    );
    
    var 一EN_doc = vocab_一ZH;
    glossary[0] = 一EN_doc;
    
    var 一EN_ref = 一.compile_EN();
    data[0] = 一EN_ref;
    
    var 一ZH_ref = 一.compile_ZH();
    data_ZH[0] = 一ZH_ref;    
    
 //break;   
    
    var 二 = new reference (
        "<hr>#・（¨pīnyīn¨）<br>-｜EN. <br># | #<br>-END<br><a href='https://www.mdbg.net/chinese/dictionary?wdqb=c:*#*'target='_blank'>www.mdbg.net/chinese/dictionary?</a><hr>",
        "EN_vocab&%00EN_vocab"

    );
   
    var vocab_二ZH = new vocab("#",
    
/*.pos -&%00*/"#「pīnyīn」|EN (Part_of_Speech.)|<br>-1. # | #;<br>&%00#「pīnyīn」|EN (Part_of_Speech.)|<br>-1. # | #;<br>",

/*.prep-&%01*/"#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>&%01#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>",

/*.obj -&%02*/"#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>&%02#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>",

/*.ctx -&%03*/"#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>&%03#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>",

/*.dir -&%04*/"#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>&%04#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>"

    );    

    var 二EN_doc = vocab_二ZH;
    glossary[1] = 二EN_doc;
    
    var 二EN_ref = 二.compile_EN();
    data[1] = 二EN_ref;
    
    var 二ZH_ref = 二.compile_ZH();
    data_ZH[1] = 二ZH_ref;    

//break;
    var 三 = new reference (
        "<hr>#・（¨pīnyīn¨）<br>-｜EN. <br># | #<br>-END<br><a href='https://www.mdbg.net/chinese/dictionary?wdqb=c:*#*'target='_blank'>www.mdbg.net/chinese/dictionary?</a><hr>",
        "EN_vocab&%00EN_vocab"

    );
    
    var vocab_三ZH = new vocab("#",
    
/*.pos -&%00*/"#「pīnyīn」|EN (Part_of_Speech.)|<br>-1. # | #;<br>&%00#「pīnyīn」|EN (Part_of_Speech.)|<br>-1. # | #;<br>",

/*.prep-&%01*/"#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>&%01#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>",

/*.obj -&%02*/"#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>&%02#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>",

/*.ctx -&%03*/"#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>&%03#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>",

/*.dir -&%04*/"#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>&%04#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>"

    );    

    var 三EN_doc = vocab_三ZH;
    glossary[2] = 三EN_doc;
    
    var 三EN_ref = 三.compile_EN();
    data[2] = 三EN_ref;
    
    var 三ZH_ref = 三.compile_ZH();
    data_ZH[2] = 三ZH_ref;    

//break;

     var 四 = new reference (
        "<hr>#・（¨pīnyīn¨）<br>-｜EN. <br># | #<br>-END<br><a href='https://www.mdbg.net/chinese/dictionary?wdqb=c:*#*'target='_blank'>www.mdbg.net/chinese/dictionary?</a><hr>",
        "Test&%00EN_vocab"

    );
    
    var vocab_四ZH = new vocab("#",
    
/*.pos -&%00*/"#「pīnyīn」|EN (Part_of_Speech.)|<br>-1. # | #;<br>&%00#「pīnyīn」|EN (Part_of_Speech.)|<br>-1. # | #;<br>",

/*.prep-&%01*/"#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>&%01#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>",

/*.obj -&%02*/"#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>&%02#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>",

/*.ctx -&%03*/"#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>&%03#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>",

/*.dir -&%04*/"#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>&%04#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>"

    );    

    var 四EN_doc = vocab_四ZH;
    glossary[3] = 四EN_doc;
    
    var 四EN_ref = 四.compile_EN();
    data[3] = 四EN_ref;
    
    var 四ZH_ref = 四.compile_ZH();
    data_ZH[3] = 四ZH_ref;    

//break;

    var 五 = new reference (
        "<hr>#・（¨pīnyīn¨）<br>-｜EN. <br># | #<br>-END<br><a href='https://www.mdbg.net/chinese/dictionary?wdqb=c:*#*'target='_blank'>www.mdbg.net/chinese/dictionary?</a><hr>",
        "EN_vocab&%00EN_vocab"

    );
    
    var vocab_五ZH = new vocab("#",
    
/*.pos -&%00*/"#「pīnyīn」|EN (Part_of_Speech.)|<br>-1. # | #;<br>&%00#「pīnyīn」|EN (Part_of_Speech.)|<br>-1. # | #;<br>",

/*.prep-&%01*/"#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>&%01#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>",

/*.obj -&%02*/"#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>&%02#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>",

/*.ctx -&%03*/"#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>&%03#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>",

/*.dir -&%04*/"#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>&%04#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>"

    );    

    var 五EN_doc = vocab_五ZH;
    glossary[4] = 五EN_doc;
    
    var 五EN_ref = 五.compile_EN();
    data[4] = 五EN_ref;
    
    var 五ZH_ref = 五.compile_ZH();
    data_ZH[4] = 五ZH_ref;    

//break;
    var 六 = new reference (
        "<hr>#・（¨pīnyīn¨）<br>-｜EN. <br># | #<br>-END<br><a href='https://www.mdbg.net/chinese/dictionary?wdqb=c:*#*'target='_blank'>www.mdbg.net/chinese/dictionary?</a><hr>",
        "EN_vocab&%00EN_vocab&%00Test"

    );
    
    var vocab_六ZH = new vocab("#",
    
/*.pos -&%00*/"#「pīnyīn」|EN (Part_of_Speech.)|<br>-1. # | #;<br>&%00#「pīnyīn」|EN (Part_of_Speech.)|<br>-1. # | #;<br>",

/*.prep-&%01*/"#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>&%01#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>",

/*.obj -&%02*/"#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>&%02#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>",

/*.ctx -&%03*/"#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>&%03#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>",

/*.dir -&%04*/"#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>&%04#「pīnyīn」|EN (PartofSpeech.)|<br>-1. # | #;<br>"

    );    

    var 六EN_doc = vocab_六ZH;
    glossary[5] = 六EN_doc;
    
    var 六EN_ref = 六.compile_EN();
    data[5] = 六EN_ref;
    
    var 六ZH_ref = 六.compile_ZH();
    data_ZH[5] = 六ZH_ref;    
             
    function list(array, index){
        var n = 0;
        const comma = ",";
         
        try {
            var subject = array[index];//bug-fix
            subject.toString();
            
            for (n=0; n < array.length; n++){
                subject.split(comma);
                keyword.push(subject);
            }
            
        } catch (sbj){  
            document.getElementById("log").innerHTML = 
            "Exception" + sbj;
            
        }
        

    };

    function print(column){
        var n = ["一", "二" , "三", "四", "五", "六"];//Primary Key (PK) list.
        var p = 0;

        var id = document.getElementById("flashcard").innerHTML;
        var selection = id.toString();
        var scan = n.indexOf(selection);//漢字_ref
        //var title = n[scan].toString(); /*bug-fix*/
        var catalog =　list(column[scan], 0);
        var definition = list(data[0], scan);
        
        try {
            var ledger = glossary[scan];
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
        
        document.getElementById("language").innerHTML += data_ZH[scan];

        //document.getElementById("user-input").value= "";
        document.getElementById("output").innerHTML= "✕";
        
    };
    
    print(data, 0);

}

function chat_Response() {
    var id_Prompt = document.getElementById("userInput").value;
    var str_Prompt = id_Prompt.toString();
    
    
    
    var iter = data.toString();
    const comma = ",";
    const keyword = iter.split(comma);
    for (pointer = 0; pointer < keyword.length; pointer++){
        var pattern_EN = new RegExp(keyword[pointer], "g");
         
        var req = pattern_EN.exec(id_Prompt);
        /*<--INSERT '//' to hide FULL result(s):/!\*/ console.log(req + "<break>");
    
    }
    
    /*<--RELEASE to review FULL database:/!\*/ console.log(iter);

}

function chat_Translate() { 
    var id_Prompt = document.getElementById("userPrompt").value;
    var phrase = id_Prompt.toString(); 
    var i;
    var langPC_index = new Array();
    var langPC_mod = phrase.split("--|");
    document.getElementById("console").innerHTML = "";
    for (i = 0; i < langPC_mod.length; i++) {
        //var langZH_mod = new Array();
        
        var vocab = langPC_mod[i].toString();
        var n = vocab.indexOf("@"); 
        
        
        //var link = vocab.substr(n, vocab.length);
        var result = vocab.substr(n + 1, vocab.length);
        var system = document.getElementById("translate-list").value;
        var index = "https://translate.yandex.com/?lang=" + system + "&text=" + result;
        
        //var annotate = (link + "%0A").toString();
        langPC_index.push(result);
        var compile = langPC_index.join("%0A");
        document.getElementById("console").innerHTML += "<a target='_balnk' href='" + index + "'>#" + result + "</a><br>";
        //document.getElementById("translate_log").innerHTML += langPC_index[i];
    }
    
    var index_Compiler = "https://translate.yandex.com/?lang=" + system + "&text=" + compile;
    var translator = window.open(index_Compiler, "_blank", "toolbar=yes, location= yes, directories=yes, status=yes, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=665, height=865");
    translator.moveTo(1000, 0);
    
    //lang=de-en
    //lang=en-de
    //lang=en-zh
    
    //%0A
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
    
    console.log(langPC_mod);
}



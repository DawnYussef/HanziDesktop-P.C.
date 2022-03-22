/*Format for transcription of materials【--EN_vocab00|--EN_vocab00：《PoS》pīnyīn】; these transcriptions can been included within the sentence to aid in memorization -- prompt users to generate 01&% filings of encontered material. */
/*const data_TSL = new Array();
const keyword_TSL = new Array();
window.onload = function() {
   var tsl = document.getElementsByTagName('tsl');
    for(var i = 0; i < tsl.length; i++) {
        var txt = tsl[i];
        var zh = txt.getAttribute('data-id');
        var attr = txt.getAttribute('title');
        
        keyword_TSL.push(zh);
        data_TSL.push(attr); 
   }
}*/


function config_Resp(){
    
    var init = document.getElementById("transcript").innerHTML;
    var str = init.toString();
    var n;
    var p;
    var x = str.indexOf('*') + 1;
    var y = str.indexOf('【');
    var z = str.indexOf('】') + 1;
    
    var vocab = str.substring(x,z);
    var data_ID = str.substring(x,y);
    
    /*document.getElementById("log").innerHTML += "Result:<br>";
    document.getElementById("log").innerHTML += str.substring(x,z) + "<br>";
    document.getElementById("log").innerHTML += str.substring(x,y) + "<br>";*/
    
    
    var phrase = new Array();
    var compile = new Array();
    
    phrase = str.split('*');
    for (n=0; n < phrase.length; n++){
        var info = phrase[n];
        if(info === undefined){
            console.log("Initialize:");
        //insert [animation] ...
        } else {
        
            var parse = info.toString();
        }
    
        if (parse.includes("【")){
            
        var a = parse.indexOf('【');
        var b = parse.indexOf('】') + 1;
        var vocabHTML_copy = parse.substring(0,b); 
        var dataID_copy = parse.substring(0,a);
        var datagram = "<tsl data-id='" + dataID_copy + "' title='" + vocabHTML_copy + "'>" + dataID_copy + "</tsl>";
        document.getElementById("chatLog").innerHTML += datagram;
        
        } else {
        
           document.getElementById("chatLog").innerHTML += parse; 
        }  
    }
    
    var endStr = document.getElementById("chatLog").innerHTML + "<br><br>";
    
    console.log(phrase);
    console.log(compile);
    //alert(endStr);
    document.getElementById("chatLog").innerHTML= endStr;
    
}

const RaN = Math.floor(Math.random() * 5);
switch(RaN){
    case 0: //Possessive
    
    //Include definitions or exception handling withing instance nodes, specific to the ZH-Vocab prompt (only 1); to increase proficiency.
    
    inst_00 = "...";
    inst_01 = "...";
    inst_02 = "...";
    inst_03 = "...";
    inst_04 = "...";
    inst_05 = "...";
    
    resp = {
    /*Capacity = ..40 nodes
    -- enter sentence examples including ZH-vocab followed by &%; capaticy = indefinite ..*/
    
    //resp_00 = {
        "#" : "*文档【--（computer）file：《noun》wéndàng】*未【--not：《prep》wèi】*找到", //...01&%...02&%...03
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
           
    //};
  
    //resp_01 = {
        "ZH-Vocab" : "...01&%...02&%...03", 
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        
    //resp_02 = {
        "ZH-Vocab" : "...01&%...02&%...03", 
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
    //};
    
    //resp_03 = ｛
        "ZH-Vocab" : "...01&%...02&%...03", 
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
    //};
    
    //resp_04 = {
        "ZH-Vocab" : "...01&%...02&%...03", 
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
    //};
    
    //resp_05 = {
        "ZH-Vocab" : "...01&%...02&%...03", 
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03" //sequential list - END "no comma".
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
            
            document.getElementById("transcript").innerHTML = 
            "<li>" + command +"</li>" + sbj +"<br>";
        
        } else {
            document.getElementById("commandLog").innerHTML = "<li>Document not found.</li><br>[...] " + UDC;
            
            document.getElementById("transcript").innerHTML = 
            UDC;
        }
        
        config_Resp();

    };
        
    break;
        
    case 1: //Prep.
        
    //Include definitions or exception handling withing instance nodes, specific to the ZH-Vocab prompt (only 1); to increase proficiency.
    
    inst_00 = "...";
    inst_01 = "...";
    inst_02 = "...";
    inst_03 = "...";
    inst_04 = "...";
    inst_05 = "...";
    
    resp = {
    /*Capacity = ..40 nodes
    --enter sentence examples including ZH-vocab followed by &%; capaticy = indefinite ..*/
    
    //resp_00 = {
        "#" : "*文档【--（computer）file：《noun》wéndàng】*未【--not：《prep》wèi】*找到", //...01&%...02&%...03 
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
           
    //};
  
    //resp_01 = {
        "ZH-Vocab" : "...01&%...02&%...03", 
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        
    //resp_02 = {
        "ZH-Vocab" : "...01&%...02&%...03", 
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
    //};
    
    //resp_03 = ｛
        "ZH-Vocab" : "...01&%...02&%...03", 
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
    //};
    
    //resp_04 = {
        "ZH-Vocab" : "...01&%...02&%...03", 
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
    //};
    
    //resp_05 = {
        "ZH-Vocab" : "...01&%...02&%...03", 
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03" //sequential list - END "no comma".
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
            
            document.getElementById("transcript").innerHTML = 
            "<li>" + command +"</li>" + sbj +"<br>";
        
        } else {
            document.getElementById("commandLog").innerHTML = "<li>Document not found.</li><br>[...] " + UDC;
            
            document.getElementById("transcript").innerHTML = 
            UDC;
        }
        
        config_Resp();

    };
    
    break;
        
    case 2: //Object
        
    //Include definitions or exception handling withing instance nodes, specific to the ZH-Vocab prompt (only 1); to increase proficiency.
    
    inst_00 = "...";
    inst_01 = "...";
    inst_02 = "...";
    inst_03 = "...";
    inst_04 = "...";
    inst_05 = "...";
    
    resp = {
    /*Capacity = ..40 nodes
    --enter sentence examples including ZH-vocab followed by &%; capaticy = indefinite ..*/
    
    //resp_00 = {
        "#" : "*文档【--（computer）file：《noun》wéndàng】*未【--not：《prep》wèi】*找到", //...01&%...02&%...03 
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
           
    //};
  
    //resp_01 = {
        "ZH-Vocab" : "...01&%...02&%...03", 
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        
    //resp_02 = {
        "ZH-Vocab" : "...01&%...02&%...03", 
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
    //};
    
    //resp_03 = ｛
        "ZH-Vocab" : "...01&%...02&%...03", 
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
    //};
    
    //resp_04 = {
        "ZH-Vocab" : "...01&%...02&%...03", 
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
    //};
    
    //resp_05 = {
        "ZH-Vocab" : "...01&%...02&%...03", 
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03" //sequential list - END "no comma".
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
            
            document.getElementById("transcript").innerHTML = 
            "<li>" + command +"</li>" + sbj +"<br>";
        
        } else {
            document.getElementById("commandLog").innerHTML = "<li>Document not found.</li><br>[...] " + UDC;
            
            document.getElementById("transcript").innerHTML = 
            UDC;
        }
        
        config_Resp();

    };
        
    break;
        
    case 3: //Context [or] Location
        
    //Include definitions or exception handling withing instance nodes, specific to the ZH-Vocab prompt (only 1); to increase proficiency.
    
    inst_00 = "...";
    inst_01 = "...";
    inst_02 = "...";
    inst_03 = "...";
    inst_04 = "...";
    inst_05 = "...";
    
    resp = {
    /*Capacity = ..40 nodes
    --enter sentence examples including ZH-vocab followed by &%; capaticy = indefinite ..*/
    
    //resp_00 = {
        "#" : "*文档【--（computer）file：《noun》wéndàng】*未【--not：《prep》wèi】*找到", //...01&%...02&%...03 
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
           
    //};
  
    //resp_01 = {
        "ZH-Vocab" : "...01&%...02&%...03", 
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        
    //resp_02 = {
        "ZH-Vocab" : "...01&%...02&%...03", 
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
    //};
    
    //resp_03 = ｛
        "ZH-Vocab" : "...01&%...02&%...03", 
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
    //};
    
    //resp_04 = {
        "ZH-Vocab" : "...01&%...02&%...03", 
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
    //};
    
    //resp_05 = {
        "ZH-Vocab" : "...01&%...02&%...03", 
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03" //sequential list - END "no comma".
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
            
            document.getElementById("transcript").innerHTML = 
            "<li>" + command +"</li>" + sbj +"<br>";
        
        } else {
            document.getElementById("commandLog").innerHTML = "<li>Document not found.</li><br>[...] " + UDC;
            
            document.getElementById("transcript").innerHTML = 
            UDC;
        }
        
        config_Resp();

    };
    
    break;
        
    case 4: //Direction.
        
    //Include definitions or exception handling withing instance nodes, specific to the ZH-Vocab prompt (only 1); to increase proficiency.
    
    inst_00 = "...";
    inst_01 = "...";
    inst_02 = "...";
    inst_03 = "...";
    inst_04 = "...";
    inst_05 = "...";
    
    resp = {
    /*Capacity = ..40 nodes
    --enter sentence examples including ZH-vocab followed by &%; capaticy = indefinite ..*/
    
    //resp_00 = {
        "#" : "*文档【--（computer）file：《noun》wéndàng】*未【--not：《prep》wèi】*找到", //...01&%...02&%...03 
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
           
    //};
  
    //resp_01 = {
        "ZH-Vocab" : "...01&%...02&%...03", 
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        
    //resp_02 = {
        "ZH-Vocab" : "...01&%...02&%...03", 
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
    //};
    
    //resp_03 = ｛
        "ZH-Vocab" : "...01&%...02&%...03", 
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
    //};
    
    //resp_04 = {
        "ZH-Vocab" : "...01&%...02&%...03", 
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
    //};
    
    //resp_05 = {
        "ZH-Vocab" : "...01&%...02&%...03", 
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03",
        "ZH-Vocab" : "...01&%...02&%...03" //sequential list - END "no comma".
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
            
            document.getElementById("transcript").innerHTML = 
            "<li>" + command +"</li>" + sbj +"<br>";
        
        } else {
            document.getElementById("commandLog").innerHTML = "<li>Document not found.</li><br>[...] " + UDC;
            
            document.getElementById("transcript").innerHTML = 
            UDC;
        }
        
        config_Resp();

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


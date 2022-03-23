function flash_c() {
    document.getElementById("dialog").innerHTML= "请识别此汉字";
    var hanziZH_display = ["刀", "装", "备", "急", "救", "药"];

function pos_Search(){    
};

function prep_Search(){
};

function obj_Search(){
};

function ctx_Search(){
};

function dir_Search(){
};


//document.getElementById("search_Case0").innerHTML = "";
document.getElementById("button_Case0").innerHTML = "";
document.getElementById("button_Case0").removeEventListener = ("click", pos_Search)

//document.getElementById("search_Case1").innerHTML = "";
document.getElementById("button_Case1").innerHTML = "";
document.getElementById("button_Case1").removeEventListener = ("click", prep_Search)

//document.getElementById("search_Case2").innerHTML = "";
document.getElementById("button_Case2").innerHTML = "";
document.getElementById("button_Case2").removeEventListener = ("click", obj_Search)

//document.getElementById("search_Case3").innerHTML = "";
document.getElementById("button_Case3").innerHTML = "";
document.getElementById("button_Case3").removeEventListener = ("click", ctx_Search)

//document.getElementById("search_Case4").innerHTML = "";
document.getElementById("button_Case4").innerHTML = "";
document.getElementById("button_Case4").removeEventListener = ("click", dir_Search);



var i = 0;
var card;
    hanziZH_display.sort(function(a, b){return 0.5 - Math.random()});
    card = hanziZH_display[i];
	document.getElementById("flashcard").innerHTML = card;
}

function submit() {
    /*function inst_刀Prompt(){
    };*/
    
    var scan_input = document.getElementById("output");
    scan_input.innerHTML= "";
    var hanzi = document.getElementById("flashcard").innerHTML;
    var question = hanzi.toString();
    var input = document.getElementById("user-input").value;
    var answer = input.toString();
    
    var n = question.includes(answer);
    if (n == true) {
        scan_input.innerHTML = "正确";

    } else { 
        document.getElementById("output").innerHTML= "错字";
    }
    
    /*var source = "ZH_metaData.html";
    var view = window.open(source, "_blank"); 
    view.open();*/       
}





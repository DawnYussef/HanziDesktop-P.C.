function flash_c() {
    document.getElementById("dialog").innerHTML= "Insert Manual Discription [...]";
    document.getElementById("manual").innerHTML= "汉字代表与相关材料的神经联系 ~ A.I.专注于整个文档涵盖的主题材料，并通过Google搜索引擎管理“最新”资料。<br><br>Chinese character(s) represent a neural link to associative materials - A.I. focuses on subject material covered throughout the document and manages 'up to date' profiles via Google search engine.";
    //document.getElementById("dialog").innerHTML= "请识别此汉字";
    var hanziZH_display = ["一", "二" , "三", "四", "五", "六"];

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
document.getElementById("button_Case0").removeEventListener = ("click", pos_Search);

//document.getElementById("search_Case1").innerHTML = "";
document.getElementById("button_Case1").innerHTML = "";
document.getElementById("button_Case1").removeEventListener = ("click", prep_Search);

//document.getElementById("search_Case2").innerHTML = "";
document.getElementById("button_Case2").innerHTML = "";
document.getElementById("button_Case2").removeEventListener = ("click", obj_Search);

//document.getElementById("search_Case3").innerHTML = "";
document.getElementById("button_Case3").innerHTML = "";
document.getElementById("button_Case3").removeEventListener = ("click", ctx_Search);

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
    var scan_input = document.getElementById("output");
    scan_input.innerHTML= "";
    var hanzi = document.getElementById("flashcard").innerHTML;
    var question = hanzi.toString(); //Auto*"user-input"
    var input = document.getElementById("user-input").value; 
    //var answer = input.toString();
    
    var n = question.includes(question);//answer
    if (n == true) {
        scan_input.innerHTML = "正确";

    } else { 
        document.getElementById("output").innerHTML= "错字";
    }   
}




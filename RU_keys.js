let shiftKey = false;//-- check for bug-fix
let altKey = false;// -- check for bug-fix

function shift(){
    shiftKey = true;
    console.log(shiftKey);
}

function alt(){
    altKey = true;
    console.log(altKey);
}

//var commandKey = false;
function keystroke_BTN(id_Cyrillic){
    var init = document.getElementById(id_Cyrillic).value;
    if(shiftKey != true){
        document.getElementById('userPrompt').value += init.toLowerCase();
    /*} else if(id_Alpha = 'nullChar'){
        document.getElementById("userPrompt").innerHTML += "";*/
    } else {
        document.getElementById('userPrompt').value += init;
        shiftKey = false;
    }
}

/*
multiple keypress: i.e. [S][H][C][H]

********
document.addEventListener('keydown', (event) => {
   keysPressed[event.key] = true;

   if (keysPressed['Control'] && event.key == 'a') {
       alert(event.key);
   }
});

document.addEventListener('keyup', (event) => {
   delete keysPressed[event.key];
});

*/

function phonetic_Alt(e){
    var input = e.key;
    var ctx = e.code;
    let altKey = {}; 
    //Debug:
    //console.log(input);
    
    const valid_altKeys = [",", ".", "e", "i", "y", "x"];
    if(ctx = "AltLeft"){
        altKey = true;
        //console.log(altKey)
        try {
        // @Alt = [?] :: Debugging 
        //else if(altKey = true){
            
            if(valid_altKeys.includes(altKey[input])){
                var id_Alt = altKey[input].toUpperCase() + "-alt";
                keystroke(id_Alt);
            }
            
            if(valid_altKeys[0].includes(altKey[input])){
                keystroke('leftArrow-alt');
            }

            if(valid_altKeys[1].includes(altKey[input])){
                keystroke('rightArrow-alt');
            
            } else {
                //keystroke('nullChar');
            }
            
        } catch(ex){
        
        }
    }
}

function altSwitch(event){
    var input = event.key;
    var ctx = event.code;
    //Debug:
    //console.log(ctx);
    
    if(ctx == "AltLeft"){
        altKey = false;
        //console.log(altKey);
    }
}

function phonetic(e){
    var input = e.key;
    //e.preventDefault()
    //reconfigure -- bug-fix

    //Note - [;] & ['] *not usable
    const valid_punctKeys = ["`", "1", "2", "3", "4", ",", "."];
    //Э = 3, Ы, И, Ч, Ь, Ъ
    const valid_Keys = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p",  "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
    try {
        //@RU_Phonetic = [?]
        if(valid_Keys.includes(input)){
            var id_Aplha = input.toUpperCase() + "-key";
            keystroke(id_Aplha);
        }
        
        if(valid_punctKeys[0].includes(input)){
            keystroke('tilde-key');
        }

        if(valid_punctKeys[1].includes(input)){
            keystroke('I-alt');
        }

        if(valid_punctKeys[2].includes(input)){
            keystroke('Y-alt');
        }

        if(valid_punctKeys[3].includes(input)){
            keystroke('E-alt');
        }

        if(valid_punctKeys[4].includes(input)){
            keystroke('X-alt');
        }

        if(valid_punctKeys[5].includes(input)){
            keystroke('leftArrow-alt');
        }

        if(valid_punctKeys[6].includes(input)){
            keystroke('rightArrow-alt');
            
        } 
        
        else if(altKey = true){
            phonetic_Alt(e);    
        } else {
            //keystroke('nullChar');
        }
     
    } catch(ex){
        //console.log("input not available.")
    }
};

function keystroke(id_Cyrillic){
    var init = document.getElementById(id_Cyrillic).value;
    if(shiftKey != true){
        document.getElementById('userPrompt').value += init.toLowerCase();
        /*} else if(id_Alpha = 'nullChar'){
                        document.getElementById("userPrompt").innerHTML += "";*/
    } else {
        document.getElementById('userPrompt').value += init;
        shiftKey = false;
    }
}

function CMND_select(){ //Resolve w/ CSS
    const node = document.getElementById('CMND-key').attributes;
    let cmndSwitch = node.getNamedItem('value').value;
    if(cmndSwitch == "CMND"){  // On ...
        document.getElementById('CMND-key').value = "*CMND*";
        CMND_format();
        
    } else { // Off ...
        document.getElementById('CMND-key').value = "CMND";
        window.removeEventListener("keydown", phonetic);
        
        /*REQ. Debugging ... See:(below)
        window.removeEventListener("keydown", phonetic_Alt);
        window.removeEventListener("keyup", altSwitch);
        */
    }
}

function CMND_format(){
    const node = document.getElementById('CMND-key').attributes;
    let cmndSwitch = node.getNamedItem('value').value;
    //--Log: Debugging
    //var cmndSwitch = document.getElementById('CMND-key').value;
    if (cmndSwitch == '*CMND*'){
    /*Keycode(s): --> 65[a] thru 90[z];
    - 18[Alt]; 57[Colon]; 188['<'] - 110['>']; 219['{'] - 221['}']*/
        window.addEventListener('keydown', phonetic);
        
        /*REQ.Debugging ...@Alt[input] fails to populate 
        window.addEventListener("keydown", phonetic_Alt);
        window.addEventListener("keyup", altSwitch);
        
        */
        
    }    
}
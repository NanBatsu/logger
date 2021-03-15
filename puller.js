var logJSON;
var textInserter;
var textValidated;
var keyOfUser;
var inputBox;
var key;
var papa;

function preload() {
    logJSON = loadJSON("JS/logs.json")
}

function setup() {
    inputBox = document.getElementById('fKey');
   
    papa = document.getElementById('logContent');
}

function Analyze() {
    var loopValue = 3;
    keyOfUser = inputBox.value; 
    console.log(keyOfUser);    
    for (var i = 0; i < loopValue; i++) {           
            if (keyOfUser == logJSON[i].key ) {
                console.log("FOUND")
                textValidated = logJSON[i].log;
                writeIntoLog(keyOfUser);
                break;
            } else {
                console.log("FAILED")
            }      
    }

    console.log("Analyzed");
}
function writeIntoLog(title) {
    papa.innerHTML = title +"<br>"+" "+ textValidated;
}
function zeroBtn(){
    document.getElementById('res').innerHTML += 0;
}

function oneBtn(){
    document.getElementById('res').innerHTML += 1;
}

//clear button
function clrBtn(){
    document.getElementById('res').innerHTML = "";
}

function addBtn(){
    document.getElementById('res').innerHTML += "+";
}

function subBtn(){
    document.getElementById('res').innerHTML += "-";
}

function mulBtn(){
    document.getElementById('res').innerHTML += "*";
}

function divBtn(){
    document.getElementById('res').innerHTML += "/";
}

function eqlBtn(){
    let result = document.getElementById('res');
    
    let num1 = parseInt(result.innerHTML.match(/^\d+/g),2);
    let num2 = parseInt(result.innerHTML.match(/\d+$/g),2);
    let operator = result.innerHTML.match(/[+,-,*,//]/);
    
    if(operator == "+"){
        let answer = num1 + num2;
         result.innerHTML = answer.toString(2);
    }else if(operator == "-"){
        let answer = num1 - num2;
         result.innerHTML = answer.toString(2);
    }else if(operator == "*"){
        let answer = num1 * num2;
         result.innerHTML = answer.toString(2);
    }else if(operator == "/"){
        let answer = num1 / num2;
         result.innerHTML = answer.toString(2);
    }else{
        clrBtn();
    }
}
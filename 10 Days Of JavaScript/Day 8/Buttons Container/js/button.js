function clickRotate(){
    let button1 = document.getElementById('btn1');
    let button2 = document.getElementById('btn2');
    let button3 = document.getElementById('btn3');
    let button6 = document.getElementById('btn6');
    let button9 = document.getElementById('btn9');
    let button8 = document.getElementById('btn8');
    let button7 = document.getElementById('btn7');
    let button4 = document.getElementById('btn4');
    
    let b1 = button1.innerHTML;
    let b2 = button2.innerHTML;
    let b3 = button3.innerHTML;
    let b6 = button6.innerHTML;
    let b9 = button9.innerHTML;
    let b8 = button8.innerHTML;
    let b7 = button7.innerHTML;
    let b4 = button4.innerHTML;
    
    button1.innerHTML = b4;
    button2.innerHTML = b1;
    button3.innerHTML = b2;
    button6.innerHTML = b3;
    button9.innerHTML = b6;
    button8.innerHTML = b9;
    button7.innerHTML = b8;
    button4.innerHTML = b7;
}
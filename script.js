function add() {
    let num1 = parseInt(document.getElementById('number1').value);
    let num2 = parseInt(document.getElementById('number2').value);

    let rs = num1 + num2;

    if( num1 == '' || num2 == ''){
        document.getElementById('result').innerText = 'Enter both Values'
    }else{
        document.getElementById('result').innerHTML = rs
    }
}
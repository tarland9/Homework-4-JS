function doMath() {
    var numOne = document.getElementById('num1').value;
    var numTwo = document.getElementById('num2').value;
    var result = document.getElementById('result').value;
    var result = parseInt(numOne) * parseInt(numTwo);
    document.getElementById('result').innerHTML = result;
    }

    var total = 1
    for(let i=10 ; i<15 ; i++){
        total = total*i   
    };
    console.log(total)


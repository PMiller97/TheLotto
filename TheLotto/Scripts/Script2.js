function winningNums(number) {
    var num = Math.round(Math.random() * number)
    num = num.toString();
    if (num.length < 2) {
        num = "0" + num;
    }
    
    return num;
}

function getLuckyNumbers(number) {
    var ctr = 0;
      var dupNum = [];

    for (var i = 0; i < 6; i++) {
        dupNum[i] = winningNums(47);
        while (dupNum.includes(dupNum[i])) {
          dupNum[i] = Math.round(Math.random() * number)

        }
        var test = dupNum[i];
    }
   

    document.getElementById("L1").innerHTML = dupNum[0]
    document.getElementById("L2").innerHTML = dupNum[1]
    document.getElementById("L3").innerHTML = dupNum[2]
    document.getElementById("L4").innerHTML = dupNum[3]
    document.getElementById("L5").innerHTML = dupNum[4]
    document.getElementById("L6").innerHTML = dupNum[5]

    var num1 = document.getElementById("input1").value;
    var num2 = document.getElementById("input2").value;
    var num3 = document.getElementById("input3").value;
    var num4 = document.getElementById("input4").value;
    var num5 = document.getElementById("input5").value;
    var num6 = document.getElementById("input6").value;

    var numbers = [num1, num2, num3, num4, num5, num6]
    
    for (var j = 0; j < dupNum.length; j++) {     
        test = numbers[j];
        
        if (dupNum.includes(numbers[j])) {

            alert(test)
        }
    }
}



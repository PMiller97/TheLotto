//function winningNums(number) {
//    var num = Math.round(Math.random() * number)
//    num = num.toString();
//    if (num.length < 2) {
//        num = "0" + num;
//    }
    
//    return num;
//}

//function getLuckyNumbers(number) {
//    var ctr = 0;
//      var dupNum = [];

//    for (var i = 0; i < 6; i++) {
//        dupNum[i] = winningNums(47);
//        while (dupNum.includes(dupNum[i])) {
//          dupNum[i] = Math.round(Math.random() * number)

//        }
//        var test = dupNum[i];
//    }
   

//    document.getElementById("L1").innerHTML = dupNum[0]
//    document.getElementById("L2").innerHTML = dupNum[1]
//    document.getElementById("L3").innerHTML = dupNum[2]
//    document.getElementById("L4").innerHTML = dupNum[3]
//    document.getElementById("L5").innerHTML = dupNum[4]
//    document.getElementById("L6").innerHTML = dupNum[5]

//    var num1 = document.getElementById("input1").value;
//    var num2 = document.getElementById("input2").value;
//    var num3 = document.getElementById("input3").value;
//    var num4 = document.getElementById("input4").value;
//    var num5 = document.getElementById("input5").value;
//    var num6 = document.getElementById("input6").value;

//    var numbers = [num1, num2, num3, num4, num5, num6]
    
//    for (var j = 0; j < dupNum.length; j++) {     
//        test = numbers[j];
        
//        if (dupNum.includes(numbers[j])) {

//            alert(test)
//        }
//    }
//}




function getRandom(number) {

    var randNum = Math.round(Math.random() * number);
    randNum = randNum.toString();

    if (randNum.length < 2) {
        randNum = "0" + randNum;
    }
    return randNum;
}

function getPBNums() {
    var ctr = 0;
    var arArray = [];

    var tempNum;
    for (var i = 0; i < 6; i++) {
        tempNum = getRandom(45);
        while (arArray.includes(tempNum)) {
            tempNum = getRandom(45);
        }
        arArray[i] = tempNum;
    }

    var num1 = document.getElementById("num1").value;

    var num2 = document.getElementById("num2").value;

    var num3 = document.getElementById("num3").value;

    var num4 = document.getElementById("num4").value;

    var num5 = document.getElementById("num5").value;

    var num6 = document.getElementById("num6").value;

    var numArray = [num1, num2, num3, num4, num5, num6];
    var tempNum2;

    for (var k = 0; k < 6; k++) {
        tempNum2 = numArray[k];
        if (tempNum2.length < 2) {
            tempNum2 = "0" + tempNum2;
        }

        if (arArray.includes(tempNum2)) {
            ctr += 1;

        }

    }
    switch (ctr) {
        case 1:
            document.getElementById("winNum").innerHTML = "$25.00!"
            break;
        case 2:
            document.getElementById("winNum").innerHTML = "$50.00!"
            break;
        case 3:
            document.getElementById("winNum").innerHTML = "$75.00!"
            break;
        case 4:
            document.getElementById("winNum").innerHTML = "$100.00!!"
            break;
        case 5:
            document.getElementById("winNum").innerHTML = "$125.00!!!"
            break;
        case 6:
            document.getElementById("winNum").innerHTML = "$150.00!!!!"
            break;
        default:
            document.getElementById("winNum").innerHTML = "$0.00 :("
            break;
    }

    document.getElementById("pb1").innerHTML = arArray[0];
    document.getElementById("pb2").innerHTML = arArray[1];
    document.getElementById("pb3").innerHTML = arArray[2];
    document.getElementById("pb4").innerHTML = arArray[3];
    document.getElementById("pb5").innerHTML = arArray[4];
    document.getElementById("pb6").innerHTML = arArray[5];

}


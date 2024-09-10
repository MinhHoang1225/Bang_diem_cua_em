function myFunction() {
    var a = parseFloat(document.getElementById("se1").value);
    var b = parseFloat(document.getElementById("se2").value);
    var c = document.getElementById("ye");
    var value = parseInt(c.options[c.selectedIndex].value);
    var k;

    switch (value) {
        case 1:
            k = (a + (b * 2)) / 3;
            break;
        case 2:
            k = (a * 2 + b * 3) / 5;
            break;
        case 3:
            k = (a * 3 + b * 4) / 7;
            break;
        default:
            k = 0;
            break;
    }

    document.getElementById('result').value = k.toFixed(2);

    if (k > 9) {
        document.getElementById('display').innerHTML = "Hoc sinh Gioi";
        document.getElementById('display').style.color = 'red';
    } else if (k >= 7 && k < 9) {
        document.getElementById('display').innerHTML = "Hoc sinh Kha";
        document.getElementById('display').style.color = 'blue';
    } else if (k >= 5 && k < 7) {
        document.getElementById('display').innerHTML = "Hoc sinh Trung binh";
        document.getElementById('display').style.color = 'yellow';
    } else {
        document.getElementById('display').innerHTML = "Hoc sinh Yeu";
        document.getElementById('display').style.color = 'gray';
    }
}

function myFunction2() {
    document.getElementById('se1').value = "";
    document.getElementById('se2').value = "";
    document.getElementById('result').value = "";
    document.getElementById('display').innerHTML = "";
}

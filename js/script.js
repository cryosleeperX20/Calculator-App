var num0 = document.getElementById("0");
var equal = document.getElementById("=");
var devide = document.getElementById("/");
var clear = document.getElementById("reset");
var deleteBtn = document.getElementById("del");

var display = document.getElementById("number-input");
const cols = document.querySelectorAll('.col');

cols.forEach((c) => {
    c.addEventListener('mousedown', function () {
        display.value += c.innerHTML;
    });
});

num0.onclick = function () {
    display.value += '0';
}

clear.onclick = function () {
    display.value = '';
}

devide.onclick = function () {
    display.value += '/';
}

equal.onclick = function () {
    if (display.value == "") {
        alert("Please enter value!!");
    } else {
        display.value = eval(display.value);
    }
}

deleteBtn.onclick = function () {
    display.value = display.value.toString().slice(0, -1);
}

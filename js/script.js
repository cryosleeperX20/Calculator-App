var num0 = document.getElementById("0");
var equal = document.getElementById("=");
var devide = document.getElementById("/");
var clear = document.getElementById("reset");
var deleteBtn = document.getElementById("del");

var display = document.getElementById("number-input");
const cols = document.querySelectorAll('.col');

var styleLine = document.getElementById("theme-css");
var themeBtnBg = document.getElementById("switch-bg");
var themeBtn1 = document.getElementById("sw-1");
var themeBtn2 = document.getElementById("sw-2");
var themeBtn3 = document.getElementById("sw-3");

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

themeBtn1.addEventListener("click", function () {
    styleLine.href = "css/theme1.css";
    themeBtnBg.classList.add("theme1-theme-select-bg");
    themeBtnBg.classList.remove("theme2-theme-select-bg");
    themeBtnBg.classList.remove("theme3-theme-select-bg");
    themeBtn1.style.backgroundColor = "hsl(6, 63%, 50%)";
    themeBtn2.style.backgroundColor = "#FFB3CB00";
    themeBtn3.style.backgroundColor = "#FFB3CB00";
});

themeBtn2.addEventListener("click", function () {
    styleLine.href = "css/theme2.css";
    themeBtnBg.classList.add("theme2-theme-select-bg");
    themeBtnBg.classList.remove("theme1-theme-select-bg");
    themeBtnBg.classList.remove("theme3-theme-select-bg");
    themeBtn2.style.backgroundColor = "hsl(25, 98%, 40%)";
    themeBtn1.style.backgroundColor = "#FFB3CB00";
    themeBtn3.style.backgroundColor = "#FFB3CB00";
});

themeBtn3.addEventListener("click", function () {
    styleLine.href = "css/theme3.css";
    themeBtnBg.classList.add("theme3-theme-select-bg");
    themeBtnBg.classList.remove("theme1-theme-select-bg");
    themeBtnBg.classList.remove("theme2-theme-select-bg");
    themeBtn3.style.backgroundColor = "hsl(176, 100%, 44%)";
    themeBtn1.style.backgroundColor = "#FFB3CB00";
    themeBtn2.style.backgroundColor = "#FFB3CB00";
});

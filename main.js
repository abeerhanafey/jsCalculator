var screen = document.querySelector(".screen");
var buttons = document.querySelectorAll("button");

buttons.forEach(function (el) {
    el.onclick = function () {
        buttons.forEach(function (ele) {
            ele.style.border = "none";
        });
        el.style.border = "4px solid red";
        switch (el.innerText) {
            case "=":
                if (screen.value == "") {
                    screen.value = "0"
                } else {
                    screen.value = eval(screen.value);
                }
                break;
            case "AC":
                screen.value = "";
                break;
            case "X":
                screen.value = screen.value.slice(0, screen.value.length-1);
                break;
            case "+/-":
                screen.value = -screen.value;
                break;
            default:
                screen.value = `${screen.value}${el.innerText}`;
                break;
        }
    }
});

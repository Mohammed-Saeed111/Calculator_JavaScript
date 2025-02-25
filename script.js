const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const { id } = button; 

        switch (id) {
            case "clear": 
                display.innerText = "";
                break;

            case "backspace": 
                display.innerText = display.innerText.slice(0, -1);
                break;

            case "equal": 
                if (display.innerText) {
                    try {
                        display.innerText = math.evaluate(display.innerText);
                    } catch {
                        showTemporaryMessage("خطأ!");
                    }
                } else {
                    showTemporaryMessage("فارغ!");
                }
                break;

            default: 
                display.innerText += id;
        }
    });
});

const showTemporaryMessage = (message) => {
    display.innerText = message;
    setTimeout(() => (display.innerText = ""), 2000);
};


const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;

themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};

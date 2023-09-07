let display = document.querySelector(".display");

let buttons = Array.from(document.querySelectorAll(".button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "0";
        break;

      case "=":
        try {
          display.innerText = parseFloat(eval(display.innerText).toFixed(5));
        } catch (e) {
          display.innerText = "Error!";
        }
        break;

      case "%":
        display.innerText = eval(display.innerText + "/100");
        break;

      case "+/-":
        display.innerText = -display.innerText;
        break;
      case "+":
        if ("*/-".includes(display.innerText[display.innerText.length - 1])) {
          display.innerText = display.innerText.slice(0, -1);
          display.innerText += e.target.innerText;
        }

        if (display.innerText[display.innerText.length - 1] === "+");
        else display.innerText += e.target.innerText;
        break;

      case "-":
        if ("*/+".includes(display.innerText[display.innerText.length - 1])) {
          display.innerText = display.innerText.slice(0, -1);
          display.innerText += e.target.innerText;
        }
        if (display.innerText[display.innerText.length - 1] === "-");
        else display.innerText += e.target.innerText;
        break;
      case "*":
        if ("-/+".includes(display.innerText[display.innerText.length - 1])) {
          display.innerText = display.innerText.slice(0, -1);
          display.innerText += e.target.innerText;
        }
        if (display.innerText[display.innerText.length - 1] === "*");
        else display.innerText += e.target.innerText;
        break;
      case "/":
        if ("*+".includes(display.innerText[display.innerText.length - 1])) {
          display.innerText = display.innerText.slice(0, -1);
          display.innerText += e.target.innerText;
        }
        if (display.innerText[display.innerText.length - 1] === "/");
        else display.innerText += e.target.innerText;
        break;
      case "←":
        if (display.innerText.length === 1) display.innerText = "0";
        else display.innerText = display.innerText.slice(0, -1);
        break;

      case ".":
        let text = display.innerText;
        if (text.split(/[+*\-\/]/)[text.split(/[+*\-\/]/).length - 1].includes("."));
        else display.innerText += e.target.innerText;

        break;

      default:
        if (display.innerText === "0" && e.target.innerText !== ".") display.innerText = e.target.innerText;
        else display.innerText += e.target.innerText;
    }
  });
});

//govnkodid)

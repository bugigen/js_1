let content = document.querySelector("#content");

document.addEventListener("DOMContentLoaded", createButtonsInner);

function createButtonsInner() {
  button = document.createElement("button");
  button2 = document.createElement("button");
  button.textContent = "Enter";
  button2.textContent = "Registration";
  content.append(button);
  content.append(button2);

  button.addEventListener("click", buttonListener);
  button2.addEventListener("click", buttonListener2);

  function buttonListener() {
    input = document.createElement("input");
    input2 = document.createElement("input");
    button4 = document.createElement("button");
    input.name = "input";
    input.type = "text";
    input2.name = "input";
    input2.type = "text";
    button4.name = "button";
    button4.type = "submit";
    button4.textContent = "Go";
    input.placeholder = "Enter your name";
    input2.placeholder = "Enter your password";
    button2.after(input);
    input.after(input2);
    input2.after(button);
    input.classList.add("for-input");
    input2.classList.add("for-input");
    button.removeEventListener("click", buttonListener);
  }

  function buttonListener2() {
    input = document.createElement("input");
    input2 = document.createElement("input");
    input3 = document.createElement("input");
    button3 = document.createElement("button");
    input.name = "input";
    input.type = "text";
    input2.name = "input";
    input2.type = "text";
    input3.name = "input";
    input3.type = "text";
    button3.name = "button";
    button3.type = "submit";
    button3.textContent = "Go";
    input.placeholder = "Enter your name";
    input2.placeholder = "Enter your password";
    input3.placeholder = "Confirm your password";
    button2.after(input);
    input.after(input2);
    input2.after(input3);
    input3.after(button3);
    input.classList.add("for-input");
    input2.classList.add("for-input");
    input3.classList.add("for-input");
    button2.removeEventListener("click", buttonListener2);
  }
}

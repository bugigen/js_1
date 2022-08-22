let content = document.querySelector("#content");

document.addEventListener("DOMContentLoaded", createButtonsInner);

function createButtonsInner() {
  let buttonCreate = document.createElement("button");
  let buttonCreate2 = document.createElement("button");
  let inputListener1 = document.createElement("input");
  let inputListener1_2 = document.createElement("input");
  let buttonListener1_3 = document.createElement("button");
  let inputListener2 = document.createElement("input");
  let inputListener2_2 = document.createElement("input");
  let inputListener2_3 = document.createElement("input");
  let buttonListener2_4 = document.createElement("button");

  buttonCreate.textContent = "Log in";
  buttonCreate2.textContent = "Registration";
  content.append(buttonCreate);
  buttonCreate.after(buttonCreate2);

  buttonCreate.addEventListener("click", buttonListener);
  buttonCreate2.addEventListener("click", buttonListener2);

  function buttonListener() {
    inputListener1.name = "input";
    inputListener1.type = "text";
    inputListener1_2.name = "input";
    inputListener1_2.type = "text";
    buttonListener1_3.name = "button";
    buttonListener1_3.type = "submit";
    buttonListener1_3.textContent = "Enter";
    inputListener1.placeholder = "Enter your name";
    inputListener1_2.placeholder = "Enter your password";
    buttonCreate2.after(inputListener1);
    inputListener1.after(inputListener1_2);
    inputListener1_2.after(buttonListener1_3);
    inputListener1.classList.add("for-input");
    inputListener1_2.classList.add("for-input");
    inputListener1.style.display = 'block';
    inputListener1_2.style.display = 'block';
    buttonListener1_3.style.display = 'block';
    inputListener2.style.display = 'none';
    inputListener2_2.style.display = 'none';
    inputListener2_3.style.display = 'none';
    buttonListener2_4.style.display = 'none';
    // buttonCreate.removeEventListener("click", buttonListener);
  }

  function buttonListener2() {
    inputListener2.name = "input";
    inputListener2.type = "text";
    inputListener2_2.name = "input";
    inputListener2_2.type = "text";
    inputListener2_3.name = "input";
    inputListener2_3.type = "text";
    buttonListener2_4.name = "button";
    buttonListener2_4.type = "submit";
    buttonListener2_4.textContent = "Register";
    inputListener2.placeholder = "Enter your name";
    inputListener2_2.placeholder = "Enter your password";
    inputListener2_3.placeholder = "Confirm your password";
    buttonCreate2.after(inputListener2);
    inputListener2.after(inputListener2_2);
    inputListener2_2.after(inputListener2_3);
    inputListener2_3.after(buttonListener2_4);
    inputListener2.classList.add("for-input");
    inputListener2_2.classList.add("for-input");
    inputListener2_3.classList.add("for-input");
    inputListener2.style.display = 'block';
    inputListener2_2.style.display = 'block';
    inputListener2_3.style.display = 'block';
    buttonListener2_4.style.display = 'block';
    inputListener1.style.display = 'none';
    inputListener1_2.style.display = 'none';
    buttonListener1_3.style.display = 'none';
    // buttonCreate2.removeEventListener("click", buttonListener2);
  }
}

let content = document.querySelector("#content");
let product = document.querySelector("#product");
let btn = document.querySelector("#btn");

const url = "https://run.mocky.io/v3/adf501fe-5592-4766-8a10-0bc24f328807";

const getJson = async () => {
  try {
    const response = await fetch(url);
    if (response.ok === "false") {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
    const answer = await response.json();
    console.log(answer);
    // const answerText = await response.text();
    content.textContent = JSON.stringify(answer, null, 2);
    product.textContent = answer.Cases[0].name;
  } catch (e) {
    console.log(e);
  }
}

// getJson().catch(error => error.message);

btn.addEventListener("click", getJson);



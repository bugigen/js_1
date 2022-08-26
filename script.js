let content = document.querySelector("#contentCases");
let product = document.querySelector("#contentMotherboards");
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
    console.log(Object.keys(answer).length);
    for(let item = 0; item < answer.Cases.length; item++) {
      content.innerHTML +=
        `Case name: <b>${answer.Cases[item].name}</b>,
        price: <b>${answer.Cases[item].price}</b> <br>`;
    }
  } catch (e) {
    console.log(e);
  }
}

// getJson().catch(error => error.message);

btn.addEventListener("click", getJson);



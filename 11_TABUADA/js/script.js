// Seleção dos elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberinput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplication");

const multiplicationTitle = document.querySelector("#multiplication-title span");

const multiplicationTable = document.querySelector("#multiplication-operations");

//funções
const createTable = (number, multiplicatiorNumber ) => {
    
     multiplicationTable.innerHTML = "";

     for(i = 1; i <= multiplicatiorNumber; i++){

        const result = number * i;

        const template = `<div class="row">
        <div class="operation" >${number} x ${i}= </div>
        <div class="result">${result}</div>
        </div>`;

        const parser = new DOMParser()

        const htmlTemplate = parser.parseFromString(template, "text/html")

        const row = htmlTemplate.querySelector(".row")

        multiplicationTable.appendChild(row);
     }

   multiplicationTitle.innerText = number;
};

//eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberinput.value;

    const multiplicatiorNumber = +multiplicationInput.value;

    if(!multiplicationNumber || !multiplicatiorNumber)return;

    createTable(multiplicationNumber, multiplicatiorNumber);

});
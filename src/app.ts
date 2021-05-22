import { Invoice } from "./module/Invoice.js";

let oneClient = new Invoice ("masha", 400, 'for web');
let tewClient = new Invoice ("nastja", 500, "for JS");

//console.log(oneClient, tewClient);

oneClient.client = "Marya";

//console.log(oneClient, tewClient);

let invoices: Invoice[] = [];
invoices.push(oneClient);
invoices.push(tewClient);

console.log(invoices);

invoices.forEach(el =>{
    console.log( el.client, el.amount, el.format());
})



// DOM Elements

const list = document.querySelector(".item-list") as HTMLUListElement;

const form = document.querySelector(".new-item-form") as HTMLFormElement,
      type = document.querySelector("#type") as HTMLSelectElement,
      tofrom = document.querySelector("#tofrom") as HTMLInputElement,
      details = document.querySelector("#details") as HTMLInputElement,
      amount = document.querySelector("#amount") as HTMLInputElement;


form.addEventListener("submit", e =>{
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
})




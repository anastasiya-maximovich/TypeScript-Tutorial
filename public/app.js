import { Invoice } from "./module/Invoice.js";
let oneClient = new Invoice("masha", 400, 'for web');
let tewClient = new Invoice("nastja", 500, "for JS");
//console.log(oneClient, tewClient);
oneClient.client = "Marya";
//console.log(oneClient, tewClient);
let invoices = [];
invoices.push(oneClient);
invoices.push(tewClient);
console.log(invoices);
invoices.forEach(el => {
    console.log(el.client, el.amount, el.format());
});
// DOM Elements
const list = document.querySelector(".item-list");
const form = document.querySelector(".new-item-form"), type = document.querySelector("#type"), tofrom = document.querySelector("#tofrom"), details = document.querySelector("#details"), amount = document.querySelector("#amount");
form.addEventListener("submit", e => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});

import { Invoice } from "./module/Invoice.js";
import { Payment } from "./module/Payment.js";
import { ListTemplate } from "./module/ListTemplate.js";
// DOM Elements
//inputs
const form = document.querySelector(".new-item-form"), type = document.querySelector("#type"), tofrom = document.querySelector("#tofrom"), details = document.querySelector("#details"), amount = document.querySelector("#amount");
// 
const ul = document.querySelector("ul"), list = new ListTemplate(ul);
form.addEventListener("submit", e => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});

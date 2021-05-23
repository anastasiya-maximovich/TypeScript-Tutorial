import { Invoice } from "./module/Invoice.js";
import { Payment } from "./module/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./module/ListTemplate.js";

// DOM Elements
//inputs
const form = document.querySelector(".new-item-form") as HTMLFormElement,
      type = document.querySelector("#type") as HTMLSelectElement,
      tofrom = document.querySelector("#tofrom") as HTMLInputElement,
      details = document.querySelector("#details") as HTMLInputElement,
      amount = document.querySelector("#amount") as HTMLInputElement;

// 
const ul = document.querySelector("ul")!,
      list = new ListTemplate(ul);

form.addEventListener("submit", e =>{
    e.preventDefault();

    let doc : HasFormatter;
    if(type.value === "invoice"){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }else{
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    
    list.render(doc, type.value, "end");
})




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

"use strict"

const createUser = (event) => {
    event.preventDefault();
    let amount = +document.querySelector("#amount").value;
    let interest = +document.querySelector("#interest").value;
    let year = +document.querySelector("#years").value;


    let total = +amount * +interest * +year /100;

    showData(total, amount, interest, year);
}

const showData = (total, amount, interest, year) => {
    document.querySelector("#amountOutput").innerHTML = amount;
    document.querySelector("#interestOutput").innerHTML =  interest;
    document.querySelector("#totalOutput").innerHTML =  total;
    document.querySelector("#yearOutput").innerHTML = year;
}

document.querySelector("#interestCalculator").addEventListener("submit", createUser);

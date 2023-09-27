let quantity = document.getElementById("Quantity");
let totalPrice = document.getElementById("totalPrice");
let i = 1;
let isRed = false;
let like = document.getElementById('heart');


function add() {
    i++;
    quantity.innerText = `Quantity: ${i}`;
    totalOut();
}

function remove() {
    if(i <= 0) {
        return false;
    }

    i--;
    quantity.innerText = `Quantity: ${i}`;
    totalOut();
}


function totalOut() {
    let total = i * 200;
    totalPrice.innerText = `Total price: $${total}`
}


function color() {
    if (isRed) {
        like.style.color = ''; 
        isRed = false;
    } else {
        like.style.color = 'red'; 
        isRed = truered;
    }
}

function erase() {
    i = 0;
    quantity.innerText = `Quantity: ${i}`;
    totalOut();
}













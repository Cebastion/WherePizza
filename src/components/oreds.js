let ordersList = document.getElementById("orders")
let menu = document.getElementById("menu")
let blur = document.querySelector(".menu__blur")
let closeMenu = document.querySelector(".menu__close")
let menu__product = document.querySelector(".menu__product")
let order = document.querySelector(".menu__button")
import { basket } from './basket.js'
import { Accepted } from "./OrderAccepted.js";
import { StatusUser, Accounts, User_id } from "./Account.js";

menu.addEventListener("click", () => {
    menu__product.classList.add("active")
    blur.classList.add("active")
    let codeHTMLOrder = ''

    for (let i = 0; i < basket.length; i++) {
        basket[i].user_id = User_id
        codeHTMLOrder +=
            `
        <div class="order__body">
        <div class="order__row">
            <div class="order__img">
                <img src=`+ `${basket[i].img}` + ` alt="">
            </div>
            <div class="order__info">
                <div class="order__title">
                    <span>`+ `${basket[i].name}` + `</span>
                </div>
                <div class="order__info-text">
                    <span>`+ `${basket[i].class}` + `, ` + `${basket[i].size}` + `<p>${basket[i].addIngridient}</p>` + `</span>
                </div>
                <div class="order__row-down">
                    <div class="order__count">
                        <div class="count__minus">-</div>
                        <div class="count">
                            <span>1</span>
                        </div>
                        <div class="count__plus">+</div>
                    </div>
                    <div class="order__price">
                        <span>`+ `${basket[i].amout}` + `$` + `</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
        `
        ordersList.innerHTML = codeHTMLOrder
    }
    closeMenu.addEventListener("click", () => {
        menu__product.classList.remove("active")
        blur.classList.remove("active")
        ordersList.innerHTML = ''
    })



    let menu__price = document.querySelector(".menu__price span")
    let plus = document.querySelectorAll(".count__plus")
    let minus = document.querySelectorAll(".count__minus")
    let counts = document.querySelectorAll(".count span")
    let prices = document.querySelectorAll(".order__price span")
    let saveprices = []

    plus.forEach((btn, index) => {
        let count = counts[index];
        let price = prices[index];
        let saveprice = parseInt(price.textContent);
        saveprices.push(saveprice);

        btn.addEventListener("click", () => {
            count.innerHTML = parseInt(count.textContent) + 1;
            price.innerHTML = parseInt(count.textContent) * saveprices[index] + "$";
            updateTotalPrice();
        });
    });
    minus.forEach((btn, index) => {
        let count = counts[index];
        let price = prices[index];

        btn.addEventListener("click", () => {
            if (parseInt(count.textContent) == 1) {
                return;
            } else {
                count.innerHTML = parseInt(count.textContent) - 1;
                price.innerHTML = parseInt(count.textContent) * saveprices[index] + "$";
                updateTotalPrice();
            }
        });
    });
    function updateTotalPrice() {
        let totalPrice = 0;
        prices.forEach((price) => {
            totalPrice += parseInt(price.textContent);
        });
        menu__price.innerHTML = totalPrice + "$";
    }

    let totalPrice = 0;
    for (let i = 0; i < basket.length; i++) {
        let count = parseInt(counts[i].textContent);
        let price = parseInt(prices[i].textContent);
        totalPrice += count * price;
        saveprices.push(price);
    }
    menu__price.innerHTML = totalPrice + "$";
})

order.addEventListener("click", () => {
    let menu__price = document.querySelector(".menu__price span")
    let bascket__price = document.querySelector(".bascket__price span")
    menu__product.classList.remove("active")
    blur.classList.remove("active")
    ordersList.innerHTML = ''
    if (StatusUser == false) {
        Accounts()
    } else {
        if (basket.length != 0) {
            console.log(basket)
            Accepted()
            PostOrsers()
            basket.splice(0, basket.length)
            menu__price.innerHTML = 0 + "$"
            bascket__price.innerHTML = 0
        }
    }
})

function PostOrsers() {
    fetch('../server/PostOredersHistory.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ myArray: basket })
    })
        .then(response => response.text())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
}

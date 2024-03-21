let title = document.querySelectorAll('.product__title')
let img = document.querySelectorAll('.product__img img')
let price = document.querySelectorAll('.price')
let body = document.getElementById('products')
let openCardProduct = document.getElementById('products');
import { basket } from "./basket.js";

openCardProduct.addEventListener('click', function (event) {
    if (event.target.classList.contains('product__button')) {
        const element = event.target;
        const codeHTMLCardProduct = `<div class='card__product' id='card__product'>
        <div class='blur'></div>
        <div class='card__body'>
            <div class='card__row'>
                <div class='row__img'>
                    <img alt='' src=${img[element.id].src}>
                </div>
                <div class='row__info'>
                    <div class='card__title'>
                        <span>`+ `${title[element.id].textContent}` + `</span>
                        <div class='card__close' id='card__close'>X</div>
                    </div>
                    <div class='card__option-class'>
                        <div class='option__tradition choose'>
                            <span>Traditional</span>
                        </div>
                        <div class='option__slim'>
                            <span>Slim</span>
                        </div>
                    </div>
                    <div class='card__option-size'>
                        <div class='size-20 choose'>
                            <span>20cm</span>
                        </div>
                        <div class='size-28'>
                            <span>28cm</span>
                        </div>
                        <div class='size-33'>
                            <span>33cm</span>
                        </div>
                    </div>
                    <div class='card__option-add'>
                        <div class='add__title'>
                            <span>Add to the pizza</span>
                        </div>
                        <div class='add__row'>
                            <div class='add__body'>
                                <div class='add__img'>
                                    <img src='./image/cheese.svg' alt=''>
                                </div>
                                <div class='add__name'>
                                    <span>Mozzarella</span>
                                </div>
                                <div class='add__price'>
                                    <span>5$</span>
                                </div>
                            </div>
                            <div class='add__body'>
                                <div class='add__img'>
                                    <img src='./image/mushrooms.svg' alt=''>
                                </div>
                                <div class='add__name'>
                                    <span>Champignons</span>
                                </div>
                                <div class='add__price'>
                                    <span>5$</span>
                                </div>
                            </div>
                            <div class='add__body'>
                                <div class='add__img'>
                                    <img src='./image/onion.svg' alt=''>
                                </div>
                                <div class='add__name'>
                                    <span>Red onion</span>
                                </div>
                                <div class='add__price'>
                                    <span>5$</span>
                                </div>
                            </div>
                            <div class='add__body'>
                                <div class='add__img'>
                                    <img src='./image/pepper.svg' alt=''>
                                </div>
                                <div class='add__name'>
                                    <span>Sweet pepper</span>
                                </div>
                                <div class='add__price'>
                                    <span>5$</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='card__row-down'>
                        <div class='card__price'>
                        Amount: <span>`+ ` ${price[element.id].textContent}` + `</span>
                        </div>
                        <button class='card__button'>
                            <span>Buy</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>`
        body.innerHTML += codeHTMLCardProduct;

        let closecard = document.getElementById('card__close');
        let card = document.getElementById('card__product');

        closecard.addEventListener("click", () => {
            card.remove();
        });

        let traditional = document.querySelector(".option__tradition")
        let slim = document.querySelector(".option__slim")
        let saveClass = traditional.querySelector("span").textContent;

        traditional.addEventListener("click", () => {
            traditional.classList.add("choose")
            slim.classList.remove("choose")
            saveClass = traditional.querySelector("span").textContent
        })

        slim.addEventListener("click", () => {
            traditional.classList.remove("choose")
            slim.classList.add("choose")
            saveClass = slim.querySelector("span").textContent
        })

        let size20 = document.querySelector(".size-20")
        let size28 = document.querySelector(".size-28")
        let size33 = document.querySelector(".size-33")
        let saveSize = size20.querySelector("span").textContent

        size20.addEventListener("click", () => {
            size20.classList.add("choose")
            size28.classList.remove("choose")
            size33.classList.remove("choose")
            saveSize = size20.querySelector("span").textContent
        })
        size28.addEventListener("click", () => {
            size20.classList.remove("choose")
            size28.classList.add("choose")
            size33.classList.remove("choose")
            saveSize = size28.querySelector("span").textContent
        })
        size33.addEventListener("click", () => {
            size20.classList.remove("choose")
            size28.classList.remove("choose")
            size33.classList.add("choose")
            saveSize = size33.querySelector("span").textContent
        })

        let AddIngridient = document.querySelectorAll(".add__img")
        let AddIngridientName = document.querySelectorAll(".add__name span")
        let amout = document.querySelectorAll(".add__price span")
        let sum = parseInt(price[element.id].textContent)
        let savesum;
        let AmoutInner = document.querySelector('.card__price span')
        let saveAddIngridient = [];

        AddIngridient[0].addEventListener('click', () => {
            if (AddIngridient[0].classList == "add__img choose") {
                AddIngridient[0].classList.remove("choose")
                sum = sum - parseInt(amout[0].textContent.slice(0, 1))
                savesum = sum;
                AmoutInner.innerHTML = savesum + '$'
                saveAddIngridient = saveAddIngridient.filter(el => el !== AddIngridientName[0].textContent)
            } else {
                AddIngridient[0].classList.add("choose")
                sum = parseInt(amout[0].textContent.slice(0, 1)) + sum
                savesum = sum;
                AmoutInner.innerHTML = savesum + '$'
                saveAddIngridient.push(AddIngridientName[0].textContent)
            }
        })
        AddIngridient[1].addEventListener('click', () => {
            if (AddIngridient[1].classList == "add__img choose") {
                AddIngridient[1].classList.remove("choose")
                sum = sum - parseInt(amout[1].textContent.slice(0, 1))
                savesum = sum;
                AmoutInner.innerHTML = savesum + '$'
                saveAddIngridient = saveAddIngridient.filter(el => el !== AddIngridientName[1].textContent)
            } else {
                AddIngridient[1].classList.add("choose")
                sum = parseInt(amout[1].textContent.slice(0, 1)) + sum
                savesum = sum;
                AmoutInner.innerHTML = savesum + '$'
                saveAddIngridient.push(AddIngridientName[1].textContent)
            }
        })
        AddIngridient[2].addEventListener('click', () => {
            if (AddIngridient[2].classList == "add__img choose") {
                AddIngridient[2].classList.remove("choose")
                sum = sum - parseInt(amout[2].textContent.slice(0, 1))
                savesum = sum;
                AmoutInner.innerHTML = savesum + '$'
                saveAddIngridient = saveAddIngridient.filter(el => el !== AddIngridientName[2].textContent)
            } else {
                AddIngridient[2].classList.add("choose")
                sum = parseInt(amout[2].textContent.slice(0, 1)) + sum
                savesum = sum;
                AmoutInner.innerHTML = savesum + '$'
                saveAddIngridient.push(AddIngridientName[2].textContent)
            }
        })
        AddIngridient[3].addEventListener('click', () => {
            if (AddIngridient[3].classList == "add__img choose") {
                AddIngridient[3].classList.remove("choose")
                sum = sum - parseInt(amout[3].textContent.slice(0, 1))
                savesum = sum;
                AmoutInner.innerHTML = savesum + '$'
                saveAddIngridient = saveAddIngridient.filter(el => el !== AddIngridientName[3].textContent)
            } else {
                AddIngridient[3].classList.add("choose")
                sum = parseInt(amout[3].textContent.slice(0, 1)) + sum
                savesum = sum;
                AmoutInner.innerHTML = savesum + '$'
                saveAddIngridient.push(AddIngridientName[3].textContent)
            }
        })

        let buy = document.querySelector(".card__button")
        buy.addEventListener("click", () => {
            basket.push(
                {
                    name: `${title[element.id].textContent}`,
                    user_id: 0,
                    img: `${img[element.id].src}`,
                    class: `${saveClass}`,
                    size: `${saveSize}`,
                    addIngridient: `${saveAddIngridient}`,
                    amout: `${sum}`
                }
            )
            let pricebasket = document.querySelector(".bascket__price span")
            function Sum() {
                let saveprice = 0;
                for (let i = 0; i < basket.length; i++) {
                    saveprice += parseInt(basket[i].amout);
                }
                return saveprice;
            }
            pricebasket.innerHTML = Sum();
            card.remove();
        })
    }
});

/*
CREATE TABLE Purchases (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    NAME VARCHAR(255) NOT NULL,
    class VARCHAR(255) NOT NULL,
    addIngridient VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    size DECIMAL(10, 2) NOT NULL,
    purchase_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES Users(id)
);

*/
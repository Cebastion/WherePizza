let account__option = document.querySelector(".account__option span")
import { User_id } from "./Account.js";

account__option.addEventListener("click", () => {
    Getorders();
    let HTMLcode =
        `
<div class="history">
    <div class="blur"></div>
    <div class="history__body">
        <div class="history__title">
            <span>History</span>
            <div class="history__close"></div>
        </div>
        <div class="history__orders" id="history__orders">
        </div>
    </div>
</div>
`

    const range = document.createRange();
    const fragment = range.createContextualFragment(HTMLcode);
    document.body.appendChild(fragment);

    let closesHistory = document.querySelector(".history__close")
    closesHistory.addEventListener("click", () => {
        let history = document.querySelector(".history")
        history.remove()
    })
})

function Getorders() {
    fetch('../server/GetOrdersHistory.php')
        .then(res => res.json())
        .then(data => {
            let history__orders = document.getElementById("history__orders")
            let orderhtml = '';
            data.forEach(element => {
                if (User_id == element.user_id) {
                    orderhtml +=
                        `
                    <div class="history__block">
                        <div class="history__name">
                            <span>`+ `${element.name}` + `</span>
                        </div>
                        <div class="history__info">
                            <span>`+ `${element.class}, ${element.size}cm, ${element.addIngridient}` + `</span>
                        </div>
                        <div class="history__price">
                            <span>`+ `${element.price}$` + `</span>
                        </div>
                    </div>
                    `
                }
            });
            history__orders.innerHTML = orderhtml;
        })
        .catch(err => console.log(`Error:${err}`))
}
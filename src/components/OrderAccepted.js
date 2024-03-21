export function Accepted() {
    const htmlCode = `
    <div class="thanks">
    <div class="blur"></div>
    <div class="thanks__body">
        <div class="thanks__img">
            <img src="./image/thasnks.webp" alt="">
        </div>
        <div class="thanks__title">
            <span>Order accepted</span>
        </div>
        <button class="button__thanks">
            Thanks
        </button>
    </div>
</div>
    `
    const range = document.createRange();
    const fragment = range.createContextualFragment(htmlCode);
    document.body.appendChild(fragment);
    
    let CloseAlert = document.querySelector(".button__thanks") 
    let thanks = document.querySelector(".thanks")

    CloseAlert.addEventListener("click", () => {
        thanks.remove()
    })
}
import pizzas from '../API/api.js'
const productlist = document.getElementById('products')

let constuctorHTMLProduct = '';

for (let i = 0; i < pizzas.length; i++) {
    constuctorHTMLProduct += '<div class="product__body"><div class="product__img"><img src='+`.${pizzas[i].img}`+' alt=""></div><div class="product__title"><span>'+`${pizzas[i].name}`+'</span></div><div class="product__info"><span>'+`${pizzas[i].ingredients}`+'</span></div><div class="product__row"><button class="product__button" id='+`${i}`+'>Buy</button><div class="price"><span>'+`${pizzas[i].price}`+'$'+'</span></div></div></div>'
}

productlist.innerHTML = constuctorHTMLProduct


// variables
import defaultProducts from "./products.json";

const cartBtn = document.querySelector(".cart-btn")
const closeCartBtn = document.querySelector(".close-cart")
const cartDOM = document.querySelector(".cart")
const cartOverlay = document.querySelector(".cart-overlay")
const cartItems = document.querySelector(".cart-items")
const cartTotal = document.querySelector(".cart-total")
const cartContent = document.querySelector(".cart-content")
const productsDOM = document.querySelector(".all-products")


// cart

let cart = [];


// getting the products

class Products {
    async getProducts() {
        try {
            let products = defaultProducts.items;
            products = products.map(item=>{
                const {id, productName, variants} = item; 
                const image = item.image.fields.file.url;
                return {
                    productName,
                    weight: variants[0].weight,
                    price: variants[0].price,
                    id,
                    image
                }
            })
            return products
        } catch (error) {
            console.log(error);
        }
    }
}


// display products

class UI {
    displayProducts(products) {
        console.log(products);
        let result = '';
        products.forEach(product => {
            result += `
            <article class="product">
                <div class="product-img-container">
                  <img
                    class="product-pic"
                    src=${product.image}
                    alt="product coffee from costa rica"
                  />
                  <div class="split-btn">
                    <button class="btn-250" data-id=${product.id}>250g</button>
                    <button class="btn-500" data-id="0">500g</button>
                    <button class="btn-1000" data-id="0">1.000g</button>
                  </div>
                </div>
                <p class="product-name dark">${product.productName}</p>
                <p class="product-price">6,90€ – 26,90€</p>
              </article>
            `
        });
        productsDOM.innerHTML = result;
    }
}

// local storage

class Storage {

}


// event listener

//document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI();
    const products = new Products ();

    // get all producs
    products.getProducts().then(products => ui.displayProducts (products))
//});
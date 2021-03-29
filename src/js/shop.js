import products from "./products.json";


function handleCartButtonClick(event) {
  const productId = parseInt(this.dataset.productId, 10);
  const chosenProduct3 = products.find(function (product) {
    if (product.id === productId) {
      return true;
    }
    return false;
  });

  const chosenProduct = products.find((product) => {
    if (product.id === productId) {
      return true;
    }
    return false;
  });

  const chosenProduct2 = products.find((product) => product.id === productId);

  const currentCart = JSON.parse(localStorage.getItem("cart"));

  console.log(currentCart);

  if (currentCart !== null) {
    const updatedCart = [...currentCart, chosenProduct];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  } else {
    localStorage.setItem("cart", JSON.stringify([chosenProduct]));
  }
}

function shop() {
  const productContainer = document.querySelector(".products");
  const productTemplate = `
   ${products
     .map((product, index) => {
       const sortedVariants = product.variants.sort((variant1, variant2) => {
         console.log(index, "variant1", variant1);
         console.log(index, "variant2", variant2);
         if (variant1.price > variant2.price) {
           return 1;
         }
         return -1;
       });
       return `
    <div class="product-box">
    <article class="product">
                <div class="product-img-container">
                  <img
                    class="product-pic"
                    src=${product.imgUrl}
                    alt="product coffee from costa rica"
                  />
                  <div class="split-btn">
                    <button class="btn-250" data-product-id="${
                      product.id
                    }">250g</button>
                    <button class="btn-500" data-product-id="${
                      product.id
                    }">500g</button>
                    <button class="btn-1000" data-product-id="${
                      product.id
                    }">1.000g</button>
                  </div>
      <h3 class="headline">${product.productName}</h3>
      <div class="price">${sortedVariants[0].price / 100} - ${
         sortedVariants[sortedVariants.length - 1].price / 100
       }€</div>
       </article>
       <div class="icon-line-small">
       <object
         type="image/svg+xml"
         data="/images/_icons/icon-coffee-beans-dark.svg"
         alt="coffee beans"
         class="icon-small"
       >
         Your browser does not support SVGs
       </object>
       <object
         type="image/svg+xml"
         data="/images/_icons/icon-french-press-dark.svg"
         alt="french press"
         class="icon-small"
       >
         Your browser does not support SVGs
       </object>
       <object
         type="image/svg+xml"
         data="/images/_icons/icon-coffee-beans2-dark.svg"
         alt="coffee beans shovel"
         class="icon-small"
       >
         Your browser does not support SVGs
       </object>
     </div>
     <div class="anzeigen-btn">
              <a href="./product-page/index.html" class="btn btn-dark">anzeigen</a>
            </div>
    </div>
   `;
     })
     .join("")} 
  `;

  productContainer.innerHTML = productTemplate;

  const addToCartButtons = document.querySelectorAll(".split-btn");

  addToCartButtons.forEach((cartButton) =>
    cartButton.addEventListener("click", handleCartButtonClick)
  );
}

export default shop;

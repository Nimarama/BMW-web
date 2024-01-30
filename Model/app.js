let listProductHTML = document.querySelector(".listProduct");
let listproducts = [];

const addDataToHTML = () => {
   listProductHTML.innerHTML = "";
   if (listproducts.length > 0) {
      listproducts.forEach((products) => {
         let newProduct = document.createElement("div");
         newProduct.classList.add("item");
         newProduct.innerHTML = ` 
         <img src = "${products.image}" alt = "" >
         <h2>${products.name}</h2> 
         <div class="price">${products.price}$</div>
         <button class = "addCart" >Rade all.</button>
         `;
         listProductHTML.appendChild(newProduct);
      });
   }
};

const initApp = () => {
   // get data product
   fetch("products.json")
      .then((response) => response.json())
      .then((data) => {
         listproducts = data;
         addDataToHTML();
      });
};
initApp();

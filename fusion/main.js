const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuIcon = document.querySelector(".icon-menu");
const mobilMenu = document.querySelector(".mobile-menu");

const menuCarritoIcon = document.querySelector(".navbar-shpping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");

const isMovilMenuClosed = mobilMenu.classList.contains("inactivo");

const cardContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);

menuIcon.addEventListener("click", toggleMovilMenu);

menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
  const isCarritoMenuClosed = shoppingCartContainer.classList.contains("inactivo");
  if (!isCarritoMenuClosed) {
    shoppingCartContainer.classList.add("inactivo");
  }
  desktopMenu.classList.toggle("inactivo");
}
function toggleMovilMenu() {
  const isAsideMenuClosed = shoppingCartContainer.classList.contains("inactivo");
  if (!isAsideMenuClosed) {
    shoppingCartContainer.classList.add("inactivo");
  }
  mobilMenu.classList.toggle("inactivo");
}
function toggleCarritoAside() {
  const isMovilMenuClosed = mobilMenu.classList.contains("inactivo");
  if (!isMovilMenuClosed) {
    mobilMenu.classList.add("inactivo");
  }

  shoppingCartContainer.classList.toggle("inactivo");
}

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
  name: "Pantalla",
  price: 200,
  image:
    "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
  name: "Compu",
  price: 500,
  image:
    "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

function renderProducts(arr) {
  for (product of arr) {
    const ProductCard = document.createElement("div");
    ProductCard.classList.add("product-card");

    //product={name,price,image}
    const ProductImg = document.createElement("img");
    ProductImg.setAttribute("src", product.image);

    const ProductInfo = document.createElement("div");
    ProductInfo.classList.add("product-info");

    const ProductInfoDiv = document.createElement("div");

    const ProductPrice = document.createElement("p");
    ProductPrice.innerText = "$" + product.price;

    const ProductName = document.createElement("p");
    ProductName.innerText = product.name;

    const ProductInfoFigure = document.createElement("figure");
    const ProductImgCart = document.createElement("img");

    ProductImgCart.setAttribute("src", "../icons/bt_add_to_cart.svg");

    ProductInfoDiv.appendChild(ProductPrice);
    ProductInfoDiv.appendChild(ProductName);

    ProductInfoFigure.appendChild(ProductImgCart);

    ProductInfo.appendChild(ProductInfoDiv);
    ProductInfo.appendChild(ProductInfoFigure);

    ProductCard.appendChild(ProductImg);
    ProductCard.appendChild(ProductInfo);

    cardContainer.appendChild(ProductCard);
  }
}

renderProducts(productList);

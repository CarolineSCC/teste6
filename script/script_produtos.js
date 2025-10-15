const cartBox = document.getElementById("cartBox");
const cartPanel = document.getElementById("cartPanel");
const cartIcon = document.getElementById("cartIcon");
const clickSound = document.getElementById("clickSound");
const cartItems = document.getElementById("cartItems");

let cartOpen = false;
let cartContent = [];

cartBox.addEventListener("click", () => {
  clickSound.play();
  cartOpen = !cartOpen;

  cartPanel.style.display = cartOpen ? "block" : "none";
  cartIcon.src = cartOpen ? "assets/cart-open.png" : "assets/cart.png";
});

// Comprar botão
document.querySelectorAll(".buy-button").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const productName = btn.parentElement.querySelector("h2").innerText;
    cartContent.push(productName);
    updateCart();
    clickSound.play();
  });
});

function updateCart() {
  cartItems.innerHTML = "";
  cartContent.forEach((item, i) => {
    const li = document.createElement("li");
    li.innerText = `${item}`;
    cartItems.appendChild(li);
  });
}

const dataEscolhida = document.getElementById("dataPedido").value;
console.log(dataEscolhida); // Exemplo: "2025-09-17"






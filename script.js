let cart = [];
let total = 0;

const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");
const cartCount = document.getElementById("cart-count");

// ADD TO CART
document.querySelectorAll(".add-cart").forEach(btn => {
    btn.addEventListener("click", () => {
        let box = btn.closest(".box");
        let name = box.querySelector("h2").innerText;
        let price = parseInt(box.querySelector(".price").innerText.replace("₹",""));

        cart.push({ name, price });
        total += price;

        updateCart();
    });
});

// BUY NOW
document.querySelectorAll(".buy-now").forEach(btn => {
    btn.addEventListener("click", () => {
        let box = btn.closest(".box");
        let name = box.querySelector("h2").innerText;
        let price = box.querySelector(".price").innerText;

        alert(`Buying: ${name}\nPrice: ${price}`);
    });
});

// UPDATE CART UI
function updateCart() {
    cartItems.innerHTML = "";
    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${item.name} - ₹${item.price}
        <button class="remove-btn" onclick="removeItem(${index})">X</button>`;
        cartItems.appendChild(li);
    });

    totalPrice.innerText = total;
    cartCount.innerText = cart.length;
}

// REMOVE ITEM
function removeItem(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 1999,
        image: "https://i5.walmartimages.com/asr/55501d33-1f42-48d8-b46f-79492dfbd036.928b61d27bedb51b0ebfb41d9a945a45.jpeg"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 2499,
        image: "https://www.bhphotovideo.com/images/images2500x2500/apple_mmfr2ll_a_watch_sport_42mm_smartwatch_1241433.jpg"
    },
    {
        id: 3,
        name: "Sneakers",
        price: 2999,
        image: "https://i.pinimg.com/originals/6c/33/08/6c33081760b5d94ce9680ad7b77a7c1f.jpg"
    },
    {
        id: 4,
        name: "Prismacolor Colored Pencils",
        price: 14999,
        image: "https://m.media-amazon.com/images/I/81AVlqcU6ZL._AC_SL1500_.jpg"
    },
    {
        id: 5,
        name: "Himi Watercolors",
        price: 15199,
        image: "https://m.media-amazon.com/images/I/61n1kUUXseL._AC_.jpg"
    },
    {
        id: 6,
        name: "A4 Art Sketchbook",
        price: 499,
        image: "https://www.gosupps.com/media/catalog/product/7/1/71mrpkslSuL_1.jpg"
    }
];


let cart = [];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const totalAmount = document.getElementById("total-amount");


function displayProducts() {
    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        productList.appendChild(card);
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        const li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - ₹${item.price}
            <button onclick="removeFromCart(${index})">X</button>
        `;
        cartItems.appendChild(li);
    });

    cartCount.textContent = cart.length;
    totalAmount.textContent = total;
}

displayProducts();

const products = [
    // --- Electronics ---
    { id: 1, name: "Amazon Essentials Wireless Noise-Canceling Bluetooth Headphones", price: 59.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "Smart Watch with Real-Time Fitness Tracker & Heart Rate Monitor", price: 199.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80" },
    { id: 3, name: "Mechanical Gaming Keyboard with Custom RGB Backlit Space Lighting", price: 84.50, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=500&q=80" },
    { id: 4, name: "4K Ultra HD Action Camera with Waterproof Housing & Stabilization", price: 119.00, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=500&q=80" },
    { id: 5, name: "Wireless Ergonomic Gaming Mouse with Programmable Buttons", price: 45.99, image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=500&q=80" },
    { id: 6, name: "Portable Bluetooth Speaker with Deep Bass & IPX7 Waterproofing", price: 34.99, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=500&q=80" },

    // --- Home & Office ---
    { id: 7, name: "Ergonomic Multi-Adjustable High-Back Mesh Office Chair", price: 149.00, image: "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=500&q=80" },
    { id: 8, name: "Minimalist Wooden Writing Desk with Integrated Storage Drawers", price: 189.50, image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=500&q=80" },
    { id: 9, name: "Dimmable LED Desk Lamp with USB Charging Port & Touch Controls", price: 24.99, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=500&q=80" },
    { id: 10, name: "Stainless Steel Electric Tea Kettle with Automatic Shut-Off", price: 39.99, image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=500&q=80" },
    { id: 11, name: "Hydro Ceramic Coffee Mug with Spill-Proof Bamboo Lid", price: 18.00, image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=500&q=80" },

    // --- Lifestyle & Apparel ---
    { id: 12, name: "Classic Minimalist Leather Quartz Watch with Scratch-Resistant Glass", price: 75.00, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=500&q=80" },
    { id: 13, name: "Polarized Retro Sunglasses with UV400 Protection for Men & Women", price: 22.50, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=500&q=80" },
    { id: 14, name: "Premium Vintage Canvas Backpack with Laptop Sleeve & Leather Straps", price: 48.99, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80" },
    { id: 15, name: "Unisex Breathable Lightweight Mesh Running Shoes", price: 65.00, image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=500&q=80" },

    // --- Fitness & Outdoors ---
    { id: 16, name: "Insulated Stainless Steel Water Bottle with Straw Lid (32 oz)", price: 26.99, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=500&q=80" },
    { id: 17, name: "High-Density Yoga Mat with Non-Slip Texture & Carrying Strap", price: 29.95, image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=500&q=80" },
    { id: 18, name: "Adjustable Smart Dumbbell Weight Set (Pair) for Home Workouts", price: 249.99, image: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?auto=format&fit=crop&w=500&q=80" },

    // --- Photography & Media ---
    { id: 19, name: "Professional Aluminum Camera Tripod with 360-Degree Ball Head", price: 54.50, image: "https://images.unsplash.com/photo-1599666505317-7ba144c8022a?auto=format&fit=crop&w=500&q=80" },
    { id: 20, name: "Studio Ring Light with Extendable Tripod Stand & Phone Holder", price: 38.99, image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=500&q=80" }
];

let cart = [];

// Updated function to render high-fidelity Amazon cards
function displayProducts() {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return;
    productGrid.innerHTML = ""; 

    products.forEach(product => {
        // Split the price to style dollars and cents separately
        const priceParts = product.price.toFixed(2).split('.');
        const dollars = priceParts[0];
        const cents = priceParts[1];

        const card = document.createElement('div');
        card.classList.add('box');
        card.innerHTML = `
            <div class="box-img" style="background-image: url('${product.image}');"></div>
            <h3>${product.name}</h3>
            <p class="price">
                <span class="price-symbol">$</span><span class="price-whole">${dollars}</span><span class="price-fraction">${cents}</span>
            </p>
            <button class="add-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productGrid.appendChild(card);
    });
}


document.getElementById('search-input').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = "";

    const filtered = products.filter(p => p.name.toLowerCase().includes(term));

    if (filtered.length === 0) {
        productGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; font-size: 1.2rem; color: #565959; padding: 40px 0;">No results found.</p>`;
        return;
    }

    filtered.forEach(product => {
        const priceParts = product.price.toFixed(2).split('.');
        const dollars = priceParts[0];
        const cents = priceParts[1];

        const card = document.createElement('div');
        card.classList.add('box');
        card.innerHTML = `
            <div class="box-img" style="background-image: url('${product.image}');"></div>
            <h3>${product.name}</h3>
            <p class="price">
                <span class="price-symbol">$</span><span class="price-whole">${dollars}</span><span class="price-fraction">${cents}</span>
            </p>
            <button class="add-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productGrid.appendChild(card);
    });
});

// State Mutation & Cart Controllers
function addToCart(productId) {
    const item = products.find(p => p.id === productId);
    if(item) {
        cart.push(item);
        updateCartUI();
        openCartDrawer();
    }
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
    const itemsContainer = document.getElementById('cart-items-container');
    const totalContainer = document.getElementById('cart-total-price');
    
    if(cart.length === 0) {
        itemsContainer.innerHTML = `<p class="empty-message">Your Amazon Cart is empty.</p>`;
        totalContainer.innerText = "$0.00";
        return;
    }

    itemsContainer.innerHTML = "";
    let totalSum = 0;

    cart.forEach((item, index) => {
        totalSum += item.price;
        const row = document.createElement('div');
        row.classList.add('cart-item-row');
        row.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p style="font-weight:bold;">$${item.price.toFixed(2)}</p>
            </div>
            <button style="color:#007185; background:none; border:none; cursor:pointer; font-size:0.8rem;" onclick="removeFromCart(${index})">Delete</button>
        `;
        itemsContainer.appendChild(row);
    });

    totalContainer.innerText = `$${totalSum.toFixed(2)}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

// Drawer Visibility Toggle Rules
function openCartDrawer() {
    document.getElementById('cart-sidebar').classList.add('open');
    document.getElementById('cart-overlay').classList.add('open');
}

function closeCartDrawer() {
    document.getElementById('cart-sidebar').classList.remove('remove');
    document.getElementById('cart-sidebar').classList.remove('open');
    document.getElementById('cart-overlay').classList.remove('open');
}

// Banner Slide Transitions Asset Array
const bannerImages = [
    "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1500&q=80"
];
let currentSlideIndex = 0;

function updateSliderImage() {
    const sliderElement = document.getElementById('hero-slider');
    if(sliderElement) {
        sliderElement.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0.1), #eaeded), url('${bannerImages[currentSlideIndex]}')`;
    }
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    if (currentSlideIndex >= bannerImages.length) currentSlideIndex = 0;
    if (currentSlideIndex < 0) currentSlideIndex = bannerImages.length - 1;
    updateSliderImage();
}

// Automatically cycle slider views
setInterval(() => { changeSlide(1); }, 6000);

// Input Search Engine Logic
document.getElementById('search-input').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = "";

    const filtered = products.filter(p => p.name.toLowerCase().includes(term));

    if (filtered.length === 0) {
        productGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; font-size: 1.2rem; color: #565959; padding: 40px 0;">No results found.</p>`;
        return;
    }

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('box');
        card.innerHTML = `
            <h3>${product.name}</h3>
            <div class="box-img" style="background-image: url('${product.image}');"></div>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button class="add-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productGrid.appendChild(card);
    });
});

// Structural Binding Setup Controllers
document.getElementById('cart-nav-trigger').addEventListener('click', openCartDrawer);
document.getElementById('close-cart').addEventListener('click', closeCartDrawer);
document.getElementById('cart-overlay').addEventListener('click', closeCartDrawer);

// Guaranteed DOM Load Mounting Hook
window.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    updateSliderImage();
});
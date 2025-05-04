
// Light/Dark Mode Toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
    });

    // Apply saved theme
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-theme");
    }
  }

  // Load cart and wishlist counts
  updateHeaderCounts();
});

// Update cart and wishlist counters in the header
function updateHeaderCounts() {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
  const cartCount = document.getElementById("cart-count");
  const wishCount = document.getElementById("wish-count");
  if (cartCount) cartCount.textContent = cart.length;
  if (wishCount) wishCount.textContent = wishlist.length;
}

// Add to cart
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  showToast("Added to Cart!");
  updateHeaderCounts();
}

// Add to wishlist
function addToWishlist(product) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
  wishlist.push(product);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  showToast("Added to Wishlist!");
  updateHeaderCounts();
}

// Toast message
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.classList.add("show");
  }, 100);
  setTimeout(() => {
    toast.classList.remove("show");
    toast.remove();
  }, 3000);
}

// Buy Now redirects to checkout
function buyNow(product) {
  addToCart(product);
  window.location.href = "checkout.html";
}

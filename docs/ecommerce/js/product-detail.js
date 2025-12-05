// Product Detail Page JavaScript
// Sessions Cannabis

let currentProduct = null;
let currentQuantity = 1;

// Get product ID from URL
function getProductIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get('id'));
}

// Render stars
function renderStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars += '<i class="bi bi-star-fill"></i>';
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars += '<i class="bi bi-star-half"></i>';
    } else {
      stars += '<i class="bi bi-star"></i>';
    }
  }
  return stars;
}

// Render product detail
function renderProductDetail(product) {
  const isWishlisted = isInWishlist(product.id);

  return `
    <div class="col-lg-6 mb-4">
      <div class="product-image-main">
        <img src="${product.imageUrl}" alt="${product.name}" id="mainImage">
      </div>
    </div>

    <div class="col-lg-6">
      <div class="product-info">
        <div class="d-flex justify-content-between align-items-start mb-3">
          <div>
            <span class="badge bg-secondary mb-2">${product.category}</span>
            <h1>${product.name}</h1>
          </div>
          <button class="btn btn-outline-primary ${isWishlisted ? 'active' : ''}" id="wishlistBtn" onclick="toggleProductWishlist()">
            <i class="bi bi-heart${isWishlisted ? '-fill' : ''}"></i>
          </button>
        </div>

        <div class="d-flex align-items-center gap-3 mb-3">
          <div class="star-rating">
            ${renderStars(product.rating)}
          </div>
          <span class="text-muted">(${product.reviews} reviews)</span>
        </div>

        <p class="lead">${product.description}</p>

        <div class="product-price">$${product.price.toFixed(2)}</div>

        <div class="product-meta">
          <div class="product-meta-item">
            <span class="product-meta-label">THC Content</span>
            <span class="product-meta-value">${product.thc}</span>
          </div>
          <div class="product-meta-item">
            <span class="product-meta-label">CBD Content</span>
            <span class="product-meta-value">${product.cbd}</span>
          </div>
          <div class="product-meta-item">
            <span class="product-meta-label">Strain Type</span>
            <span class="product-meta-value">${product.strainType}</span>
          </div>
          <div class="product-meta-item">
            <span class="product-meta-label">Weight</span>
            <span class="product-meta-value">${product.weight}</span>
          </div>
        </div>

        <div class="mb-3">
          <h6 class="mb-2">Effects</h6>
          <div class="effects-list">
            ${product.effects.map(effect => `<span class="effect-badge">${effect}</span>`).join('')}
          </div>
        </div>

        <div class="mb-3">
          <h6 class="mb-2">Terpenes</h6>
          <p class="text-muted">${product.terpenes.join(', ')}</p>
        </div>

        <div class="quantity-selector">
          <button class="quantity-btn" onclick="decreaseQuantity()">
            <i class="bi bi-dash"></i>
          </button>
          <span class="quantity-display" id="quantityDisplay">1</span>
          <button class="quantity-btn" onclick="increaseQuantity()">
            <i class="bi bi-plus"></i>
          </button>
        </div>

        <div class="d-flex gap-3">
          <button class="btn btn-primary btn-lg flex-grow-1" onclick="addProductToCart()">
            <i class="bi bi-cart-plus"></i>
            Add to Cart - $${(product.price * currentQuantity).toFixed(2)}
          </button>
          <button class="btn btn-outline-primary btn-lg" onclick="buyNow()">
            Buy Now
          </button>
        </div>

        <div class="info-card">
          <h6 class="mb-3"><i class="bi bi-info-circle me-2"></i>Product Information</h6>
          <ul class="mb-0">
            <li>Lab tested for quality and potency</li>
            <li>Stored in optimal conditions</li>
            <li>Compliant with local regulations</li>
            <li>Discreet packaging</li>
            <li>Satisfaction guaranteed</li>
          </ul>
        </div>
      </div>
    </div>
  `;
}

// Increase quantity
function increaseQuantity() {
  currentQuantity++;
  document.getElementById('quantityDisplay').textContent = currentQuantity;
  updateAddToCartButton();
}

// Decrease quantity
function decreaseQuantity() {
  if (currentQuantity > 1) {
    currentQuantity--;
    document.getElementById('quantityDisplay').textContent = currentQuantity;
    updateAddToCartButton();
  }
}

// Update add to cart button price
function updateAddToCartButton() {
  if (currentProduct) {
    const btn = document.querySelector('.btn-primary.btn-lg');
    if (btn) {
      btn.innerHTML = `
        <i class="bi bi-cart-plus"></i>
        Add to Cart - $${(currentProduct.price * currentQuantity).toFixed(2)}
      `;
    }
  }
}

// Toggle wishlist
function toggleProductWishlist() {
  if (currentProduct) {
    const btn = document.getElementById('wishlistBtn');
    const icon = btn.querySelector('i');
    const isAdded = toggleWishlist(currentProduct);

    if (isAdded) {
      btn.classList.add('active');
      icon.classList.remove('bi-heart');
      icon.classList.add('bi-heart-fill');
    } else {
      btn.classList.remove('active');
      icon.classList.remove('bi-heart-fill');
      icon.classList.add('bi-heart');
    }
  }
}

// Add to cart
function addProductToCart() {
  if (currentProduct) {
    for (let i = 0; i < currentQuantity; i++) {
      addToCart(currentProduct);
    }

    const btn = event.currentTarget;
    const originalHTML = btn.innerHTML;

    btn.innerHTML = '<i class="bi bi-check2"></i> Added to Cart!';
    btn.classList.add('btn-success');
    btn.classList.remove('btn-primary');
    btn.disabled = true;

    setTimeout(() => {
      btn.innerHTML = originalHTML;
      btn.classList.add('btn-primary');
      btn.classList.remove('btn-success');
      btn.disabled = false;
    }, 2000);

    // Reset quantity
    currentQuantity = 1;
    document.getElementById('quantityDisplay').textContent = '1';
  }
}

// Buy now - add to cart and go to cart page
function buyNow() {
  if (currentProduct) {
    for (let i = 0; i < currentQuantity; i++) {
      addToCart(currentProduct);
    }
    window.location.href = 'cart.html';
  }
}

// Load product
function loadProduct() {
  const productId = getProductIdFromURL();

  if (!productId) {
    document.getElementById('productContent').innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="bi bi-exclamation-triangle fs-1 text-warning"></i>
        <h3 class="mt-3">Product not found</h3>
        <p class="text-muted">The product you're looking for doesn't exist.</p>
        <a href="shop.html" class="btn btn-primary mt-3">Browse Products</a>
      </div>
    `;
    return;
  }

  currentProduct = getProductById(productId);

  if (!currentProduct) {
    document.getElementById('productContent').innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="bi bi-exclamation-triangle fs-1 text-warning"></i>
        <h3 class="mt-3">Product not found</h3>
        <p class="text-muted">The product you're looking for doesn't exist.</p>
        <a href="shop.html" class="btn btn-primary mt-3">Browse Products</a>
      </div>
    `;
    return;
  }

  // Update page title and breadcrumb
  document.getElementById('pageTitle').textContent = `${currentProduct.name} - Sessions Cannabis`;
  document.getElementById('breadcrumbProduct').textContent = currentProduct.name;

  // Render product
  document.getElementById('productContent').innerHTML = renderProductDetail(currentProduct);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  loadProduct();
  updateCartBadge();
  updateWishlistBadge();
});

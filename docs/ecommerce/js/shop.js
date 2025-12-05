// Shop Page JavaScript - Product Filtering and Sorting
// Sessions Cannabis

let currentProducts = [...cannabisProducts];
let currentFilters = {
  category: 'All',
  strainType: 'All',
  maxPrice: 100,
  sortBy: 'featured'
};

// Render product card (from main.js)
function renderProductCard(product) {
  const isWishlisted = isInWishlist(product.id);
  const stars = renderStars(product.rating);

  return `
    <div class="card-premium product-card" data-product-id="${product.id}" onclick="goToProduct(${product.id})" style="cursor: pointer;">
      <div class="position-relative">
        <button class="btn btn-sm position-absolute top-0 end-0 m-2 favorite-btn ${isWishlisted ? 'active' : ''}"
                onclick="handleFavoriteClick(event, ${product.id})">
          <i class="bi bi-heart${isWishlisted ? '-fill' : ''}"></i>
        </button>

        ${product.id <= 4 ? '<span class="period-badge badge-new position-absolute top-0 start-0 m-2" style="float: none; background: #00c9a7; color: white;">NEW</span>' : ''}

        <div class="product-image">
          <img src="${product.imageUrl}" alt="${product.name}" class="img-fluid">
        </div>
      </div>

      <div class="card-premium-body">
        <div class="d-flex justify-content-between align-items-start mb-2">
          <h5 class="card-premium-title mb-0" style="font-size: 1rem;">${product.name}</h5>
          <span class="badge bg-secondary" style="font-size: 0.65rem;">${product.strainType}</span>
        </div>

        <p class="card-premium-text mb-2" style="min-height: 40px; font-size: 0.875rem;">${product.description}</p>

        <div class="d-flex justify-content-between align-items-center mb-2">
          <small class="text-muted">THC: ${product.thc}</small>
          <small class="text-muted">${product.weight}</small>
        </div>

        <div class="d-flex justify-content-between align-items-center mb-3">
          <span class="price">$${product.price.toFixed(2)}</span>
          <div class="star-rating">
            ${stars}
            <small class="text-primary ms-1">(${product.reviews})</small>
          </div>
        </div>

        <button class="btn btn-outline-primary w-100 add-to-cart-btn"
                onclick="handleAddToCart(event, ${product.id})">
          <i class="bi bi-cart-plus"></i>
          Add to Cart
        </button>
      </div>
    </div>
  `;
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

// Apply filters
function applyFilters() {
  let filtered = [...cannabisProducts];

  // Filter by category
  if (currentFilters.category !== 'All') {
    filtered = filtered.filter(p => p.category === currentFilters.category);
  }

  // Filter by strain type
  if (currentFilters.strainType !== 'All') {
    filtered = filtered.filter(p => p.strainType === currentFilters.strainType);
  }

  // Filter by price
  filtered = filtered.filter(p => p.price <= currentFilters.maxPrice);

  // Sort products
  filtered = sortProducts(filtered, currentFilters.sortBy);

  currentProducts = filtered;
  renderProducts();
}

// Sort products
function sortProducts(products, sortBy) {
  const sorted = [...products];

  switch (sortBy) {
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price);
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    default:
      return sorted; // Featured order (original)
  }
}

// Render products to grid
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const count = document.getElementById('productCount');

  if (!grid) return;

  if (currentProducts.length === 0) {
    grid.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="bi bi-inbox fs-1 text-muted"></i>
        <p class="mt-3 text-muted">No products match your filters</p>
        <button class="btn btn-primary" onclick="clearFilters()">Clear Filters</button>
      </div>
    `;
    if (count) count.textContent = 'Showing 0 products';
    return;
  }

  grid.innerHTML = currentProducts.map(p => renderProductCard(p)).join('');
  if (count) count.textContent = `Showing ${currentProducts.length} product${currentProducts.length !== 1 ? 's' : ''}`;
}

// Clear all filters
function clearFilters() {
  // Reset radio buttons
  document.getElementById('catAll').checked = true;
  document.getElementById('strainAll').checked = true;

  // Reset price range
  document.getElementById('priceRange').value = 100;
  document.getElementById('priceValue').textContent = '100';

  // Reset sort
  document.getElementById('sortBy').value = 'featured';

  // Reset filters object
  currentFilters = {
    category: 'All',
    strainType: 'All',
    maxPrice: 100,
    sortBy: 'featured'
  };

  // Apply filters
  applyFilters();
}

// Handle favorite click
function handleFavoriteClick(event, productId) {
  event.stopPropagation();
  const product = getProductById(productId);

  if (product) {
    const btn = event.currentTarget;
    const icon = btn.querySelector('i');
    const isAdded = toggleWishlist(product);

    if (isAdded) {
      btn.classList.add('active');
      icon.classList.remove('bi-heart');
      icon.classList.add('bi-heart-fill');

      // Trigger confetti when adding to wishlist
      if (typeof triggerConfettiFromElement === 'function') {
        triggerConfettiFromElement(btn);
      }
    } else {
      btn.classList.remove('active');
      icon.classList.remove('bi-heart-fill');
      icon.classList.add('bi-heart');
    }
  }
}

// Handle add to cart
function handleAddToCart(event, productId) {
  event.stopPropagation();
  const product = getProductById(productId);

  if (product) {
    const btn = event.currentTarget;
    const originalHTML = btn.innerHTML;

    addToCart(product);

    // Trigger confetti celebration
    if (typeof triggerConfettiFromElement === 'function') {
      triggerConfettiFromElement(btn);
    }

    btn.innerHTML = '<i class="bi bi-check2"></i> Added!';
    btn.classList.add('btn-success');
    btn.classList.remove('btn-outline-primary');
    btn.disabled = true;

    setTimeout(() => {
      btn.innerHTML = originalHTML;
      btn.classList.add('btn-outline-primary');
      btn.classList.remove('btn-success');
      btn.disabled = false;
    }, 2000);
  }
}

// Navigate to product page
function goToProduct(productId) {
  window.location.href = `product.html?id=${productId}`;
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
  // Category filter
  document.querySelectorAll('input[name="category"]').forEach(radio => {
    radio.addEventListener('change', function() {
      currentFilters.category = this.value;
      applyFilters();
    });
  });

  // Strain type filter
  document.querySelectorAll('input[name="strainType"]').forEach(radio => {
    radio.addEventListener('change', function() {
      currentFilters.strainType = this.value;
      applyFilters();
    });
  });

  // Price range filter
  const priceRange = document.getElementById('priceRange');
  const priceValue = document.getElementById('priceValue');

  if (priceRange && priceValue) {
    priceRange.addEventListener('input', function() {
      priceValue.textContent = this.value;
      currentFilters.maxPrice = parseInt(this.value);
      applyFilters();
    });
  }

  // Sort dropdown
  const sortBy = document.getElementById('sortBy');
  if (sortBy) {
    sortBy.addEventListener('change', function() {
      currentFilters.sortBy = this.value;
      applyFilters();
    });
  }

  // Initial render
  applyFilters();

  // Update badges
  updateCartBadge();
  updateWishlistBadge();
});

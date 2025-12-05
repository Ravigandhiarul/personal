// Search Results Page JavaScript
// Sessions Cannabis

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

// Render product card
function renderProductCard(product) {
  const isWishlisted = isInWishlist(product.id);
  const stars = renderStars(product.rating);

  return `
    <div class="col-md-6 col-lg-4 mb-4">
      <div class="card-premium product-card" data-product-id="${product.id}">
        <div class="position-relative">
          <button class="btn btn-sm position-absolute top-0 end-0 m-2 favorite-btn ${isWishlisted ? 'active' : ''}"
                  onclick="handleFavoriteClick(event, ${product.id})">
            <i class="bi bi-heart${isWishlisted ? '-fill' : ''}"></i>
          </button>

          ${product.id <= 4 ? '<span class="period-badge badge-new position-absolute top-0 start-0 m-2" style="float: none; background: #00c9a7; color: white;">NEW</span>' : ''}

          <div class="product-image" onclick="goToProduct(${product.id})">
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
    </div>
  `;
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

// Get search query from URL
function getSearchQuery() {
  const params = new URLSearchParams(window.location.search);
  return params.get('q') || '';
}

// Perform search and display results
function displaySearchResults() {
  const query = getSearchQuery();
  const searchQueryEl = document.getElementById('searchQuery');
  const resultCountEl = document.getElementById('resultCount');
  const searchResultsEl = document.getElementById('searchResults');

  if (!query) {
    searchQueryEl.textContent = '';
    resultCountEl.textContent = 'No search query provided';
    searchResultsEl.innerHTML = `
      <div class="col-12">
        <div class="no-results">
          <i class="bi bi-search fs-1 text-muted mb-3"></i>
          <h3>No Search Query</h3>
          <p class="text-muted mb-4">Please enter a search term to find products</p>
          <a href="shop.html" class="btn btn-primary">
            <i class="bi bi-shop me-2"></i>
            Browse All Products
          </a>
        </div>
      </div>
    `;
    return;
  }

  // Display query
  searchQueryEl.textContent = query;

  // Perform search
  const results = searchProducts(query);

  // Display count
  resultCountEl.textContent = `Found ${results.length} product${results.length !== 1 ? 's' : ''}`;

  // Display results
  if (results.length === 0) {
    searchResultsEl.innerHTML = `
      <div class="col-12">
        <div class="no-results">
          <i class="bi bi-inbox fs-1 text-muted mb-3"></i>
          <h3>No Results Found</h3>
          <p class="text-muted mb-4">We couldn't find any products matching "${query}"</p>
          <div class="d-flex gap-3 justify-content-center flex-wrap">
            <a href="shop.html" class="btn btn-primary">
              <i class="bi bi-shop me-2"></i>
              Browse All Products
            </a>
            <button class="btn btn-outline-primary" onclick="window.history.back()">
              <i class="bi bi-arrow-left me-2"></i>
              Go Back
            </button>
          </div>
        </div>
      </div>
    `;
  } else {
    searchResultsEl.innerHTML = results.map(product => renderProductCard(product)).join('');
  }
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
  displaySearchResults();
  updateCartBadge();
  updateWishlistBadge();
});

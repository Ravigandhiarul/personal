// Wishlist Page JavaScript
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

// Render wishlist items
function renderWishlistItems() {
  const wishlist = getWishlist();
  const wishlistItemsContainer = document.getElementById('wishlistItems');

  if (!wishlistItemsContainer) return;

  if (wishlist.length === 0) {
    wishlistItemsContainer.innerHTML = `
      <div class="empty-wishlist">
        <i class="bi bi-heart fs-1 text-muted mb-3"></i>
        <h3>Your wishlist is empty</h3>
        <p class="text-muted mb-4">Save your favorite products for later</p>
        <a href="shop.html" class="btn btn-primary">
          <i class="bi bi-shop me-2"></i>
          Browse Products
        </a>
      </div>
    `;
    updateWishlistSummary();
    return;
  }

  wishlistItemsContainer.innerHTML = wishlist.map(item => {
    const stars = renderStars(item.rating || 4.5);

    return `
      <div class="wishlist-item" data-product-id="${item.id}">
        <div class="wishlist-item-image">
          <img src="${item.imageUrl}" alt="${item.name}">
        </div>

        <div class="wishlist-item-details">
          <h5 class="wishlist-item-name">${item.name}</h5>
          <div class="wishlist-item-meta">
            <span>${item.category || 'Product'}</span>
            ${item.strainType ? `<span class="ms-2">• ${item.strainType}</span>` : ''}
            ${item.weight ? `<span class="ms-2">• ${item.weight}</span>` : ''}
          </div>
          <div class="star-rating mb-2" style="color: #F18A00;">
            ${stars}
            <small class="text-primary ms-1">(${item.reviews || 0})</small>
          </div>
          <div class="wishlist-item-price">$${item.price.toFixed(2)}</div>
        </div>

        <div class="wishlist-actions">
          <button class="btn btn-outline-primary" onclick="addWishlistItemToCart(${item.id})">
            <i class="bi bi-cart-plus"></i>
            Add to Cart
          </button>
          <button class="btn btn-outline-danger" onclick="removeWishlistItem(${item.id})">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  updateWishlistSummary();
}

// Update wishlist summary
function updateWishlistSummary() {
  const wishlist = getWishlist();

  const count = wishlist.length;
  const total = wishlist.reduce((sum, item) => sum + item.price, 0);

  const countEl = document.getElementById('wishlistCount');
  const totalEl = document.getElementById('wishlistTotal');
  const addAllBtn = document.getElementById('addAllBtn');

  if (countEl) countEl.textContent = count;
  if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
  if (addAllBtn) addAllBtn.disabled = count === 0;
}

// Add single wishlist item to cart
function addWishlistItemToCart(productId) {
  const wishlist = getWishlist();
  const item = wishlist.find(i => i.id === productId);

  if (item) {
    // Get full product data
    const product = getProductById(productId);

    if (product) {
      addToCart(product);

      // Visual feedback
      const btn = event.currentTarget;
      const originalHTML = btn.innerHTML;

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
}

// Remove item from wishlist
function removeWishlistItem(productId) {
  removeFromWishlist(productId);
  renderWishlistItems();
  updateWishlistBadge();
  showNotification('Item removed from wishlist', 'info');
}

// Add all wishlist items to cart
function addAllToCart() {
  const wishlist = getWishlist();

  if (wishlist.length === 0) {
    showNotification('Your wishlist is empty', 'warning');
    return;
  }

  let addedCount = 0;

  wishlist.forEach(item => {
    const product = getProductById(item.id);
    if (product) {
      addToCart(product);
      addedCount++;
    }
  });

  // Trigger explosive confetti for adding all items
  if (typeof triggerExplosiveConfetti === 'function') {
    triggerExplosiveConfetti();
  }

  showNotification(`Added ${addedCount} item${addedCount !== 1 ? 's' : ''} to cart!`, 'success');

  // Update badge
  updateCartBadge();
}

// Clear entire wishlist
function clearWishlist() {
  if (confirm('Are you sure you want to clear your entire wishlist?')) {
    localStorage.removeItem('sessions_wishlist');
    renderWishlistItems();
    updateWishlistBadge();
    showNotification('Wishlist cleared', 'info');
  }
}

// Initialize wishlist page
document.addEventListener('DOMContentLoaded', function() {
  renderWishlistItems();
  updateCartBadge();
  updateWishlistBadge();
});

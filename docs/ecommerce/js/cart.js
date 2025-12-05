// Shopping Cart Management - Sessions Cannabis
// Using localStorage for persistence

// Get cart from localStorage
function getCart() {
  const cart = localStorage.getItem('sessions_cart');
  return cart ? JSON.parse(cart) : [];
}

// Save cart to localStorage
function saveCart(cart) {
  localStorage.setItem('sessions_cart', JSON.stringify(cart));
  updateCartBadge();
}

// Get wishlist from localStorage
function getWishlist() {
  const wishlist = localStorage.getItem('sessions_wishlist');
  return wishlist ? JSON.parse(wishlist) : [];
}

// Save wishlist to localStorage
function saveWishlist(wishlist) {
  localStorage.setItem('sessions_wishlist', JSON.stringify(wishlist));
  updateWishlistBadge();
}

// Add product to cart
function addToCart(product) {
  const cart = getCart();
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      category: product.category,
      quantity: 1,
      thc: product.thc,
      weight: product.weight
    });
  }

  saveCart(cart);
  showNotification(`${product.name} added to cart!`, 'success');
}

// Remove product from cart
function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
  showNotification('Item removed from cart', 'info');
}

// Update cart item quantity
function updateCartQuantity(productId, quantity) {
  const cart = getCart();
  const item = cart.find(item => item.id === productId);

  if (item) {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      item.quantity = quantity;
      saveCart(cart);
    }
  }
}

// Get cart total
function getCartTotal() {
  const cart = getCart();
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Get cart item count
function getCartCount() {
  const cart = getCart();
  return cart.reduce((count, item) => count + item.quantity, 0);
}

// Add to wishlist
function addToWishlist(product) {
  const wishlist = getWishlist();
  const existing = wishlist.find(item => item.id === product.id);

  if (!existing) {
    wishlist.push({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      category: product.category,
      thc: product.thc,
      weight: product.weight
    });
    saveWishlist(wishlist);
    showNotification(`${product.name} added to wishlist!`, 'success');
    return true;
  }
  return false;
}

// Remove from wishlist
function removeFromWishlist(productId) {
  let wishlist = getWishlist();
  wishlist = wishlist.filter(item => item.id !== productId);
  saveWishlist(wishlist);
  showNotification('Item removed from wishlist', 'info');
}

// Check if product is in wishlist
function isInWishlist(productId) {
  const wishlist = getWishlist();
  return wishlist.some(item => item.id === productId);
}

// Toggle wishlist
function toggleWishlist(product) {
  if (isInWishlist(product.id)) {
    removeFromWishlist(product.id);
    return false;
  } else {
    addToWishlist(product);
    return true;
  }
}

// Update cart badge
function updateCartBadge() {
  const count = getCartCount();
  const badge = document.getElementById('cartBadge');

  if (badge) {
    if (count > 0) {
      badge.textContent = count;
      badge.style.display = 'inline-block';
    } else {
      badge.style.display = 'none';
    }
  }
}

// Update wishlist badge
function updateWishlistBadge() {
  const wishlist = getWishlist();
  const count = wishlist.length;
  const badge = document.getElementById('wishlistBadge');

  if (badge) {
    if (count > 0) {
      badge.textContent = count;
      badge.style.display = 'inline-block';
    } else {
      badge.style.display = 'none';
    }
  }
}

// Clear cart
function clearCart() {
  localStorage.removeItem('sessions_cart');
  updateCartBadge();
}

// Show notification
function showNotification(message, type = 'info') {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `alert alert-${type === 'success' ? 'success' : type === 'error' ? 'danger' : 'info'}`;
  notification.style.position = 'fixed';
  notification.style.top = '100px';
  notification.style.right = '20px';
  notification.style.zIndex = '9999';
  notification.style.minWidth = '250px';
  notification.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
  notification.innerHTML = `
    <div class="d-flex align-items-center">
      <i class="bi bi-${type === 'success' ? 'check-circle' : type === 'error' ? 'x-circle' : 'info-circle'} me-2"></i>
      <span>${message}</span>
    </div>
  `;

  document.body.appendChild(notification);

  // Fade in
  setTimeout(() => {
    notification.style.opacity = '1';
    notification.style.transition = 'opacity 0.3s ease';
  }, 10);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.opacity = '0';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Initialize badges on page load
document.addEventListener('DOMContentLoaded', function() {
  updateCartBadge();
  updateWishlistBadge();
});

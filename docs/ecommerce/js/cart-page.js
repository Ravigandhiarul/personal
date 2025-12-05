// Shopping Cart Page JavaScript
// Sessions Cannabis

// Render cart items
function renderCartItems() {
  const cart = getCart();
  const cartItemsContainer = document.getElementById('cartItems');

  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart">
        <i class="bi bi-cart-x fs-1 text-muted mb-3"></i>
        <h3>Your cart is empty</h3>
        <p class="text-muted mb-4">Add some premium cannabis products to get started</p>
        <a href="shop.html" class="btn btn-primary">
          <i class="bi bi-shop me-2"></i>
          Browse Products
        </a>
      </div>
    `;
    updateOrderSummary();
    return;
  }

  cartItemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item" data-product-id="${item.id}">
      <div class="cart-item-image">
        <img src="${item.imageUrl}" alt="${item.name}">
      </div>

      <div class="cart-item-details">
        <h5 class="cart-item-name">${item.name}</h5>
        <div class="cart-item-meta">
          <span>${item.category || 'Product'}</span>
          ${item.strainType ? `<span class="ms-2">• ${item.strainType}</span>` : ''}
          ${item.weight ? `<span class="ms-2">• ${item.weight}</span>` : ''}
        </div>
      </div>

      <div class="quantity-controls">
        <button class="quantity-btn" onclick="decreaseCartQuantity(${item.id})">
          <i class="bi bi-dash"></i>
        </button>
        <span class="fw-bold">${item.quantity}</span>
        <button class="quantity-btn" onclick="increaseCartQuantity(${item.id})">
          <i class="bi bi-plus"></i>
        </button>
      </div>

      <div class="text-end">
        <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
        <small class="text-muted d-block mt-1">$${item.price.toFixed(2)} each</small>
      </div>

      <button class="btn btn-sm btn-outline-danger" onclick="removeCartItem(${item.id})">
        <i class="bi bi-trash"></i>
      </button>
    </div>
  `).join('');

  updateOrderSummary();
}

// Increase cart item quantity
function increaseCartQuantity(productId) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);

  if (item) {
    item.quantity += 1;
    saveCart(cart);
    renderCartItems();
    updateCartBadge();
  }
}

// Decrease cart item quantity
function decreaseCartQuantity(productId) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);

  if (item) {
    if (item.quantity > 1) {
      item.quantity -= 1;
      saveCart(cart);
      renderCartItems();
      updateCartBadge();
    } else {
      removeCartItem(productId);
    }
  }
}

// Remove item from cart
function removeCartItem(productId) {
  const cart = getCart();
  const filteredCart = cart.filter(item => item.id !== productId);

  saveCart(filteredCart);
  renderCartItems();
  updateCartBadge();

  showNotification('Item removed from cart', 'info');
}

// Calculate order summary
function updateOrderSummary() {
  const cart = getCart();

  // Calculate subtotal
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Calculate shipping (free over $50)
  const shipping = subtotal >= 50 ? 0 : 10;
  const shippingText = subtotal >= 50 ? 'FREE' : '$10.00';

  // Calculate tax (13%)
  const tax = subtotal * 0.13;

  // Calculate total
  const total = subtotal + shipping + tax;

  // Update display
  const subtotalEl = document.getElementById('subtotal');
  const shippingEl = document.getElementById('shipping');
  const taxEl = document.getElementById('tax');
  const totalEl = document.getElementById('total');

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (shippingEl) shippingEl.textContent = shippingText;
  if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
}

// Proceed to checkout
function checkout() {
  const cart = getCart();

  if (cart.length === 0) {
    showNotification('Your cart is empty', 'warning');
    return;
  }

  // For now, redirect to order completed page
  // In a real app, this would go to a checkout flow
  window.location.href = 'order-completed.html';
}

// Initialize cart page
document.addEventListener('DOMContentLoaded', function() {
  renderCartItems();
  updateCartBadge();
  updateWishlistBadge();
});

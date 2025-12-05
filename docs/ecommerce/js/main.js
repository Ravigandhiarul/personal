// Main JavaScript for Sessions Cannabis Ecommerce
// Homepage functionality and age verification

// Age Verification
function checkAgeVerification() {
  const isVerified = localStorage.getItem('sessions_age_verified');
  if (!isVerified) {
    document.getElementById('ageModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}

function verifyAge(isOldEnough) {
  if (isOldEnough) {
    localStorage.setItem('sessions_age_verified', 'true');
    document.getElementById('ageModal').style.display = 'none';
    document.body.style.overflow = 'auto';
  } else {
    window.location.href = 'https://www.google.com';
  }
}

// Render product card HTML
function renderProductCard(product) {
  const isWishlisted = isInWishlist(product.id);
  const stars = renderStars(product.rating);

  return `
    <div class="col-12 col-sm-6 col-lg-3">
      <div class="card-premium product-card" data-product-id="${product.id}">
        <div class="position-relative">
          <!-- Favorite Button -->
          <button class="btn btn-sm position-absolute top-0 end-0 m-2 favorite-btn ${isWishlisted ? 'active' : ''}"
                  onclick="handleFavoriteClick(event, ${product.id})">
            <i class="bi bi-heart${isWishlisted ? '-fill' : ''}"></i>
          </button>

          <!-- Badge -->
          ${product.id <= 4 ? '<span class="period-badge badge-new position-absolute top-0 start-0 m-2" style="float: none;">NEW</span>' : ''}
          ${product.price > 50 ? '<span class="period-badge position-absolute top-0 start-0 m-2" style="float: none; background: #ed4c78; color: white;">PREMIUM</span>' : ''}

          <!-- Product Image -->
          <div class="product-image" onclick="goToProduct(${product.id})">
            <img src="${product.imageUrl}" alt="${product.name}" class="img-fluid">
          </div>
        </div>

        <div class="card-premium-body">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <h5 class="card-premium-title mb-0">${product.name}</h5>
            <span class="badge bg-secondary">${product.strainType}</span>
          </div>

          <p class="card-premium-text mb-2" style="min-height: 40px;">${product.description}</p>

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

// Render star rating
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

// Handle favorite button click
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

    // Add to cart
    addToCart(product);

    // Visual feedback
    btn.innerHTML = '<i class="bi bi-check2"></i> Added!';
    btn.classList.add('btn-success');
    btn.classList.remove('btn-outline-primary');
    btn.disabled = true;

    // Reset after 2 seconds
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

// Load featured products on homepage
function loadFeaturedProducts() {
  const container = document.getElementById('featuredProducts');
  if (!container) return;

  const featured = getFeaturedProducts();
  container.innerHTML = featured.map(product => renderProductCard(product)).join('');
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Active nav highlighting on scroll
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.u-header__nav-link');
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href && href.includes('#')) {
      if (href === '#' + current || (href === '#home' && current === '')) {
        link.classList.add('active');
      }
    }
  });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Check age verification
  checkAgeVerification();

  // Load featured products
  loadFeaturedProducts();

  // Update badges
  updateCartBadge();
  updateWishlistBadge();
});

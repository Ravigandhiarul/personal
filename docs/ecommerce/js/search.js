// Search Functionality
// Sessions Cannabis

// Perform search
function searchProducts(query) {
  if (!query || query.trim() === '') {
    return [];
  }

  const searchTerm = query.toLowerCase().trim();

  return cannabisProducts.filter(product => {
    // Search in name
    if (product.name.toLowerCase().includes(searchTerm)) {
      return true;
    }

    // Search in description
    if (product.description.toLowerCase().includes(searchTerm)) {
      return true;
    }

    // Search in category
    if (product.category.toLowerCase().includes(searchTerm)) {
      return true;
    }

    // Search in strain type
    if (product.strainType.toLowerCase().includes(searchTerm)) {
      return true;
    }

    // Search in effects
    if (product.effects && product.effects.some(effect => effect.toLowerCase().includes(searchTerm))) {
      return true;
    }

    // Search in terpenes
    if (product.terpenes && product.terpenes.some(terpene => terpene.toLowerCase().includes(searchTerm))) {
      return true;
    }

    return false;
  });
}

// Handle search form submission
function handleSearch(event) {
  event.preventDefault();

  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;

  const query = searchInput.value.trim();

  if (query) {
    // Redirect to search results page with query parameter
    window.location.href = `search.html?q=${encodeURIComponent(query)}`;
  }
}

// Initialize search functionality on all pages
document.addEventListener('DOMContentLoaded', function() {
  // Add search form to header if it doesn't exist
  const navbar = document.querySelector('.navbar-nav');
  if (navbar && !document.getElementById('searchForm')) {
    const searchItem = document.createElement('li');
    searchItem.className = 'nav-item';
    searchItem.innerHTML = `
      <form class="d-flex" id="searchForm" onsubmit="handleSearch(event)">
        <input class="form-control form-control-sm me-2" type="search" placeholder="Search products..." id="searchInput" style="border-radius: 2rem; min-width: 200px;">
        <button class="btn btn-sm btn-outline-primary" type="submit" style="border-radius: 2rem;">
          <i class="bi bi-search"></i>
        </button>
      </form>
    `;

    // Insert before wishlist item
    const wishlistItem = navbar.querySelector('a[href="wishlist.html"]')?.parentElement;
    if (wishlistItem) {
      navbar.insertBefore(searchItem, wishlistItem);
    } else {
      navbar.appendChild(searchItem);
    }
  }
});

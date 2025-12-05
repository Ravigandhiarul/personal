#!/usr/bin/env python3
"""
Batch update remaining HTML files with standardized header and dark mode
"""

import re

# CSS Variables for Dark Mode
DARK_MODE_CSS = """        :root {
            --sessions-orange: #F18A00;
            --sessions-orange-hover: #d67800;
            --sessions-orange-soft: rgba(241, 138, 0, 0.1);
            --text-dark: #1a1a1a;
            --text-muted: rgba(255, 255, 255, 0.6);
            --bg-white: #000000;
            --bg-light: #000000;
            --border-light: rgba(255, 255, 255, 0.1);
            --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        * { box-sizing: border-box; }

        body {
            font-family: "Poppins", sans-serif;
            color: #ffffff;
            background-color: #000000;
        }

        ::selection { background: #fef3e5; color: #f18a00; }

        /* Utility Bar - Dark Mode */
        .utility-bar {
            background: #1a1a1a;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            font-size: 0.8125rem;
            padding: 0.5rem 0;
        }

        .utility-bar a {
            color: rgba(255, 255, 255, 0.7);
            text-decoration: none;
            margin: 0 0.75rem;
            transition: color 0.3s ease;
        }

        .utility-bar a:hover {
            color: var(--sessions-orange);
        }

        .utility-bar strong {
            color: #ffffff;
        }

        /* Header */
        .u-header {
            background-color: #000000;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
            border-bottom: 1px solid rgba(241, 138, 0, 0.2);
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        .u-header__navbar { padding: 1rem 0; }
        .u-header__navbar-brand { display: flex; align-items: center; text-decoration: none; }
        .u-header__navbar-brand img { height: 46px; }
        .u-header__navbar-brand-text { font-size: 1.25rem; font-weight: 600; color: #ffffff; margin-left: 0.75rem; }
        .u-header__nav-link { color: rgba(255, 255, 255, 0.8); font-weight: 400; font-size: 0.9375rem; padding: 0.5rem 1rem; text-decoration: none; transition: color 0.3s ease; display: flex; align-items: center; gap: 0.5rem; }
        .u-header__nav-link:hover, .u-header__nav-link.active { color: var(--sessions-orange); }
        .badge { font-size: 0.625rem; padding: 0.25rem 0.5rem; }

        /* Navbar toggler for dark mode */
        .navbar-toggler {
            color: rgba(255, 255, 255, 0.8);
            border: none;
        }

        .navbar-toggler:focus {
            box-shadow: none;
        }

        /* Expandable Search */
        #searchContainer {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .search-expandable {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            width: 0;
            opacity: 0;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            pointer-events: none;
        }

        .search-expandable.active {
            width: 280px;
            opacity: 1;
            pointer-events: auto;
        }

        .search-expandable input {
            background-color: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: #ffffff;
            border-radius: 2rem;
            flex: 1;
            padding: 0.5rem 1rem;
        }

        .search-expandable input::placeholder {
            color: rgba(255, 255, 255, 0.5);
        }

        .search-expandable input:focus {
            background-color: rgba(255, 255, 255, 0.15);
            border-color: var(--sessions-orange);
            outline: none;
            box-shadow: 0 0 0 0.2rem rgba(241, 138, 0, 0.25);
        }

        .search-expandable button {
            background: transparent;
            border: none;
            color: var(--sessions-orange);
            padding: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }

        .search-expandable button:hover {
            color: var(--sessions-orange-hover);
            transform: translateX(3px);
        }

        #searchToggle {
            transition: all 0.3s ease;
        }

        #searchToggle.active {
            color: var(--sessions-orange);
        }"""

# Utility Bar HTML
UTILITY_BAR_HTML = """    <!-- Utility Top Bar -->
    <div class="utility-bar">
        <div class="container">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <a href="#" class="d-flex align-items-center">
                        <i class="bi bi-geo-alt-fill me-1"></i>
                        <strong>Stratford, ON</strong> • Open until 10PM
                        <i class="bi bi-chevron-down ms-2" style="font-size: 0.6875rem;"></i>
                    </a>
                </div>

                <div class="d-flex align-items-center">
                    <a href="contact.html">Help</a>
                    <a href="contact.html">Contact</a>
                </div>
            </div>
        </div>
    </div>

"""

# Standard Header HTML
STANDARD_HEADER_HTML = """    <!-- Header -->
    <header class="u-header">
        <div class="container">
            <nav class="navbar navbar-expand-lg u-header__navbar">
                <a class="u-header__navbar-brand" href="index.html">
                    <img src="../images/sessions-logo.svg" alt="Sessions Cannabis Logo">
                    <span class="u-header__navbar-brand-text">Sessions</span>
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <i class="bi bi-list fs-3"></i>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto align-items-center">
                        <li class="nav-item">
                            <a class="u-header__nav-link" href="shop.html">
                                Shop <i class="bi bi-chevron-down" style="font-size: 0.6875rem;"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="u-header__nav-link" href="shop.html">Deals</a>
                        </li>
                        <li class="nav-item">
                            <a class="u-header__nav-link" href="about.html">Learn</a>
                        </li>
                        <li class="nav-item">
                            <a class="u-header__nav-link" href="contact.html">Locations</a>
                        </li>
                        <li class="nav-item">
                            <a class="u-header__nav-link" href="about.html">Rewards</a>
                        </li>
                        <li class="nav-item" id="searchContainer">
                            <a class="u-header__nav-link" href="#" id="searchToggle">
                                <i class="bi bi-search"></i>
                            </a>
                            <form class="search-expandable" id="searchForm" onsubmit="handleSearch(event)">
                                <input class="form-control form-control-sm" type="search" placeholder="Search products..." id="searchInput">
                                <button class="btn btn-sm" type="submit">
                                    <i class="bi bi-arrow-right"></i>
                                </button>
                            </form>
                        </li>
                        <li class="nav-item">
                            <a class="u-header__nav-link" href="wishlist.html">
                                <i class="bi bi-heart"></i>
                                <span class="badge bg-primary" id="wishlistBadge" style="display: none;">0</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="u-header__nav-link" href="cart.html">
                                <i class="bi bi-cart"></i>
                                <span class="badge bg-primary" id="cartBadge" style="display: none;">0</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>"""

# Search JavaScript
SEARCH_JAVASCRIPT = """
    <script src="js/search.js"></script>

    <!-- Search functionality -->
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const searchToggle = document.getElementById('searchToggle');
            const searchForm = document.getElementById('searchForm');
            const searchInput = document.getElementById('searchInput');

            if (searchToggle && searchForm && searchInput) {
                searchToggle.addEventListener('click', function(e) {
                    e.preventDefault();
                    searchForm.classList.toggle('active');
                    searchToggle.classList.toggle('active');

                    if (searchForm.classList.contains('active')) {
                        setTimeout(() => {
                            searchInput.focus();
                        }, 400);
                    }
                });

                document.addEventListener('click', function(e) {
                    const searchContainer = document.getElementById('searchContainer');
                    if (searchContainer && !searchContainer.contains(e.target)) {
                        searchForm.classList.remove('active');
                        searchToggle.classList.remove('active');
                    }
                });

                searchForm.addEventListener('click', function(e) {
                    e.stopPropagation();
                });
            }
        });

        function handleSearch(event) {
            event.preventDefault();
            const query = document.getElementById('searchInput').value.trim();
            if (query) {
                window.location.href = `search.html?q=${encodeURIComponent(query)}`;
            }
        }
    </script>"""

files_to_update = [
    'docs/ecommerce/wishlist.html',
    'docs/ecommerce/about.html',
    'docs/ecommerce/contact.html',
    'docs/ecommerce/search.html',
    'docs/ecommerce/order-completed.html'
]

print("Batch Header Update Script")
print("=" * 50)
print(f"Will update {len(files_to_update)} files")
print("Files:", files_to_update)
print("\nTemplate components ready:")
print("✓ Dark Mode CSS")
print("✓ Utility Bar HTML")
print("✓ Standard Header HTML")
print("✓ Search JavaScript")
print("\nReady to apply!")

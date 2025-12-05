# Sessions Cannabis Ecommerce Website

A complete ecommerce website for Sessions Cannabis, converted from VR Pumps sample site with Sessions Cannabis branding and premium design.

## Features

### Core Pages
- ✅ **Homepage (index.html)** - Age verification, hero section, featured products
- ✅ **Shop (shop.html)** - Product listing with filters (category, strain type, price range) and sorting
- ✅ **Product Detail (product.html)** - Individual product pages with add to cart and quantity selection
- ✅ **Shopping Cart (cart.html)** - View cart, update quantities, proceed to checkout
- ✅ **Wishlist (wishlist.html)** - Save favorite products, add all to cart
- ✅ **Search (search.html)** - Search products by name, description, category, effects, terpenes
- ✅ **About (about.html)** - Company information and values
- ✅ **Contact (contact.html)** - Contact form and business information
- ✅ **Order Completed (order-completed.html)** - Order confirmation page

### Functionality
- ✅ Age verification (19+) - One-time modal on first visit
- ✅ Shopping cart with localStorage persistence
- ✅ Wishlist functionality
- ✅ Product search across multiple fields
- ✅ Advanced filtering (category, strain type, price)
- ✅ Product sorting (price, rating, name)
- ✅ Add to cart with visual feedback
- ✅ Quantity controls
- ✅ Cart/wishlist badge counters
- ✅ Responsive design (mobile, tablet, desktop)

### Design System
- **Brand Color**: #F18A00 (Sessions Orange)
- **Typography**: Poppins (300, 400, 500, 600, 700)
- **Components**: Premium cards, orange-tinted shadows, smooth animations
- **CSS Variables**: Consistent theming throughout

## File Structure

```
ecommerce/
├── index.html              # Homepage
├── shop.html               # Product listing
├── product.html            # Product detail
├── cart.html               # Shopping cart
├── wishlist.html           # Wishlist
├── search.html             # Search results
├── about.html              # About page
├── contact.html            # Contact page
├── order-completed.html    # Order confirmation
├── js/
│   ├── products.js         # Product database (20 cannabis products)
│   ├── cart.js             # Cart & wishlist management
│   ├── main.js             # Homepage functionality
│   ├── shop.js             # Shop page filtering/sorting
│   ├── product-detail.js   # Product detail page
│   ├── cart-page.js        # Cart page functionality
│   ├── wishlist-page.js    # Wishlist page functionality
│   ├── search.js           # Search functionality
│   └── search-results.js   # Search results page
└── README.md               # This file
```

## Product Categories
1. **Flower** (8 products) - Blue Dream, Purple Kush, Sour Diesel, etc.
2. **Edibles** (4 products) - Gummies, Chocolate, Candies, Cookies
3. **Vapes** (3 products) - Cartridges, Disposables, Live Resin
4. **Concentrates** (3 products) - Shatter, Wax, Live Rosin
5. **Pre-Rolls** (2 products)

Total: 20 products

## Product Data Structure
Each product includes:
- Name, category, description
- Price, THC%, CBD%
- Strain type (Sativa/Indica/Hybrid)
- Weight
- Effects (Happy, Relaxed, Creative, etc.)
- Terpenes (Myrcene, Pinene, Caryophyllene, etc.)
- Rating and review count
- Image URL

## Technical Details

### Dependencies
- Bootstrap 5.3.0 (CSS framework)
- Bootstrap Icons 1.11.1 (Icon font)
- Google Fonts - Poppins

### Browser Storage
- `sessions_age_verified` - Age verification status
- `sessions_cart` - Shopping cart items
- `sessions_wishlist` - Wishlist items

### Key Features Implemented
1. **Age Verification**: Modal shown on first visit, stored in localStorage
2. **Cart Management**: Add/remove items, update quantities, persist across sessions
3. **Wishlist**: Save favorites, add all to cart, remove items
4. **Search**: Multi-field search (name, description, category, effects, terpenes)
5. **Filters**: Category, strain type, price range with real-time updates
6. **Sorting**: Featured, price (low/high), rating, name
7. **Responsive**: Mobile-first design with Bootstrap grid
8. **Animations**: Hover effects, smooth transitions, visual feedback

## Testing Checklist

### Homepage
- [ ] Age verification modal appears on first visit
- [ ] Featured products display correctly
- [ ] Add to cart button works with feedback
- [ ] Wishlist toggle works
- [ ] Click product card navigates to detail page
- [ ] Cart/wishlist badges update

### Shop Page
- [ ] All products display
- [ ] Category filter works
- [ ] Strain type filter works
- [ ] Price range slider works
- [ ] Sorting dropdown works
- [ ] Clear filters button resets all filters
- [ ] Product count updates

### Product Detail
- [ ] Product loads from URL parameter
- [ ] Quantity controls work (increase/decrease)
- [ ] Add to cart adds correct quantity
- [ ] Buy now redirects to cart
- [ ] Wishlist toggle works
- [ ] Price updates with quantity

### Shopping Cart
- [ ] Cart items display correctly
- [ ] Quantity controls work
- [ ] Remove item works
- [ ] Empty cart message shows when empty
- [ ] Order summary calculates correctly (subtotal, shipping, tax, total)
- [ ] Free shipping at $50+
- [ ] Checkout button redirects

### Wishlist
- [ ] Wishlist items display
- [ ] Add to cart from wishlist works
- [ ] Remove from wishlist works
- [ ] Add all to cart works
- [ ] Clear wishlist works with confirmation
- [ ] Empty wishlist message shows

### Search
- [ ] Search bar appears in header
- [ ] Search form submission works
- [ ] Search results display correctly
- [ ] No results message shows appropriately
- [ ] Results are accurate (name, description, category, effects, terpenes)

### About & Contact
- [ ] About page content displays
- [ ] Contact form validates required fields
- [ ] Form submission shows success message
- [ ] Contact information displays

### Order Completed
- [ ] Order number generates
- [ ] Order date displays
- [ ] Order total displays
- [ ] Cart clears after order
- [ ] Next steps display

## Conversion from VR Pumps

### Color Mapping
- VR Pumps Blue (#377DFF) → Sessions Orange (#F18A00)
- Maintained shadow system with orange tints
- Updated all hover effects to orange

### Typography
- Montserrat → Poppins
- Maintained weight structure (300, 400, 500, 600, 700)

### Product Conversion
- 109 VR Pumps products → 20 Cannabis products
- Pump attributes → Cannabis attributes (THC%, CBD%, effects, terpenes)
- Industrial imagery → Cannabis product imagery

### Component Reuse
- Header/Footer structure
- Card premium design
- Filter sidebar
- Product grid
- Cart functionality
- Wishlist system

## Next Steps (Optional Enhancements)

1. **Authentication System**
   - User registration
   - Login/logout
   - Account management
   - Order history

2. **Checkout Flow**
   - Multi-step checkout
   - Shipping address form
   - Payment method selection
   - Order review

3. **Backend Integration**
   - API endpoints
   - Database integration
   - Real order processing
   - Email notifications

4. **Additional Features**
   - Product reviews
   - Related products
   - Recently viewed
   - Stock management
   - Delivery tracking
   - Promotional codes/discounts

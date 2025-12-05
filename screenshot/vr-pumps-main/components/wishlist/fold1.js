// components/your-lists/fold1.js
import Image from 'next/image'
import pumpImg from '@/images/wishlist/0525 R 1.png'
import share from '@/images/wishlist/share.svg'

export default function YourListsFold1() {
  return (
    <section className="bg-gray-50 py-10 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        {/* Page Title */}
        <h2 className="text-xl font-semibold mb-6 text-gray-900">Your lists</h2>
        
        {/* Product List Item */}
        <div className="bg-white shadow rounded-lg overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-shadow duration-200">
          {/* Product Image */}
          <div className="bg-gray-100 p-6 flex items-center justify-center md:w-1/3">
            <div className="w-40 h-32 relative">
              <Image 
                src={pumpImg.src}
                alt="Zenflow Eco Pump" 
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 160px"
              />
            </div>
          </div>
          
          {/* Product Information */}
          <div className="p-6 flex-1">
            {/* Product Code */}
            <p className="text-sm text-gray-500 mb-1">Zenflow Eco (VZF052522)</p>
            
            {/* Product Title */}
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              Silent. Strength. Everyday
            </h3>
            
            {/* Price and Rating */}
            <div className="flex items-center mb-1">
              <p className="text-xl font-bold text-gray-900">₹4,293</p>
              <div className="ml-4 flex items-center">
                {/* Star Rating */}
                <div className="flex text-yellow-400 text-sm">
                  <span>☆☆☆☆☆</span>
                </div>
                <span className="text-blue-500 text-sm ml-2 font-medium">0</span>
              </div>
            </div>
            
            {/* Date Added */}
            <p className="text-sm text-gray-500 mb-4">Item added 5 May 2025</p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Add to Cart Button */}
              <button className="px-6 py-2 text-blue-500 border border-blue-500 rounded-full text-sm hover:bg-blue-50 transition-colors duration-200 font-medium">
                Add to cart
              </button>
              
              {/* Remove List Button */}
              <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-full text-sm flex items-center gap-2 hover:bg-gray-100 transition-colors duration-200">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
                  />
                </svg>
                Remove list
              </button>
              
              {/* Share/External Link Button */}
              <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors duration-200">
                <img src={share.src} />
              </button>
            </div>
          </div>
        </div>

        {/* Empty State (if no items) - Optional */}
        {/* 
        <div className="bg-white shadow rounded-lg p-12 text-center">
          <div className="text-gray-400 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Your lists are empty</h3>
          <p className="text-gray-500 mb-4">Start adding items to your lists to see them here.</p>
          <a href="/products" className="inline-block px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
            Browse Products
          </a>
        </div>
        */}
      </div>
    </section>
  )
}
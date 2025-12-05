// components/order-completed/fold1.js
import Image from 'next/image'
import completed from '@/images/order-completed/completed.svg'

export default function OrderCompletedFold1() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-20 min-h-[60vh]">
      {/* Order Completed Illustration */}
      <div className="w-60 h-auto mb-6">
        <Image 
          src={completed.src} 
          alt="Order completed" 
          width={240}
          height={200}
          className="w-full h-auto"
          priority
        />
      </div>
      
      {/* Heading */}
      <h2 className="text-2xl lg:text-3xl font-semibold mb-3 text-gray-900">
        Your order is completed!
      </h2>
      
      {/* Description */}
      <p className="text-gray-500 max-w-xl mb-8 text-base lg:text-lg leading-relaxed">
        Thank you for your order! Your order is being processed and will be 
        completed within 3-6 hours. You will receive an email confirmation when 
        your order is completed.
      </p>
      
      {/* Continue Shopping Button */}
      <a 
        href="/" 
        className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors duration-200 font-medium text-sm lg:text-base"
      >
        Continue shopping
      </a>
    </section>
  )
}
// app/order-completed/page.tsx
import OrderCompleted from '@/components/order-completed/order-completed'

export default function OrderCompletedPage() {
  return <OrderCompleted />
}

export const metadata = {
  title: 'Order Completed - VR Pumps',
  description: 'Thank you for your order! Your order is being processed and will be completed within 3-6 hours.',
}
// app/your-lists/page.tsx
import YourLists from '@/components/wishlist/wishlist'

export default function YourListsPage() {
  return <YourLists />
}

export const metadata = {
  title: 'Your Lists - VR Pumps',
  description: 'View and manage your saved pump products and wishlist items.',
}
// components/your-lists/your-lists.js
import Header from "@/components/header.js";
import Footer from "@/components/footer.js";
import YourListsFold1 from './fold1'

export default function YourLists() {
  return (
  <>
    <Header activeTab={'Wishlist'}/>
    <div className="your-lists-page">
      <YourListsFold1 />
    </div>
    <Footer/>
    </>
  )
}
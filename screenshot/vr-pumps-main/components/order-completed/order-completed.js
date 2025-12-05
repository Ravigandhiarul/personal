// components/order-completed/order-completed.js
import Header from "@/components/header.js";
import Footer from "@/components/footer.js";
import OrderCompletedFold1 from './fold1'

export default function OrderCompleted() {
  return (
    <>
    <Header/>
    <div className="order-completed-page">
      <OrderCompletedFold1 />
    </div>
    <Footer/>
    </>
  )
}
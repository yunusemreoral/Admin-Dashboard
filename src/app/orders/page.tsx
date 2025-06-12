import OrderTable from "@/components/orders-page/orderTable"
import { FC, Suspense } from "react"
import Loading from "../users/loading"


const Orders:FC = () => {
  return (
    <div className="page">
      <h1 className="title">Siparişler</h1>

<Suspense fallback={<Loading designs="my-60"/>} >
      <OrderTable/>
      </Suspense>
    </div>
  )
}

export default Orders

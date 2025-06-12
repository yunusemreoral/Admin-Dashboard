import { FC } from "react"
import { Bar } from "react-chartjs-2"
import LineGraph from "../graphics/line-graph"
import { getOrders } from "@/utils/service"

const SalesChart:FC = async () => {
    const orders = await getOrders();
  
// siparişlerime verisine göre grafik datasız oluşturur
    const data = {
        labels: orders.map((order => order.order_date)),
        datasets: [
            {
                label: "Satış Tutarı",
                data: orders.map((order) => order.total_price),
                backgroundColor: "rgba(0,150,255,0.5)",
                borderColor: "rgba(0,150,255,00,)",
                fill: true,
            },
        ],
    };

  return (
    <div className="bg-white rounded-lg p-5 shadow-md lg:h-full">
      <h2 className="subtitle mb-5">Satışlar</h2>

      <LineGraph data={data} />
    </div>
  )
}

export default SalesChart

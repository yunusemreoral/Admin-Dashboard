import { getOrders } from "@/utils/service"

const OrderTable = async () => {
    const orders = await getOrders();

    const getColor = (status: string) => {
        switch (status) {
            case "Shipped":
                return "bg-blue-600";
                 case "Delivered":
                return "bg-green-600";
                 case "Processing":
                return "bg-yellow-600";
                default:
                return "bg-red-600";

        }
    };

  return (
    <div className="max-sm:w-[80px] overflow-x-auto">
        <table className="border shadow w-full bg-white rounded-md mt-5 border-zinc-300 z-0">
           
<thead>
    <tr>
        <th>#</th>
        <th>Sipariş Tarihi</th>
        <th>Ürün Sayısı</th>
        <th>Toplam Fiyat</th>
        <th>Adres</th>
        <th>Durum</th>
    </tr>
</thead>
    <tbody>
        {orders.map((order) => (
            <tr key={order.id}>
                <td>{order.id} </td>
                <td className="whitespace-nowrap">
                    {new Date(order.order_date).toLocaleDateString("tr", {
                        day: "2-digit",
                        month: "long",
                        year: "2-digit",
                    })}
                </td>
                <td>{order.items.reduce((acc,item) => acc + item.quantity, 0)} 
                </td>

                <td className="text-green-600">
                    {order.total_price.toFixed(2)}$
                </td>
                <td>{order.shipping_address.city} </td>

                <td>
                    <span className= {`${getColor(order.status)} text-white py-1 px-2 rounded-lg shadow w-full text-center`} >{order.status} </span>
                </td>
            </tr>
        ))}
    </tbody>

        </table>
      
    </div>
  );
};

export default OrderTable

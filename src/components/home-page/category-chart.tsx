import { FC } from "react"
import DoughnutGraph from "../graphics/doughnut-graph"
import { getProducts } from "@/utils/service";



const CategoryChart:FC = async () => {
    // apiden ürünleri getir
    const products = await getProducts();
    
    // ürünlerin kategorilerini al (benzersiz)
    const labels = [...new Set(products.map((product) => product.category))];

    // her kategoride kaç adet ürün olduugnu hesapla
    const categoryCounts: Record<string,number> = {};

    products.forEach((product) => {
        categoryCounts[product.category] = (categoryCounts[product.category] || 0) + 1;
    });

    const data = {
        labels,
        datasets: [
            {
                label: "Kategori",
                data: Object.values(categoryCounts),
                backgroundColor: ["rgba(255,99,132,0.5)", "red","green","aqua","yellow","orange"],
            },
        ],
    };

  return (
   <div className="bg-white rounded-lg p-5 shadow-md lg:h-full">
      <h2 className="subtitle mb-5">Kategoriler</h2>

      <DoughnutGraph data={data} />
    </div>
  )
}

export default CategoryChart

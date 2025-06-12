import { FC } from "react"
import { Product } from "@/types";
import { getProduct } from "@/utils/service";
import { notFound } from "next/navigation";
import Link from "next/link";
import ProductForm from "@/components/product-page/product-form";

interface Props {
    params: Promise<{slug: string[]}>;
}

const ProductPage:FC<Props> = async ({params}) => {
    // url deki paramaetleri al
    const {slug} = await params;

    // düzenlenecek ürünün bilgilerini tutacak değişken
    let product: Product | null = null;

    // düzenleme modunda isek
    if (slug[0] === "edit" && slug[1]) {
        try {
            // düzenlenecek ürün bilgilerini getir
            product = await getProduct(slug[1]);

            // ürünü bulunamadıysa 404 sayfasına yonlendir
            if (!product) notFound();
        } catch (error) {
            notFound();
        }
    }

    // sayfa başlıgı
    const pageTitle = product ? "Ürün Düzenle" : "Ürün Ekle";

  return (
    <div className="page container mx-auto">
        <div className="mb-6 flex items-center justify-between">
      <h1 className="title">{pageTitle} </h1>

<Link href={"/products"} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors ">Geri</Link>
</div>

<div className="bg-white rounded-lg shadow-md p-6">
    <ProductForm product={product} />
</div>
    </div>
  )
}

export default ProductPage



import { FC } from "react"
import { Product } from "@/types";
import { categories, inputs } from "@/utils/constants";
import Field from "./field";
import ImagePreview from "./image-preview";
import { createProduct, updateProduct } from "@/utils/service";
import { redirect } from 'next/navigation';
import { isRedirectError } from "next/dist/client/components/redirect-error";

// form gönderilince çalışacak olan server action
const handleSubmit = async (formData: FormData) => {
  "use server"; //server action

  const productId = formData.get("id");

  // formdaki tüm verileri bir nesne formatına al
  const product = Object.fromEntries(formData.entries()) as unknown as Omit<
  Product,
  "id">;

  try {
  // eger düzenleme modundaysak güncelleme isteği
  if (productId) {
    await updateProduct(productId as string,product);
  }

  // oluşturma modu ise oluşturma isteği at
  if (!productId) {
    await createProduct(product);
  }

  // kullanıcıyı ürünler sayfasına yönlendir
  // redirect methodu doğası gereği hata fırlatarak çalışır
  redirect("/products");
} catch (error) {
  if (isRedirectError(error)) {
    throw error;
  }
  console.log(error);
  throw new Error("Ürün oluştururken bir hata oluştu");
  }
  
};

interface Props {
  product: Product | null;
}

const ProductForm:FC<Props> = ({product}) => {
  return (
    <form action={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">

        {/* gizli input :form action içlerinde modu ayırt etmek için kullan */}
        {product && <input hidden readOnly name="id" value={product?.id}/>}

        {/* sol sütün */}
      <div className="space-y-6">
        {inputs.map((input,key) => (
          <Field key={key} htmlFor={input.name} label={input.label}>
          <input 
          id={input.name}
          name={input.name}
          type={input.type}
          min={input.min}
          max={input.max}
          className="input"
          required
          defaultValue={product?.[input.name as keyof Product] || ""}
          />
          </Field>
        ))}
        

        {/* kategori inputu */}
        <Field htmlFor="category" label="Kategori">
          <select
          name="catefory"
          id="category"
          className="input"
          required
          defaultValue={product?.category}>
         {categories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
         ))}
          </select>
        </Field>
        </div>

        {/* sag sutun */}
        <div className="space-y-6">
          {/* resim inputu */}
          <Field htmlFor="image_url" label="Resim URL">
            <input 
            type="text" 
            name="image_url" 
            id="image_url" 
            className="input" 
            required 
            defaultValue={product?.image_url}/>
          </Field>

          <ImagePreview/>

          {/* açıklama inputu */}
          <Field htmlFor="description" label="Açıklama">
            <textarea
            name="description"
            id="description"
            className="input sm:text-sm md:min-h-[220px]"
            required
            defaultValue={product?.description}
            rows={5}>

            </textarea>
          </Field>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button 
        type="submit"
        className="px-6 py-2 rounded-md text-white transition-colors bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 cursor-pointer disabled:cursor-not-allowed">
          {product ? "Güncelle" : "Oluştur"}
        </button>
      </div>
    </form>
  );
};

export default ProductForm

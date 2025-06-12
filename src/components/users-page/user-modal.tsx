import { getUser } from "@/utils/service";
import Link from "next/link";
import { FC } from "react"
import { MdClose } from "react-icons/md";

interface Props {
  id: string;
}

const UserModal:FC<Props> = async ({id}) => {
    // url de parametre yoksa modalı gizle
    if (!id) return null;

    // urlde parametre varsa modalı göster
    const user = await getUser(id);

    // ekrana basılacak alanlardan bir dizi oluştur
    const fields = [
        {
         label: "Email",
         value: user.email,
        },
 {
         label: "Telefon",
         value: user.phone,
        },
         {
         label: "Ülke",
         value: user.address.country,
        },
         {
         label: "Şehir",
         value: user.address.city,
        },
         {
         label: "Adres",
         value: user.address.street,
        },
         {
         label: "Posta Kodu",
         value: user.address.postal_code,
        },
         {
         label: "Sipariş Sayısı",
         value: user.orders.length,
        },
    ];

    

  return (
  <div className="fixed bg-black/10 inset-0 z-[99] backdrop-blur-[2px] grid place-items-center">
  <div className="bg-white rounded-lg shadow py-6 px-10 pb-14 w-full max-w-md">
    <div className="flex justify-end items-center">
        <Link href="/users" className="button hover:bg-zinc-200 transition">
        <MdClose/>
        </Link>
    </div>

    <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-semibold text-center my-5">{user.name} </h1>

        <div className="flex flex-col gap-3">
            {fields.map((field,key) => (
                <div key={key} className="flex justify-between">
                    <span>{field.label} </span>
                    <span className="font-semibold">{field.value} </span>
                </div>
            ))}
        </div>

        <hr className="text-zinc-500"/>

        {/* önceki siparişler */}
        {user.orders.length > 0 && (
            <div>
                <div className="grid grid-cols-3 text-center">
                    <span>Ürün ID</span>
                    <span>Adet</span>
                    <span>Toplam Fiyat</span>
                </div>

                <div className="flex flex-col gap-2 mt-2">
                    {user.orders.map((order) => (
                        <div className="bg-gray-100 p-2 text-center rounded-lg grid grid-cols-3">
                            <span>{order.product_id} </span>
                            <span>{order.quantity} </span>
                            <span>{Number(order.total_price).toFixed(2)}$ </span>
                        </div>
                    ))}
                </div>
            </div>
        )}
    </div>
  </div>
  </div>
);
};

export default UserModal

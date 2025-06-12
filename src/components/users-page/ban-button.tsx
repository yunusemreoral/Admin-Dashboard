"use client";

import { banUser } from "@/utils/service";
import { FC, useState } from "react"
import { FaSpinner, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
}

const BanButton:FC<Props> = ({id}) => {
  const [isLoading,setIsLoading] = useState(false);
  const router = useRouter();

  const handleBan = async () => {
    if (!confirm("Bu kullanıcıyı silmek istediğimize emin misiniz?")) return;
    setIsLoading(true);

    banUser(id)
    .then(() => {
      toast.success("Kullanıcı başarıyla silindi");
      router.refresh();
    })
    .catch(() => {
      toast.error("Kullanıcı silinirken bir hata oluştu");
    })
    .finally(() => {
       setIsLoading(false);
    });
  };

  return (
    <button 
    onClick={handleBan}
    className="button hover:bg-red-200 text-red-500 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50">
      {isLoading ? <FaSpinner className="animate-spin"/> : <FaTrash/>}
    </button>
  )
}

export default BanButton

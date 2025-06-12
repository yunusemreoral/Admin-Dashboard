"use client";

import { FC, useEffect, useState } from "react"
import Field from "./field";
import Image from "next/image";

const ImagePreview:FC = () => {
    const [imageUrl,setImageUrl] = useState<string>("");
    const [isValid, setIsValid] = useState<boolean>(false);
    const [isLoading,setIsLoading] = useState<boolean>(false);

    // inputun değişim anını izleyelim
    useEffect(() => {
        // resim url'inin girildiği input elementini al
       const imageInput = document.getElementById("image_url") as HTMLInputElement;
    
    // ınputun değişim anında çalışacak fonksiyon
    const handleChange = () => {
        const newUrl = imageInput.value;
        setImageUrl(newUrl);

        if (newUrl) {
        // url ın geçerli bir resim url i olup olmadıgını kontrol et
        const testImg = new globalThis.Image();
         setIsLoading(true);

        // eger resim yükleniyorsa
        testImg.onload = () => {
            setIsValid(true);
            setIsLoading(false);
        };

        // resim yüklenmezse uyarı ver
        testImg.onerror = () => {
            setIsValid(false);
            setIsLoading(false);
        };

        // resmi indirmeye çalışalım
        testImg.src = newUrl;
        } else {
            setIsValid(false);
            setIsLoading(false);
        }
    };

    // inputun olay izleyici ekle
    if (imageInput) {
        imageInput.addEventListener("input", handleChange);
    }

    // component unmount oldugunda olay izleyicisini kaldır
    return () => {
    if (imageInput) {
        imageInput.removeEventListener("input", handleChange);
        }
    };
    }, []);

  return (
    <Field htmlFor="image_url" label="Resim Önizleme">
    <div className="relative h-48 w-full bg-gray-100 rounded-md overflow-hidden">
      {isLoading ? (
        <div className="flex items-center justify-center h-full text-gray-400">Resim Yükleniyor...</div>
      ) : isValid && imageUrl ? (
        <Image
        src={imageUrl}
        alt="resim"
        fill
        className="object-cover"
        unoptimized // bilinmeyen domainlerde resimleri yüklenmesi için
        />
      ) : (
        <div className="flex items-center justify-center h-full text-gray-400">
            {imageUrl ? "Geçersiz Resim Url" : "Resim Yok"} </div>
      )}
    </div>
    </Field>
  );
};

export default ImagePreview

"use client";

import { FC } from "react";

interface Props {
    error: Error;
    reset: () => void;
}

const Error:FC<Props> = ({error,reset}) => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center h-full">
        <div className="bg-red-300 text-white p-5 px-10 rounded-md flex flex-col gap-2 shadow-md">
      <h1>Hata Oluştu!</h1>
      <p>{error.message} </p>
      </div>
      <button onClick={reset}
      className="cursor-pointer my-5 border p-2 px-4 border-zinc-300 rounded-md hover:bg-gray-100 transition"
      >Tekrar Dene</button>
    </div>
  )
}

export default Error

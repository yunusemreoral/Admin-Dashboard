import { FC } from "react"
import Input from "./input"
import { BiSolidBellRing } from "react-icons/bi"
import Image from "next/image"
import avatar from "@/assets/images/user_image.webp";

const Header:FC = () => {
  return (
    <header className="border-b border-zinc-300 bg-white flex justify-between px-5 py-2 md:px-8">
      <Input/>

      <div className="flex gap-5 items-center">
        <BiSolidBellRing className="text-xl cursor-pointer text-zinc-700"/>

        <div className="flex gap-3">
          <Image src={avatar} alt="avatar" width={50} height={50}
          className="size-12 rounded-full"/>

          <div>
            <p className="font-semibold text-black">Y.Emre Oral</p>
            <p className="text-sm text-zinc-500">Admin</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

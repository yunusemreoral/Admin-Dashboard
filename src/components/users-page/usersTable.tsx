import { getUsers } from "@/utils/service"
import Link from "next/link";
import { FC } from "react"
import { FaEye } from "react-icons/fa";
import BanButton from "./ban-button";


const UsersTable:FC = async () => {
  const users = await getUsers();
  

  return (
    <div className="max-sm:w-[80vw] overflow-x-auto">
      <table className="border shadow w-full bg-white rounded-md mt-5 border-zinc-300 z-0">
      <thead>
        
        <tr className="border-b border-zinc-300 shadow">
          
          <th className="py-4">No</th>
          <th>İsim</th>
          <th>Eposta</th>
          <th>Ülke</th>
          <th>Şehir</th>
          <th>Sipariş Sayısı</th>
          <th>Eylem</th>
          
        </tr>
      </thead>

      <tbody>
        {users.map((user,key) => (
          <tr key={key}>
            <td className="py-8">{key + 1} </td>
            <td>{user.name} </td>
            <td>{user.email} </td>
            <td>{user.address.country} </td>
            <td>{user.address.city} </td>
            <td>{user.orders.length} </td>
            <td>
              <div className="flex items-center justify-center gap-3">
                <Link href={`?show=${user.id}`} className="button hover:bg-gray-200">
                <FaEye />
                </Link>

                <BanButton id={user.id} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  )
}

export default UsersTable

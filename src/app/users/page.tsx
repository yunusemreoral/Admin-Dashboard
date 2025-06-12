import UserModal from "@/components/users-page/user-modal";
import UsersTable from "@/components/users-page/usersTable"
import { FC, Suspense } from "react"
import Loading from "./loading";

type Props = {
  searchParams: Promise<{show: string}>;
}

const Users:FC<Props> = async ({searchParams}) => {
  const {show} = await searchParams;
  return (
    <div className="page">
      <h1 className="title">Kullanıcılar</h1>

{/* suspense özelliği ile loading in ekranda nerde gösterilmesini istiyorsak oraya veririz */}
<Suspense fallback={<Loading designs="my-60"/>} >
      <UsersTable/>
</Suspense>
      <UserModal id={show} />
    </div>
  );
};

export default Users

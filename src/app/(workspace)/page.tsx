import { currentUser } from "@/modules/authentication/actions";
import UserButton from "@/modules/authentication/components/user-button";


export default async function Home() {
  const user = await currentUser();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-7xl text-black font-bold mb-30">My first Saas</h1>
      
      <UserButton user={user}/>
    </div>
  );
}

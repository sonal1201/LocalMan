import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-7xl text-black font-bold mb-30">My first Saas</h1>
      
      <Button className="m-3 mb-70">Click Me</Button>
    </div>
  );
}

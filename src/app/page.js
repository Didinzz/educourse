import Image from "next/image";
import { redirect } from "next/navigation";


export default function Home() {
  redirect("/login");
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
    </div>
  );
}

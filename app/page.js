import Image from "next/image";
import { Source_Code_Pro } from "next/font/google";

const source_code_pro = Source_Code_Pro({
  subsets:["latin"],
})

export default function Home() {
  return (
    <main className={source_code_pro.className}>
      <div className="flex flex-col justify-center items-center text-center h-screen text-7xl ">
        <p>This website is currently under construction.</p>
        <p>Check back soon!</p>
      </div>
    </main>
  );
}

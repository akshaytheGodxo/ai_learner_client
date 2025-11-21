import Image from "next/image";
import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import GetUser from "@/components/ui/display_user";
export default  function Home() {
  
  return (

    <div className="">
      <Header />
      <GetUser />
      <Hero />
    </div>
  );
}

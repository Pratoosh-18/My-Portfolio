import { FloatingDockNav } from "@/components/custom/FloatingDock";
import { Hero } from "@/components/custom/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[800vh]">
    <Hero/>
    <FloatingDockNav/>
    </div> 
  );
}

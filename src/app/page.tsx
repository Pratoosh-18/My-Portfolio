import { FloatingDockDemo } from "@/components/custom/FloatinDock";
import { Hero } from "@/components/custom/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[800vh]">
    <Hero/>
    <FloatingDockDemo/>
    </div> 
  );
}

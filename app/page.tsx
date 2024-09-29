// import Image from "next/image";
import { Dock } from "../components/dock";
import { Cards } from "../components/cards";
import { BackgroundLines } from "@/components/ui/background-lines";
import { FlipWords } from "@/components/ui/flip-words";
import { ExpandableCard } from "@/components/cards2";
import { ThreeDCard } from "@/components/cards3";
import { Techstacks } from "@/components/techstacks";
import { div } from "framer-motion/client";


export default function Home() {
  const words = ["freelance developer", "fullstack web dev", "cs 4th year undergrad", "open to work"];
  return (
    <div>
      <div className="relative min-h-screen pb-96 bg-transparent">
        <div className="flex justify-center items-center ">
          <div className="p-10 text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
            sankhadip roy
            <FlipWords words={words} />
          </div>
        </div>
        <BackgroundLines >
          <div className="z-0 relative">
            <span className="flex justify-center items-center text-4xl font-bold text-[#4b4c4f]">projects</span>
            <Cards />
            <br /><span className="flex justify-center items-center text-4xl font-bold text-[#4b4c4f]">freelance works</span><br />
            <ExpandableCard />
            {/* have to fix bugs before showing */}
            {/* <ThreeDCard /> */}
            <br /><span className="flex justify-center items-center text-4xl font-bold text-[#4b4c4f]">tech stacks</span><br />
            <Techstacks />
          </div>
        </BackgroundLines>
        <Dock />
      </div>
    </div>
  );
}

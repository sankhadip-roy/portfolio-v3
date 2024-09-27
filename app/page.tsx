// import Image from "next/image";
import { Dock } from "../components/dock";
import { Cards } from "../components/cards";
import { BackgroundLines } from "@/components/ui/background-lines";
import { FlipWords } from "@/components/ui/flip-words";
import { ExpandableCard } from "@/components/cards2";


export default function Home() {
  const words = ["freelance developer", "fullstack web dev", "cs 4th year undergrad"];
  return (
    <div className="relative min-h-screen">
      <div className="flex justify-center items-center bg-black">
        <div className="p-10 text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          sankhadip roy
          <FlipWords words={words} />
        </div>
      </div>
      <BackgroundLines >
        <div className="z-0 relative">
          <Cards />
        </div>
        {/* have to fix bugs before showing */}
        {/* <ExpandableCard /> */}
      </BackgroundLines>
      <Dock />
    </div>
  );
}

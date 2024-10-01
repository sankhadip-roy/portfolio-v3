import { Dock } from "../components/dock";
import { Cards } from "../components/cards";
import { BackgroundLines } from "@/components/ui/background-lines";
import { FlipWords } from "@/components/ui/flip-words";
import { ExpandableCard } from "@/components/cards2";
import { ThreeDCard } from "@/components/cards3";
import { Techstacks } from "@/components/techstacks";
import Link from "next/link";


export default function Home() {
  const words = ["freelance developer", "fullstack web dev", "cs 4th year undergrad", "open to work"];
  return (
    <div className="relative min-h-screen pb-52 bg-black">
      <BackgroundLines >
        <div className="flex justify-center items-center ">
          <div className="p-10 text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
            sankhadip roy
            <FlipWords words={words} />
          </div>
        </div>
        <div className="z-0 relative">
          <span className="flex justify-center items-center text-4xl font-bold text-[#4b4c4f]">projects</span>
          <Cards />

          <div className="flex justify-center items-center">
            <Link href="/allprojects">
              <button type="submit" className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-extrabold text-slate-400 transition-colors focus:outline-none focus:ring-0 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50">all projects here &rarr;
              </button>
            </Link>
          </div>
          <br /><br /><span className="flex justify-center items-center text-4xl font-bold text-[#4b4c4f]">freelance works</span><br />
          <ExpandableCard />
          {/* have to fix bugs before showing */}
          {/* <ThreeDCard /> */}
          <br /><span className="flex justify-center items-center text-4xl font-bold text-[#4b4c4f]">tech stacks</span><br />
          <Techstacks />
        </div>
        <Dock />
      </BackgroundLines>
    </div>
  );
}

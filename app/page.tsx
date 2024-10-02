import { Cards } from "../components/cards";
import { BackgroundLines } from "@/components/ui/background-lines";
import { FlipWords } from "@/components/ui/flip-words";
import { ExpandableCard } from "@/components/cards2";
// import { ThreeDCard } from "@/components/cards3";
import { Techstacks } from "@/components/techstacks";
import Link from "next/link";


export default function Home() {
  const words = ["freelance developer", "fullstack webdev", "cs undergrad", "open to work"];
  return (
    <div className="relative min-h-screen pb-52 bg-black">
      <BackgroundLines >
        <div className="flex justify-center items-center ">
          <FlipWords words={words} />
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

          {/* <ThreeDCard /> */}  {/* have to fix bugs before showing */}

          <br /><span className="flex justify-center items-center text-4xl font-bold text-[#4b4c4f]">tech stacks</span><br />
          <Techstacks />
          <br /><span className="flex justify-center items-center text-4xl font-bold text-[#4b4c4f]">relevant certifications</span><br />
          <div className="flex flex-col justify-center items-center space-y-4">
            <Link
              href="https://www.cloudskillsboost.google/public_profiles/7d18dec5-8631-4b54-8bb6-05a57eddc44d"
              className="text-lg text-blue-600 dark:text-blue-400 hover:underline transition duration-300 ease-in-out"
            >
              Google Cloud Engineer Learning Path (GCP)
            </Link>
            <Link
              href="https://www.credly.com/badges/25ee1989-d8e0-4a02-a8cc-b3a0039019bd/print"
              className="text-lg text-blue-600 dark:text-blue-400 hover:underline transition duration-300 ease-in-out"
            >
              AWS Academy Cloud Foundations (AWS)
            </Link>

          </div>

        </div>
      </BackgroundLines >
    </div >
  );
}

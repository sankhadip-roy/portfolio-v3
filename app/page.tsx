// import Image from "next/image";
import { Dock } from "../components/dock";
import { Cards } from "../components/cards";
import { BackgroundLines } from "@/components/ui/background-lines";
export default function Home() {
  return (
    <div className="relative min-h-screen">
      <BackgroundLines >
        <div className="z-0 relative">
          <Cards />
        </div>
      </BackgroundLines>
      <Dock />
    </div>
  );
}

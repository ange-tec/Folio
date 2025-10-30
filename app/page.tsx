import Herosection from "@/components/domain/home/herosection";
import HomelistFirst from "@/components/domain/home/homelist-first";
import HomelistSecond from "@/components/domain/home/homelist-second";

export default function Home() {
  return (
      <main className="w-auto py-28">
          <Herosection />
          <HomelistFirst />
          <HomelistSecond />
      </main>
  );
}

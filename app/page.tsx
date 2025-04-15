import Header from "@components/basic-ui/header";
import { OutlineSection } from "@components/basic-ui/outline-section";
export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] h-[900px]">
      <Header />
      <div className="body w-full h-full bg-gradient-to-t from-white to-sky-100 p-4 ">
        <OutlineSection/>
        <OutlineSection/>
        <OutlineSection/>
      </div>
    </div>
  );
}

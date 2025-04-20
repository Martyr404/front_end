import Header from "@components/basic-ui/header";
import { OutlineSection } from "@components/basic-ui/outline-section";
export default function Home() {
  return (
    <div className="relative font-[family-name:var(--font-geist-sans)] h-[900px]">
      <Header />
      <div className="fixed inset-0 bg-gradient-to-t from-white to-sky-100 -z-10" />
      <div className="body w-full h-full">
        <OutlineSection/>
        <OutlineSection/>
        <OutlineSection/>
      </div>
    </div>
  );
}


import Header from "@components/header";
import  Body  from "@components/body";
import { BackButton } from "@components/back-button";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] overflow-y-hidden" style={{
      scrollbarWidth: "none", // Firefox
      msOverflowStyle: "none", // IE/Edge
    }}>
      <Header/>
      <Body/>
    </div>
  );
}

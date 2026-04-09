import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import LastSection from "./components/LastSection";
 
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <MainSection />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <LastSection />
      </main>
    </>
  );
}
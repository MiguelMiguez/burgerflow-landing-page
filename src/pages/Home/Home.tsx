import { NavBar } from "../../components";
import {
  Hero,
  Features,
  Platform,
  HowItWorks,
  Benefits,
  CTA,
  Footer,
} from "../../sections";

export function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Features />
        <Platform />
        <HowItWorks />
        <Benefits />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

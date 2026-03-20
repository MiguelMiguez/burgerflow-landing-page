import {
  Header,
  Hero,
  Features,
  Platform,
  HowItWorks,
  Testimonials,
  CTA,
  Footer,
} from "../../sections";

export function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Platform />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

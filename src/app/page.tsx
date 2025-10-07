import { Header } from "./components/header/Header"
import { Results } from "./components/results/Results";
import { About } from "./components/about/About";
import { HowItWorks } from "./components/howItWorks/HowItWorks";
import { Benefits } from "./components/benefits/Benefits";
import { FAQ } from "./components/faq/Faq";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Results />
      <HowItWorks />
      <Benefits />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

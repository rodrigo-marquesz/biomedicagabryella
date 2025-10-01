import { Header } from "./components/header/Header"
import { Results } from "./components/results/Results";
import { About } from "./components/about/About";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Results />
    </div>
  );
}

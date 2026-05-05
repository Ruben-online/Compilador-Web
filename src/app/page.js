import Navbar from "../components/navbar";
import Hero from "../sections/hero";
import Introduction from "../sections/introduction";
import Language from "../sections/language";
import Phases from "../sections/phases";
import Demo from "../sections/demo";
import Repository from "../sections/repository";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Introduction />
      <Language />
      <Phases />
      <Demo />
      <Repository />
    </main>
  );
}
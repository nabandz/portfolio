import Header from "../header/Header";
import Hero from "../hero/Hero";
import Skills from "../skills/Skills";
import Portfolio from "../portfolio/Portfolio";
import Footer from "../footer/Footer";
import Experience from "../experience/Experience";

import "./app.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        {/* <Hero />
        <Skills />
        <Portfolio /> */}
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;

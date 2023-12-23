import { Helmet, HelmetProvider } from "react-helmet-async";

import Hero from "../hero/Hero";
import Skills from "../skills/Skills";
import Portfolio from "../portfolio/Portfolio";

const MainPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta name="description" content="Main information" />
        <title>главная страница | nb</title>
      </Helmet>
      <div className="container">
        <Hero />
        <Skills />
        <Portfolio />
      </div>
    </HelmetProvider>
  );
};

export default MainPage;

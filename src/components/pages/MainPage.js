import { Helmet, HelmetProvider } from "react-helmet-async";

import Hero from "../Hero/Hero";
import Skills from "../Skills/Skills";
import Portfolio from "../Portfolio/Portfolio";

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

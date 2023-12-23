import { Helmet, HelmetProvider } from "react-helmet-async";

import Experience from "../experience/Experience";

const ExperiencePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta name="description" content="Experience information" />
        <title>опыт | nb</title>
      </Helmet>
      <Experience />;
    </HelmetProvider>
  );
};

export default ExperiencePage;

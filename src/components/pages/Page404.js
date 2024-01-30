import { Helmet, HelmetProvider } from "react-helmet-async";

import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Page404 = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta name="description" content="Error information" />
        <title>404 | nb</title>
      </Helmet>
      <ErrorMessage />
    </HelmetProvider>
  );
};

export default Page404;

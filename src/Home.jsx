import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Moha Milon - Home</title>
      </Helmet>
      <div>
        <span className="loading loading-spinner text-error"></span>
      </div>
    </HelmetProvider>
  );
};

export default Home;

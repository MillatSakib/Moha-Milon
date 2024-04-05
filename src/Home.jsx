import React, { useContext } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { AuthContext } from "./AuthProvider";

const Home = () => {
  const contextApi = useContext(AuthContext);
  console.log(contextApi);
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

import React from "react";
import { Footer } from "../components/Footer/Footer";
import { Nav } from "../components/Nav/Nav";

export const AppLayout: React.FC<{}> = ({ children }) => {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div>{children}</div>
      <Footer />
    </>
  );
};

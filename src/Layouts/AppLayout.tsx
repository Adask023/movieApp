import React from "react";
import { Footer } from "../components/Footer/Footer";
import { Nav } from "../components/Nav/Nav";

export const AppLayout: React.FC<{}> = ({ children }) => {
  return (
    <>
      <Nav />
      <section className="max_width">{children}</section>
      <Footer />
    </>
  );
};

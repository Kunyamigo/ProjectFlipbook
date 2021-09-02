import React from "react";
import { homeObj } from "./Data";
import { InfoSection } from "../../components";
import Hero from "../../components/Hero/Hero";
import Cards from "../../components/Cards/Cards";

function Home() {
  return (
    <>
      <Hero />
      <InfoSection {...homeObj} />
      <Cards />
    </>
  );
}

export default Home;

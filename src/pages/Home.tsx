import React from "react";
import CardList from "../components/CardList";
import Navbar from "../components/Navbar";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <CardList />
    </>
  );
};

export default Home;
import "./App.css";
import React from "react";
import "./index.css";
import Header from "./JSX/header";
import Offers from "./JSX/offers";
import Explore from "./JSX/explore";
import Property from "./JSX/property";
import Destination from "./JSX/destination";
import Subscribe from "./JSX/subscribe";
import Footer from "./JSX/footer";

function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Offers />
        <Explore />
        <Property />
        <Destination />
      </div>
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;

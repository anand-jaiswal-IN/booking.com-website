import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import Header from "./JSX/header";
import Offers from "./JSX/offers";
import Explore from "./JSX/explore";
import Property from "./JSX/property";
import Destination from "./JSX/destination";
import Subscribe from "./JSX/subscribe";
import Footer from "./JSX/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <div className="md:px-20 px-4">
      <Offers />
      <Explore />
      <Property />
      <Destination/>
    </div>
    <Subscribe/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

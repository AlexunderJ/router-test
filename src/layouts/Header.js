import React from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/Header.css";

import img1 from "../images/pike1.png";
import img2 from "../images/pike2.jpg";
import img3 from "../images/sail1.jpg";

const Header = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <img src={img2} alt="Pike" />} />
        <Route path="/products" render={() => <img src={img1} alt="Pike" />} />
        <Route path="/contact" render={() => <img src={img3} alt="Pike" />} />
        <Route path="/admin" render={() => <img src={img2} alt="Pike" />} />
        <Route render={() => <img src={img3} alt="Pike" />} />
      </Switch>
    </>
  );
};

export default Header;

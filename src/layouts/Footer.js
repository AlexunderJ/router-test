import React from "react";
import { Route } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <h2>Stopka</h2>
      <Route
        path="/"
        exact
        render={(props) => {
          return (
            <>
              Jesteś na <span>Stronie głównej</span>
            </>
          );
        }}
      />
      <Route
        path="/:page"
        exact
        render={(props) => {
          return (
            <>
              Jesteś na <span>{props.match.params.page}</span>
            </>
          );
        }}
      />
      <Route
        path="/:page/:idProduct"
        exact
        render={(props) => {
          return (
            <>
              Jesteś na <span>{props.match.params.idProduct}</span>
            </>
          );
        }}
      />
    </div>
  );
};

export default Footer;

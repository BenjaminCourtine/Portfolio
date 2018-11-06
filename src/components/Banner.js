import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Benjamin Courtine</h1>
      <h3>
        Je suis un jeune web developpeur parisien étudiant à Sup'Internet, l'école des haut potentiel du web.
        <a className="smoothscroll" href="#about">
          {" "}
        </a>{" "}
        <a className="smoothscroll" href="#about">
          {" "}
        </a>
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;

import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/benjamin-courtine-img.jpeg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">

        <div className="row">
          <div className="columns contact-details">
            <h2>Contacts</h2>
            <p className="address">
              <span>Benjamin Courtine</span>
              <br />
              <span>
                Paris (75013)
                <br /> 16 Rue de Tolbiac
              </span>
              <br />
              <span>06 71 15 49 79</span>
              <br />
              <span>benjamin.courtine@supinternet.fr</span>
            </p>
          </div>
          <div className="columns download">

          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;

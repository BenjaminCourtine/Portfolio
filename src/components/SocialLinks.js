import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGooglePlus,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://github.com/Bennnj/">
        <FaGithub />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/benjamin-courtine-ab051115b/">
        <FaLinkedin />
      </a>
    </li>
  </ul>
);

export default SocialLinks;

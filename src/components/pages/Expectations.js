import React from "react";
import ruleOne from "../images/ruleOne.png";
import ruleTwo from "../images/ruleTwo.png";
import ruleThree from "../images/ruleThree.png";
import ruleFour from "../images/ruleFour.png";
import ruleFive from "../images/ruleFive.png";
import ruleSix from "../images/ruleSix.png";
import './Expectations.css'

const Expectations = () => {
  return (
    <div>
      <h1>My Expectations</h1>
      <ul className="image-grid">
        <li>
          <img
            src={ruleOne}
            alt="Rule One"
            className="about-image"
          />
        </li>
        <li>
          <img
            src={ruleTwo}
            alt="Rule Two"
            className="about-image"
          />
        </li>
        <li>
          <img
            src={ruleThree}
            alt="Rule Three"
            className="about-image"
          />
        </li>
        <li>
          <img
            src={ruleFour}
            alt="Rule Four"
            className="about-image"
          />
        </li>
        <li>
          <img
            src={ruleFive}
            alt="Rule Five"
            className="about-image"
          />
        </li>
        <li>
          <img
            src={ruleSix}
            alt="Rule Six"
            className="about-image"
          />
        </li>
      </ul>
    </div>
  );
};

export default Expectations;

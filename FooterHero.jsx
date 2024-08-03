import React from "react";
import { FiTarget } from "react-icons/fi";
import "./FooterHero.scss";
export const FooterHero = () => {
  return (
    <div className="FooterHero">
      <div className="FooterHero_wrapper">
        <h3>The All New</h3>
        <h2>Kryo X26 MTB Is Here</h2>
        <p>
          Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
          vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris
          in erat justo.
        </p>
        <button className="FooterHero_btn" type="submit">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

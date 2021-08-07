import React from "react";
import "./main.css";

import InstagramIcon from "@material-ui/icons/Instagram";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

function Card({ image_link, name, fb, insta }) {
  return (
    <div className="card">
      <div div className="rectangle">
        <img className="image" src={image_link} alt="img"></img>
        <div className="namecontainer">{name}</div>
        <div className="socialiconcontainer" id="fb">
          <a href={fb} className="vector" target="_blank">
            <FontAwesomeIcon icon={faFacebookF} style={{ color: "gray" }} />
          </a>
          <div className="socialiconcontainer" id="insta">
            <a href={insta} className="vector" target="_blank">
              <InstagramIcon style={{ color: "gray" }} />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

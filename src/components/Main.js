import React from "react";
import loc from "./images/loc.png";

export default function Main(props) {
  const grey = {
    color: " #888",
  };
  return (
    <div className="container">
      <div className="box1">
        <img className="img" src={props.urlToImage} alt="" />
      </div>
      <div className="box3">
        <div className="box2">
          <img src={loc} alt="" />
          <span>{props.location}</span>
          <span>
            <u style={grey}>
              <a
                href="https://en.wikipedia.org/wiki/Mount_Fuji"
                target="_blank"
              >
                {" "}
                View on Google map
              </a>
            </u>
          </span>
        </div>
        <h3>
          {props.title}
        </h3>
        <p style={{ marginTop: '13px' }}><b>{props.startDate}-{props.endDate}</b></p>
        <p>{props.description}</p>

      </div>
    </div>
  );
}

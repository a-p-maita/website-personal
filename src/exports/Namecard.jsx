// import React from "react";
// import "./Namecard.css";
import pfpImg from "../assets/Profile_Picture-Real.webp";
import Contacts from "./Contacts";

{
  /*This is a comment in react btw.*/
}
{
  /*Have to use className instead of class bc its a TS reserved word.*/
}

const Namecard = () => {
  return (
    <div
      className="card mb-3"
      style={{ width: "100%", height: "15rem", overflow: "hidden" }}
    >
      {/*Using a bootstrap card layout, mb-3 is the style with an image beside text.*/}
      {/*h-100 and w-100 fits parent dimensions.*/}
      <div className="row g-0 h-100">
        <div className="col-md-4 h-100 d-flex align-items-center justify-content-center">
          {/*object-fit-contain is important and preserves image ratio/dimensions.*/}
          <img
            src={pfpImg}
            className="img-fluid rounded-start h-100 w-100 object-fit-contain"
            alt="Andreas Maita"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Andreas Maita</h5>
            <p className="card-text">Yoohoo</p>
            <Contacts></Contacts>
            {/* <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Namecard;

// .contact {
// display: flex;
// flex-direction: column;
// align-items: center;
// gap: 0.2em;
// margin-bottom: 0.6em;
// font-size: 9.5pt;
// }

// .contact-row {
// display: flex;
// gap: 0.8em;
// justify-content: center;
// }

// .contact-row a {
// color: #009b77;
// text-decoration: none;
// font-weight: 700;
// }

// .contact-row a:hover {
// text-decoration: underline;
// }

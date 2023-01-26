import React from "react";
import "../styles/ThankYou.css";
import thankimg from "../images/illustration-thank-you.svg";
const ThankYou = ({item}) => {
  return (
    <div className="wrapper1">
      <div className="thankyouImg">
        <img src={thankimg} alt="" />
      </div>
      <p className="selected">You selected {item} out of 5</p>
      <h2 >Thank you! </h2>
      <p className="paragraphe"> We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    </div>
  );
};
export default ThankYou;

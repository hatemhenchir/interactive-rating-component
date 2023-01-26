import React from "react";
import starImg from "../images/icon-star.svg";
import "../styles/Rating.css";

const Rating = ({ changeStateSubmited,changeItem }) => {
  return (
    <div className="wrapper">
      <div className="image">
        <img src={starImg} alt="star" />
      </div>
      <h2 className="title">How did we do?</h2>
      <p className="text">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="buttons">
        <button onClick={()=>changeItem(1)}>1</button>
        <button onClick={()=>changeItem(2)}>2</button>
        <button onClick={()=>changeItem(3)}>3</button>
        <button onClick={()=>changeItem(4)}>4</button>
        <button onClick={()=>changeItem(5)}>5</button>
      </div>
      <button type="submit" onClick={changeStateSubmited}>
        submit
      </button>
    </div>
  );
};
export default Rating;

import React, { Fragment } from "react";

const Sushi = props => {
  const { img_url, price, name, selected, id, setSushi } = props;

  const handleClick = () => {
    if (!selected) {
      console.log("yeah");
      setSushi(id, price);
    }
  };

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {selected === true ? null : <img src={img_url} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
};

export default Sushi;

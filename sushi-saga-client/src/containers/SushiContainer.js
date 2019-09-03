import React, { Fragment, useState } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = props => {
  const { sushi } = props;
  const [beltEnd, setBeltEnd] = useState(4);
  const [beltStart, setBeltStart] = useState(0);

  const handleBeltChange = () => {
    if (beltEnd === 100) {
      setBeltEnd(4);
      setBeltStart(0);
    } else {
      setBeltEnd(beltEnd + 4);
      setBeltStart(beltStart + 4);
    }
  };

  return (
    <Fragment>
      <div className="belt">
        {sushi
          .map(s => <Sushi setSushi={props.setSushi} {...s} />)
          .slice(beltStart, beltEnd)}
        <MoreButton handleBeltChange={handleBeltChange} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;

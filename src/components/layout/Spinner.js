import React, { Fragment } from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt='Loading...'
        style={{
          width: "500px",
          marginTop: "1rem",
          display: "block",
          margin: "auto"
        }}
      />
    </Fragment>
  );
};

export default Spinner;

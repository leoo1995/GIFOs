import React, { useState } from "react";
import spinner from "../../assets/spinnerpurple.gif";
import spinnerDark from "../../assets/spinnerdark.gif";

const Image = ({ src, alt, id, darkToggle }) => {
  const [loaded, setLoaded] = useState(false);
  const styleImage = {
    with: "unset",
    height: "unset"
  };
  return (
    <div>
      <img
        {...{ src, alt, id }}
        style={loaded ? styleImage : { width: "0" }}
        onLoad={e => {
          e.target.naturalWidth > 0 ? setLoaded(true) : setLoaded(false);
        }}
      />
      <img
        src={darkToggle ? spinnerDark : spinner}
        alt=""
        style={loaded ? { width: "0" } : styleImage}
      />
    </div>
  );
};

export default Image;

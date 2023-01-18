import React, { useState } from "react";

const Component = (props) => {
  const [error, setError] = useState(false);

  props.change(setError);

  if (error) {
    throw new Error("Error");
  }

  return <></>;
};

export default Component;

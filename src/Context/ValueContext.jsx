import React from "react";
export const valueCalc = {
  value: [],
  type: [],
  dotCheck: [],
};
export const ValueContext = React.createContext(valueCalc, () => {});

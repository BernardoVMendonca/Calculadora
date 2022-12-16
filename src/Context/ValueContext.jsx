import React from "react";
export const valueCalc = {
  value: [],
  type: [],
  dotCheck: false,
  floatFactor: 0.1,
  numberDigits: 0,
  therms: 0,
};
export const ValueContext = React.createContext(valueCalc, () => {});

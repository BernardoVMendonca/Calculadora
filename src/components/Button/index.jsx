import React, { useContext } from "react";
import { Container } from "./styles";
import { ValueContext } from "../../Context/ValueContext";

const Button = ({ value, variant, type, onClick }) => {
  const valueContext = useContext(ValueContext);

  const handlePop = () => {
    valueContext.value.pop();
    valueContext.type.pop();
  };
  const handleClean = () => {
    valueContext.value.splice(0, valueContext.value.length);
    valueContext.type.splice(0, valueContext.type.length);
  };
  const handleInsert = (newValue, newType) => {
    if (valueContext.value.length === 15) {
      alert("15 is the number maximum of digits");
      return;
    }
    if (valueContext.type.length === 0) {
      valueContext.dotCheck.push(false);
    }
    if (newValue === undefined && newType === undefined) {
      if (type === "power") {
        newValue = "^";
      } else if (type === "dot") {
        valueContext.dotCheck.pop();
        valueContext.dotCheck.push(true);
      } else if (type != "number") {
        valueContext.dotCheck.pop();
        valueContext.dotCheck.push(false);
      }

      newValue = value;
      newType = type;
    }
    if (
      type === "number" &&
      valueContext.type[valueContext.type.length - 1] === "number"
    ) {
    }
    valueContext.value.push(newValue);
    valueContext.type.push(newType);
  };

  const handleCalc = () => {
    const result = 0;
    handleClean();
    handleInsert(result, "number");
  };

  const handleButtonClick = () => {
    /*----------DEBUG----------*/
    // console.log("Type: " + valueContext.type);
    // console.log("Value: " + valueContext.value);
    console.log("DotCheck: " + valueContext.dotCheck);
    // console.log("Length: " + valueContext.type.length);

    if (
      valueContext.type.length === 0 &&
      (type === "power" ||
        type === "dot" ||
        type === "operation" ||
        type === "equal")
    ) {
      console.log("Error: " + 0);
      return;
    } else if (type === "clean") {
      handleClean();
      onClick();
      return;
    } else if (type === "backSpace") {
      handlePop();
      onClick();
      return;
    } else if (
      valueContext.type[valueContext.type.length - 1] === "number" &&
      type === "square"
    ) {
      console.log("Error: " + 1);
      return;
    } else if (
      valueContext.type[valueContext.type.length - 1] === "operation" &&
      type !== "square" &&
      type !== "number"
    ) {
      console.log("Error: " + 2);
      return;
    } else if (
      valueContext.type[valueContext.type.length - 1] === "dot" &&
      type !== "number"
    ) {
      console.log("Error: " + 3);
      return;
    } else if (
      valueContext.type[valueContext.type.length - 1] === "power" &&
      type !== "number"
    ) {
      console.log("Error: " + 4);
      return;
    } else if (
      valueContext.type[valueContext.type.length - 1] === "square" &&
      type !== "number"
    ) {
      console.log("Error: " + 5);
      return;
    } else if (
      type === "equal" &&
      valueContext.type[valueContext.type.length - 1] !== "number"
    ) {
      console.log("Error: " + 6);
      return;
    } else if (type === "dot" && valueContext.dotCheck[0] === true) {
      console.log("Error: " + 7);
      return;
    }
    if (
      type === "equal" &&
      valueContext.type[valueContext.type.length - 1] === "number"
    ) {
      handleCalc();
      onClick();
      return;
    }

    handleInsert();
    onClick();
    return;
  };

  return (
    <>
      <Container variant={variant} type={type} onClick={handleButtonClick}>
        {value}
      </Container>
    </>
  );
};

export default Button;

import React, { useContext } from "react";
import { Container } from "./styles";
import { ValueContext } from "../../Context/ValueContext";

const Button = ({ value, variant, type, onClick }) => {
  const context = useContext(ValueContext);

  const handlePop = () => {
    context.value.pop();
    context.type.pop();
  };
  const handleClean = () => {
    context.numberDigits = 0;
    context.dotCheck = false;
    context.floatFactor = 0.1;
    context.value.splice(0, context.value.length);
    context.type.splice(0, context.type.length);
    context.therms = 0;
  };

  const handleInsert = (newValue, newType) => {
    if (context.numberDigits === 9) {
      alert("9 is the number maximum of digits");
      return;
    } else if (context.floatFactor === 0.0001 && type === "number") {
      alert("3 is the number maximum of float digits");
      return;
    } else if (context.therms === 3 && type !== "dot") {
      if (
        context.dotCheck === false ||
        (context.dotCheck === true && type !== "number")
      ) {
        alert("3 is the number maximum of therms");
        return;
      }
    }
    if (type !== "dot") context.numberDigits++;
    if (newValue === undefined && newType === undefined) {
      newValue = value;
      newType = type;
      if (type === "power") newValue = "^";
      else if (type === "dot") context.dotCheck = true;
      else if (type !== "number") context.dotCheck = false;
    }
    if (
      type === "number" &&
      context.type[context.type.length - 1] === "number" &&
      context.dotCheck === false
    ) {
      context.value[context.value.length - 1] *= 10;
      context.value[context.value.length - 1] += value;
      return;
    } else if (type === "number" && context.dotCheck === true) {
      if (context.type[context.type.length - 1] === "dot") handlePop();
      context.value[context.value.length - 1] *= context.floatFactor ** -1;
      context.value[context.value.length - 1] += value;
      context.value[context.value.length - 1] /= context.floatFactor ** -1;
      context.floatFactor /= 10;

      return;
    }
    if (type !== "dot" || context.dotCheck === false) context.therms++;

    context.floatFactor = 0.1;

    context.value.push(newValue);
    context.type.push(newType);
  };

  const handleCalc = () => {
    let result = 0;
    let i = 0;
    for (; i < 3; i++) {
      if (context.type[i] !== "number" && context.type[i] !== "pi") break;
    }
    if (context.type[i] === "square") {
      if (context.type[i + 1] === "pi") context.value[i + 1] = 3.14;
      result = context.value[i + 1] ** 1 / 2;
    } else if (context.type[i] === "power") {
      if (context.type[i - 1] === "pi") context.value[i - 1] = 3.14;
      if (context.type[i + 1] === "pi") context.value[i + 1] = 3.14;
      result = context.value[i - 1] ** context.value[i + 1];
    } else if (context.type[i] === "operation") {
      if (context.type[i - 1] === "pi") context.value[i - 1] = 3.14;
      if (context.type[i + 1] === "pi") context.value[i + 1] = 3.14;
      switch (context.value[i]) {
        case "+":
          result = context.value[i - 1] + context.value[i + 1];
          break;
        case "-":
          result = context.value[i - 1] - context.value[i + 1];
          break;
        case "x":
          result = context.value[i - 1] * context.value[i + 1];
          break;
        case "/":
          if (context.value[i + 1] === 0) {
            alert("It's not possible to divide to 0");
            break;
          }
          result = context.value[i - 1] / context.value[i + 1];
          break;
      }
    }
    handleClean();
    handleInsert(result, "number");
  };

  const handleError = () => {
    let error;
    if (
      context.type.length === 0 &&
      (type === "power" ||
        type === "dot" ||
        type === "operation" ||
        type === "equal")
    )
      error = 0;
    else if (
      context.type[context.type.length - 1] === "number" &&
      (type === "square" || type === "pi")
    )
      error = 1;
    else if (
      context.type[context.type.length - 1] === "operation" &&
      type !== "number" &&
      type !== "square" &&
      type !== "pi"
    )
      error = 2;
    else if (
      context.type[context.type.length - 1] === "dot" &&
      type !== "number"
    )
      error = 3;
    else if (
      context.type[context.type.length - 1] === "power" &&
      type !== "number" &&
      type !== "pi"
    )
      error = 4;
    else if (
      context.type[context.type.length - 1] === "square" &&
      type !== "number" &&
      type !== "pi"
    )
      error = 5;
    else if (
      type === "equal" &&
      context.type[context.type.length - 1] !== "number" &&
      context.type[context.type.length - 1] !== "pi"
    )
      error = 6;
    else if (
      type === "dot" &&
      (context.dotCheck === true ||
        context.type[context.type.length - 1] === "pi")
    )
      error = 7;
    else if (
      context.type[context.type.length - 1] === "pi" &&
      (type === "square" || type === "number")
    )
      error = 8;

    return error;
  };

  const handleButtonClick = () => {
    /*----------DEBUG----------*/
    // console.log("Type: " + context.type);
    // console.log("Value: " + context.value);
    // console.log("DotCheck: " + context.dotCheck);
    // console.log("FloatFactor: " + context.floatFactor);
    // console.log("NumberDigits: " + context.numberDigits);
    // console.log("Length: " + context.type.length);
    // console.log("Therms: " + context.therms);

    if (type === "clean") handleClean();
    else if (
      type === "equal" &&
      (context.type[context.type.length - 1] === "number" ||
        context.type[context.type.length - 1] === "pi")
    )
      handleCalc();
    else {
      const error = handleError();
      if (error !== undefined) {
        console.log("Error: " + error);
        return;
      }

      handleInsert();
    }

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

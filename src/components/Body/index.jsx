import React, { useContext, useState } from "react";
import { Wrapper, Row, Column, Screen } from "./styles";
import Button from "../Button";
import { ValueContext } from "../../Context/ValueContext";

const Body = () => {
  const valueCalc = useContext(ValueContext);
  const [value, setValue] = useState(valueCalc.value);
  const [expression, setExpression] = useState("");

  const handleChangeScreenValue = () => {
    setValue(() => valueCalc.value);
    let aux = "";
    if (!valueCalc.error){
      
    for (let i = 0; i < value.length; i++) aux = aux + "" + value[i];
    
    }else{
      aux = "Invalid expression"
    }
    setExpression(() => aux);
  };

  return (
    <>
      <Wrapper>
        <Column>
          <Row>
            <Screen>{expression}</Screen>
          </Row>
          <Row>
            <Button
              value={"√"}
              type="square"
              onClick={handleChangeScreenValue}
            />
            <Button
              value={"xʸ"}
              type="power"
              onClick={handleChangeScreenValue}
            />
            <Button
              value={"π"}
              type="pi"
              onClick={handleChangeScreenValue}
            />
            <Button
              value={"C"}
              type="clean"
              onClick={handleChangeScreenValue}
            />
          </Row>
          <Row>
            <Button
              value={1}
              type="number"
              onClick={handleChangeScreenValue}
            />
            <Button
              value={2}
              type="number"
              onClick={handleChangeScreenValue}
            />
            <Button
              value={3}
              type="number"
              onClick={handleChangeScreenValue}
            />
            <Button
              value={"+"}
              type="operation"
              onClick={handleChangeScreenValue}
            />
          </Row>
          <Row>
            <Button
              value={4}
              type="number"
              onClick={handleChangeScreenValue}
            />
            <Button
              value={5}
              type="number"
              onClick={handleChangeScreenValue}
            />
            <Button
              value={6}
              type="number"
              onClick={handleChangeScreenValue}
            />
            <Button
              value={"-"}
              type="operation"
              onClick={handleChangeScreenValue}
            />
          </Row>
          <Row>
            <Button
              value={7}
              type="number"
              onClick={handleChangeScreenValue}
            />
            <Button
              value={8}
              type="number"
              onClick={handleChangeScreenValue}
            />
            <Button
              value={9}
              type="number"
              onClick={handleChangeScreenValue}
            />
            <Button
              value={"x"}
              type="operation"
              onClick={handleChangeScreenValue}
            />
          </Row>
          <Row>
            <Button
              value={0}
              type="number"
              onClick={handleChangeScreenValue}
            />
            <Button
              value={"."}
              type="dot"
              onClick={handleChangeScreenValue}
            />
            <Button
              value={"="}
              type="equal"
              onClick={handleChangeScreenValue}
            />
            <Button
              value={"/"}
              type="operation"
              onClick={handleChangeScreenValue}
            />
          </Row>
        </Column>
      </Wrapper>
    </>
  );
};

export { Body };

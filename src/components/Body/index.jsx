import { Wrapper, Row, Column, Screen } from "./styles";
import { Button } from "../Button";
const Body = () => {
  return (
    <>
      <Wrapper>
        <Column>
          <Row>
            <Screen>1000</Screen>
          </Row>
          <Row>
            <Button value={"M-"} variant="operation" />
            <Button value={"M+"} variant="operation" />
            <Button value={"%"} variant="operation" />
            <Button value={"C"} variant="operation" />
          </Row>
          <Row>
            <Button value={1} variant="number" />
            <Button value={2} variant="number" />
            <Button value={3} variant="number" />
            <Button value={"+"} variant="operation" />
          </Row>
          <Row>
            <Button value={4} variant="number" />
            <Button value={5} variant="number" />
            <Button value={6} variant="number" />
            <Button value={"-"} variant="operation" />
          </Row>
          <Row>
            <Button value={7} variant="number" />
            <Button value={8} variant="number" />
            <Button value={9} variant="number" />
            <Button value={"x"} />
          </Row>
          <Row>
            <Button value={0} variant="number" />
            <Button value={"."} variant="operation" />
            <Button value={"="} variant="operation" />
            <Button value={"/"} variant="operation" />
          </Row>
        </Column>
      </Wrapper>
    </>
  );
};

export { Body };

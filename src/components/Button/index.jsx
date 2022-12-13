import { Container } from "./styles";

const Button = ({ value, variant, onClick}) => {
  return (
    <>
      <Container variant={variant}>{value}</Container>
    </>
  );
};

export { Button };

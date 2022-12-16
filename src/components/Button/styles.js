import styled, { css } from "styled-components";

export const Container = styled.button`
  height: 16.5vh;
  width: 100%;
  font-size: 2em;
  text-align: center;
  background-color: white;
  color: gray;
  ${({ type }) =>
    type !== "number" &&
    css`
      background-color: orange;
    `}
  &:hover {
    color: black;
  }
`;

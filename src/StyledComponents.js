import styled from "styled-components";
export const Title = styled.h1`
  text-align: center;
`;

export const Container = styled.div`
  max-width: 30rem;
  margin: 0 auto;
`;

export const Calculator = styled.div`
  margin: 2rem;
  padding: 2rem;
  background-color: cyan;
`;
export const Screen = styled.div`
  background-color: white;
  padding: 0.2rem 1rem;
  margin-bottom: 1rem;

  font-size: 1.2rem;
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;

export const Button = styled.button`
  grid-column: ${(props) => props.col};
  grid-row: ${(props) => props.row};
  padding: 1rem;
  border: 1px solid black;
  background-color: ${(props) => props.theme.bg};
`;

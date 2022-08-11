import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
  background-color: ${(props) => props.theme.bg};
  transition-property: color, background-color;
  transition-duration: 100ms;
}
`;

export const themes = {
  light: { bg: "#DFEAF5", text: "black", btn: "#E3E9CF", screen: "white" },
  dark: { bg: "#222339", text: "white", btn: "#1A1C53", screen: "black" },
};
export const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.text};
  font-size: clamp(2rem, 3vw, 4rem);
`;

export const Container = styled.div`
  max-width: 30rem;
  margin: 0 auto;
  padding: 2rem;
`;

export const Calculator = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  background-color: ${(props) => props.theme.bg};
  border: 2px solid ${(props) => props.theme.text};
`;
export const Screen = styled.div`
  color: ${(props) => props.theme.text};
  padding: 0.2rem 1rem;
  margin-bottom: 1rem;
  background-color: ${(props) => props.theme.screen};
  border: 2px solid ${(props) => props.theme.text};
  font-size: clamp(1rem, 2.5vw, 2rem);
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
  font-size: clamp(1rem, 2vw, 1.5rem);
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.btn};
`;

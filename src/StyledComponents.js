import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
  background-color: ${(props) => props.theme.bg};
  transition-property: color, background-color;
  transition-duration: 100ms;
}
`;

export const themes = {
  blue: { bg: "#C1DFEA", text: "#0c213c", btn: "#98C4D4", screen: "white" },
  purple: { bg: "#584271 ", text: "white", btn: "#28143F", screen: "black" },
  pink: { bg: "#f5cce8", text: "#4a2040", btn: "#ec9ded", screen: "white" },
  gold: { bg: "#91811d", text: "#c9c9c9", btn: "#47411a", screen: "black" },
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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const ThemeButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid black;
  font-size: clamp(1rem, 2vw, 1.5rem);
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};
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

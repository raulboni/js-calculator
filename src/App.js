import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import {
  GlobalStyle,
  themes,
  Container,
  ButtonContainer,
  Title,
  ThemeButton,
  Calculator,
  Screen,
  Grid,
  Button,
} from "./StyledComponents";

function App() {
  const [theme, setTheme] = useState("blue");
  const [operationStr, setOperationStr] = useState("");
  const [result, setresult] = useState(false);
  function handleOperation() {
    let re = false;
    const regex = /[1-90\.]+/gi;
    const regex2 = /[^1-90.]+/gi;
    const nums = operationStr.match(regex);
    let operators = operationStr.match(regex2);
    if (nums.length > 1 && operators) {
      for (let i = 0; i < operators.length; i++) {
        const lastOperator = operators[i][operators[i].length - 1];
        const secondLastOperator = operators[i][operators[i].length - 2];

        if (operators[i].length > 1 && lastOperator === "-") {
          operators[i] = secondLastOperator;
          nums[1] = "-" + nums[1];
        }
        if (operators[i].length > 1) {
          operators[i] = lastOperator;
        }

        if (operators[i] === "+") {
          re = +nums.shift() + +nums.shift();
          nums.unshift(re);
        } else if (operators[i] === "-") {
          re = +nums.shift() - +nums.shift();
          nums.unshift(re);
        } else if (operators[i] === "*") {
          re = +nums.shift() * +nums.shift();
          nums.unshift(re);
        } else if (operators[i] === "/") {
          re = +nums.shift() / +nums.shift();
          nums.unshift(re);
        }
      }
      setresult(nums[0]);
      setOperationStr(`${nums[0]}`);
    } else {
      setresult(operationStr.match(/[1-90.]+/gi));
    }
  }

  function handleClear() {
    setOperationStr("");
    setresult(0);
  }
  function handleDelete() {
    setOperationStr((prev) => prev.substring(0, prev.length - 1));
  }

  function add(e) {
    if (
      (e.target.innerText === "." &&
        /\.\./.test(operationStr + e.target.innerText)) ||
      (e.target.innerText === "." &&
        /[0-9]+\.[0-9]\.+/.test(operationStr + e.target.innerText))
    ) {
    } else if (e.target.innerText === "0" && operationStr.length === 0) {
    } else {
      setOperationStr((prev) => prev + e.target.innerText);
    }
  }
  function handleTheme(e) {
    setTheme(e.target.value);
  }

  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle />
        <Container>
          <Title>Calculator</Title>
          <ButtonContainer>
            <ThemeButton
              bg="#584271"
              color="white"
              value="purple"
              onClick={handleTheme}
            >
              Purple
            </ThemeButton>
            <ThemeButton
              bg="#C1DFEA"
              color="Black"
              value="blue"
              onClick={handleTheme}
            >
              Blue
            </ThemeButton>
            <ThemeButton
              bg="#f5cce8"
              color="Black"
              value="pink"
              onClick={handleTheme}
            >
              Pink
            </ThemeButton>

            <ThemeButton
              bg="#91811d"
              color="#c9c9c9"
              value="gold"
              onClick={handleTheme}
            >
              Gold
            </ThemeButton>
          </ButtonContainer>
          <Calculator>
            <Screen>
              <p id="display" style={{ fontSize: "1rem", padding: "0" }}>
                {operationStr ? operationStr : "0"}
              </p>
              <p>{result ? result : "0"}</p>
            </Screen>
            <Button id="clear" onClick={handleClear}>
              Clear
            </Button>
            <Button onClick={handleDelete}>Delete</Button>
            <Grid>
              <Button id="zero" col="4" row="2" onClick={add}>
                0
              </Button>
              <Button id="one" col="1" row="2" onClick={add}>
                1
              </Button>
              <Button id="two" col="2" row="2" onClick={add}>
                2
              </Button>
              <Button id="three" col="3" row="2" onClick={add}>
                3
              </Button>
              <Button id="four" col="1" row="3" onClick={add}>
                4
              </Button>
              <Button id="five" col="2" row="3" onClick={add}>
                5
              </Button>
              <Button id="six" col="3" row="3" onClick={add}>
                6
              </Button>
              <Button id="seven" col="1" row="4" onClick={add}>
                7
              </Button>
              <Button id="eight" col="2" row="4" onClick={add}>
                8
              </Button>
              <Button id="nine" col="3" row="4" onClick={add}>
                9
              </Button>
              <Button id="decimal" col="4" row="3" onClick={add}>
                .
              </Button>
              <Button id="add" col="1" row="1" onClick={add}>
                +
              </Button>
              <Button id="subtract" col="2" row="1" onClick={add}>
                -
              </Button>
              <Button id="multiply" col="3" row="1" onClick={add}>
                *
              </Button>
              <Button id="divide" col="4" row="1" onClick={add}>
                /
              </Button>
              <Button id="equals" col="4" row="4" onClick={handleOperation}>
                =
              </Button>
            </Grid>
          </Calculator>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;

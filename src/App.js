import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import {
  GlobalStyle,
  themes,
  Container,
  Title,
  Calculator,
  Screen,
  Grid,
  Button,
} from "./StyledComponents";

function App() {
  const [theme, setTheme] = useState("light");
  const [operationStr, setOperationStr] = useState("");
  const [result, setresult] = useState(false);
  function handleOperation() {
    let re = false;
    const regex = /[1-90.]+/gi;
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

  function handleReset() {
    setOperationStr("");
    setresult(0);
  }
  function handleDelete() {
    setOperationStr((prev) => prev.substring(0, prev.length - 1));
  }

  function add(e) {
    setOperationStr((prev) => prev + e.target.innerText);
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
          <button value="dark" onClick={handleTheme}>
            Dark
          </button>
          <button value="light" onClick={handleTheme}>
            Light
          </button>
          <Calculator>
            <Screen>
              <p style={{ fontSize: "0.8rem", padding: "0" }}>
                {operationStr ? operationStr : "0"}
              </p>
              {result ? result : "0"}
            </Screen>
            <Button onClick={handleReset}>Reset</Button>
            <Button onClick={handleDelete}>Delete</Button>
            <Grid>
              <Button col="4" row="2" onClick={add}>
                0
              </Button>
              <Button col="1" row="2" onClick={add}>
                1
              </Button>
              <Button col="2" row="2" onClick={add}>
                2
              </Button>
              <Button col="3" row="2" onClick={add}>
                3
              </Button>
              <Button col="1" row="3" onClick={add}>
                4
              </Button>
              <Button col="2" row="3" onClick={add}>
                5
              </Button>
              <Button col="3" row="3" onClick={add}>
                6
              </Button>
              <Button col="1" row="4" onClick={add}>
                7
              </Button>
              <Button col="2" row="4" onClick={add}>
                8
              </Button>
              <Button col="3" row="4" onClick={add}>
                9
              </Button>
              <Button col="4" row="3" onClick={add}>
                .
              </Button>
              <Button col="1" row="1" onClick={add}>
                +
              </Button>
              <Button col="2" row="1" onClick={add}>
                -
              </Button>
              <Button col="3" row="1" onClick={add}>
                *
              </Button>
              <Button col="4" row="1" onClick={add}>
                /
              </Button>
              <Button col="4" row="4" onClick={handleOperation}>
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

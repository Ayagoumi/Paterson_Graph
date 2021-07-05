import "./App.css";
import { useState, useEffect } from "react";
import {
  AppContainer,
  SolutionWrapper,
  SVGContainer,
  InputWrapper,
  Input,
  Numbers,
  NumbersContainer,
} from "./Components/Style";
import Paterson from "./Assets/Paterson.svg";
function App() {
  const [inp, setInp] = useState("");
  const [res, setRes] = useState([]);
  let result = [];
  function ascii(a) {
    return a.charCodeAt(0);
  }
  var arr = new Array(10);
  for (var i = 0; i < 10; i++) {
    arr[i] = new Array(10);
  }
  arr[0][1] =
    arr[1][2] =
    arr[2][3] =
    arr[3][4] =
    arr[4][0] =
    arr[0][5] =
    arr[1][6] =
    arr[2][7] =
    arr[3][8] =
    arr[4][9] =
    arr[5][7] =
    arr[7][9] =
    arr[9][6] =
    arr[6][8] =
    arr[8][5] =
      true;
  const findthepath = (S, v) => {
    result = [];

    for (let i = 0; i < S.length; i++) {
      if (arr[v][ascii(S[i]) - ascii("A")] || arr[ascii(S[i]) - ascii("A")][v])
        v = ascii(S[i]) - ascii("A");
      else if (
        arr[v][ascii(S[i]) - ascii("A") + 5] ||
        arr[ascii(S[i]) - ascii("A") + 5][v]
      )
        v = ascii(S[i]) - ascii("A") + 5;
      else return false;
      result.push(v);
    }
    return true;
  };
  const submit = () => {
    let i = 0;
    if (inp) {
      while (i < inp.length) {
        if (ascii(inp[i]) < 65 || ascii(inp[i]) > 69) break;
        i++;
      }

      if (i === inp.length) {
        if (
          findthepath(inp, ascii(inp[0]) - ascii("A")) ||
          findthepath(inp, ascii(inp[0]) - ascii("A") + 5)
        )
          setRes(result);
        else {
          setRes([]);
          setRes([-1]);
        }
      } else {
        setRes(["incorrect"]);
      }
    } else setRes([]);
  };

  useEffect(() => {
    return () => {
      submit();
    };
  }, [inp]);

  return (
    <AppContainer>
        <h2>Paterson Graph</h2>
      <SVGContainer>
        <img src={Paterson} style={{ width: "100%" }} alt="Paterson" />
      </SVGContainer>
      <SolutionWrapper>
        <InputWrapper>
          <h2>Sequence :</h2>
          <Input
            type="text"
            placeholder="Sequence (ex: AABC)"
            onChange={(e) => setInp(e.target.value.toUpperCase())}
            value={inp}
            style={{}}
            required
          />
        </InputWrapper>
        <h2>Solution :</h2>
        <NumbersContainer>
          {res.map((item) => {
            return <Numbers>{item}</Numbers>;
          })}
        </NumbersContainer>
      </SolutionWrapper>
    </AppContainer>
  );
}

export default App;

import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  background-color: #eff6ff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const SVGContainer = styled.div`
  width: 80%;
  margin: 1em;
  max-width: 500px;
`;

export const SolutionWrapper = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1em;
`;

export const InputWrapper = styled.div`
  width: auto;
  margin-bottom: 1.25em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  padding: 1.25em;
  border-radius: 10px;
  width: calc(50px + 45vw);
  max-width: 400px;
  outline: none;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`;

export const Btn = styled.input`
  padding: 1.25em;
  border-radius: 10px;
  border: none;
  color: #fff;
  background: #000;
  outline: none;
  font-size: 24px;
  font-size: calc(1px + 2vmin);
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`;

export const NumbersContainer = styled.div`
  background-color: white;
  border-radius: 1em;
  width: 80%;
  padding: 0.5em;
  min-height: 4em;
  display: table;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Numbers = styled.h2`
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  border: 3px black solid;
  padding: 0.25em;
  margin: 0.25em;
  display: inline-block;
`;

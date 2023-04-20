import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [mainString, setMainString] = useState("");
  const [word, setWord] = useState("");
  const [replace, setReplace] = useState("");

  const [result, setResult] = useState("");

  const clickHandler = (e) => {
    e.preventDefault();

    let regex = new RegExp(word, "g");

    let newStr = mainString.replace(regex, replace);
    // let newStr = mainString.replace(word, replace)
    setResult(newStr);
  };

  return (
    <div className="App">
      <form className="form-sty">
        <label>
          Name:
          <input
            type="text"
            value={mainString}
            className="form-control"
            onChange={(e) => {
              setMainString(e.target.value);
            }}
          />
        </label>
        <br />
        <br />
        <label>
          Word:
          <input
            className="form-control"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Replace:
          <input
            className="form-control"
            value={replace}
            onChange={(e) => setReplace(e.target.value)}
          />
        </label>
        <br />
        <br />
        <button className="btn " onClick={(e) => clickHandler(e)}>
          Replace
        </button>

        <p className="result">
          <span>Result</span>: {result}
        </p>
      </form>
    </div>
  );
}

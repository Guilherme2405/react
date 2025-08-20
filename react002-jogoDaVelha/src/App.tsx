import { useState } from "react";
import "./App.css";

const playX: string[] = [];
const playO: string[] = [];
function Board() {
  const [played, setPlayed] = useState<string>("X");

  function playedValue() {
    if (played === "") {
      setPlayed("X");
    } else if (played === "X") {
      setPlayed("O");
    }

    const winConditional: string[][] = [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"],
    ];

    const vitoriasX = winConditional.filter((combination) =>
      combination.every((pos) => playX.includes(pos))
    );
    const vitoriasO = winConditional.filter((combination) =>
      combination.every((pos) => playO.includes(pos))
    );
    if (vitoriasX.length > 0) {
      console.log("win X");
      setPlayed("WinX");
    } else if (vitoriasO.length > 0) {
      console.log("win O");
      setPlayed("WinO");
    }
  }
  return (
    <div className="Board">
      <div className="board-row">
        <Square id={"0"} value={played} onClick={playedValue} />
        <Square id={"1"} value={played} onClick={playedValue} />
        <Square id={"2"} value={played} onClick={playedValue} />
      </div>
      <div className="board-row">
        <Square id={"3"} value={played} onClick={playedValue} />
        <Square id={"4"} value={played} onClick={playedValue} />
        <Square id={"5"} value={played} onClick={playedValue} />
      </div>
      <div className="board-row">
        <Square id={"6"} value={played} onClick={playedValue} />
        <Square id={"7"} value={played} onClick={playedValue} />
        <Square id={"8"} value={played} onClick={playedValue} />
      </div>
    </div>
  );
}

type Props = {
  id: string;
  value: string;
  onClick: () => void;
};

function Square({ id, onClick, value }: Props) {
  const [box, setBox] = useState<boolean>(true);
  const [values, setValues] = useState<string>("");
  const modifyBox = onClick;

  function verify() {
    if (value === "X" && box === true) {
      setValues("X");
      setBox(false);
      playX.push(id);
      modifyBox();
    } else if (value === "O" && box === true) {
      setValues("O");
      setBox(false);
      playO.push(id);
      modifyBox();
    }

    console.log("playX", playX);
    console.log("playO", playO);
  }
  return (
    <button
      className="Square"
      style={{ width: "100px", height: "100px", fontSize: "24px" }}
      id={id}
      value={value}
      onClick={() => {
        verify();
      }}
    >
      {values}
    </button>
  );
}
type ResetProps = {
  onclick: () => void;
};

function Reset({ onclick }: ResetProps) {
  return (
    <button className="Reset" onClick={onclick}>
      reset
    </button>
  );
}

function App() {
  const [reloadKey, setReloadKey] = useState(0);
  const handleReset = () => {
    playX.length = 0;
    playO.length = 0;
    setReloadKey((prev) => prev + 1);
  };
  return (
    <>
      <h1>TIC TAC TOE</h1>
      <div className="tic-tac-toe-container">
        <Board key={reloadKey} />
      </div>
      <Reset onclick={handleReset} />
    </>
  );
}

export default App;

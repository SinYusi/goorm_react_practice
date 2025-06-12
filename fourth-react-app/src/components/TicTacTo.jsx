import { useState } from "react"

export default function TicTacTo() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [tictacto, setTictacto] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState("");
  const [recovery, setRecovery] = useState([[["", "", ""], ["", "", ""], ["", "", ""]]]);

  const insertTic = (index) => {
    if (tictacto[index] !== "" || winner !== "") return;
    else {
      const newTictacto = tictacto.map((_, i) => {
        if (i === index) return currentPlayer;
        else return _;
      });
      setTictacto(newTictacto);
      setRecovery([...recovery, newTictacto]);
      if (hasWin(newTictacto)) setWinner(currentPlayer);
      else setCurrentPlayer(prev => prev === "X" ? "O" : "X");
    }
  }

  const hasWin = (tictacto) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (tictacto[a] !== "" && tictacto[a] === tictacto[b] && tictacto[b] === tictacto[c]) {
        return true;
      }
    }
    return false;
  }

  const doRecovery = (data, index) => {
    setTictacto(data);
    setRecovery(recovery.slice(0, index + 1));
    setWinner("");
    setCurrentPlayer(index % 2 === 0 ? "X" : "O");
  }

  return (
    <>
      <h4>{winner === "" ? `Next Player: ${currentPlayer}` : `Winner: ${winner}`}</h4>
      <div className="board-row">
        <button className="square" onClick={() => insertTic(0)}>{tictacto[0]}</button>
        <button className="square" onClick={() => insertTic(1)}>{tictacto[1]}</button>
        <button className="square" onClick={() => insertTic(2)}>{tictacto[2]}</button>
      </div>
      <div className="board-row">
        <button className="square" onClick={() => insertTic(3)}>{tictacto[3]}</button>
        <button className="square" onClick={() => insertTic(4)}>{tictacto[4]}</button>
        <button className="square" onClick={() => insertTic(5)}>{tictacto[5]}</button>
      </div>
      <div className="board-row">
        <button className="square" onClick={() => insertTic(6)}>{tictacto[6]}</button>
        <button className="square" onClick={() => insertTic(7)}>{tictacto[7]}</button>
        <button className="square" onClick={() => insertTic(8)}>{tictacto[8]}</button>
      </div>
      <ol>
        {recovery.map((c, i) => (
          <li><button onClick={() => doRecovery(c, i)}>{i === 0 ? `Go to game start` : `Go to move #${i}`}</button></li>
        ))}
      </ol>
    </>
  )
}
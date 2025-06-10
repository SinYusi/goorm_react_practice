import { useState } from "react"

export default function Counter() {
  const [number, setNumber] = useState(0);
  const [increaseNumber, setIncreaseNumber] = useState(0);

  return (
    <main>
      <h1>{number}</h1>
      <button onClick={() => setNumber(prev => prev + 1)}>
        +1
      </button>
      <br />
      <input
        type="text"
        placeholder="숫자만 적으세요"
        onChange={(e) => setIncreaseNumber(e.target.value)}
      />
      <br />
      <button onClick={() => setNumber(prev => prev + +increaseNumber)}>
        + {increaseNumber}
      </button>
    </main>
  )
}
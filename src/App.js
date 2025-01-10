import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;

function Counter() {
  const [count, setCount] = useState(0);

  const date = new Date("June 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button onClick={() => setCount((c) => c - 1)}>
          <div>-</div>
        </button>
        <span>Count:{count}</span>
        <button onClick={() => setCount((c) => c + 1)}>
          <div>+</div>
        </button>
      </div>

      <p>
        <span>
          {count === 0
            ? "today is"
            : count > 0
            ? `${count} days from today is`
            : `${Math.abs(count)} days was`}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}

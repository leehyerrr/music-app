import cn from "classnames";
import { useState } from "react";
import "./App.css";

const arr = ["aaa", "bbb", "ccc"];

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <div className="flex space-x-3">
        {arr.map((i) => {
          const radioId = `radio${i}`;

          return (
            <label key={i} htmlFor={radioId}>
              <input
                type="radio"
                name="xx"
                id={radioId}
                onChange={() => setShow(false)}
              />
              {i}
            </label>
          );
        })}
      </div>
      <div>
        <div className={cn(show && "hidden")}>안녕</div>
      </div>
    </>
  );
}

export default App;

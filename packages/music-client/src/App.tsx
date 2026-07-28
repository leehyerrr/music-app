import cn from "classnames";
import { useState } from "react";
import "./App.css";

const arr = ["aaa", "bbb", "ccc"];

function App() {
  const [show, setShow] = useState(true);
  const [sel, setSel] = useState("1");

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
        <select
          name="sel"
          id="sel1"
          onChange={(e) => setSel(e.currentTarget.value)}
        >
          <option value="1">111</option>
          <option value="2">222</option>
          <option value="3">333</option>
        </select>
        <div className={cn(sel !== "1" && "hidden")}>111</div>
        <div className={cn(sel !== "2" && "hidden")}>222</div>
        <div className={cn(sel !== "3" && "hidden")}>333</div>
      </div>
      <div>
        <div className={cn(show && "hidden")}>안녕</div>
      </div>
    </>
  );
}

export default App;

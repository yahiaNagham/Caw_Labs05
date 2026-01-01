import { useState } from "react";

export function Exercise1() {
  const [clicked, setClicked] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [buttonMsg, setButtonMsg] = useState("");
  const [counter, setCounter] = useState(0);

  return (
    <div style={{border: "1px solid #ccc", padding: "10px", marginBottom: "20px"}}>
      <h2>Exercise 1</h2>

      {/* Button clicked */}
      <button onClick={() => setClicked(true)}>ClickMe</button>
      {clicked && <p>Clicked</p>}

      {/* Toggle Button */}
      <button onClick={() => setToggle(!toggle)}>Toggle Me</button>
      <p>{toggle ? "Clicked" : "Not Clicked"}</p>

      {/* Three Buttons */}
      <div>
        <button onClick={() => setButtonMsg("Button #1 was clicked")}>Button1</button>
        <button onClick={() => setButtonMsg("Button #2 was clicked")}>Button2</button>
        <button onClick={() => setButtonMsg("Button #3 was clicked")}>Button3</button>
      </div>
      <p>{buttonMsg}</p>

      {/* Counter */}
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Inc</button>
      <button onClick={() => setCounter(counter - 1)}>Dec</button>
    </div>
  );
}

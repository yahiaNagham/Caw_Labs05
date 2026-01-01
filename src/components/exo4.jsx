import { useState } from "react";

export function Exercise4() {
  const [height, setHeight] = useState(100);
  const [width, setWidth] = useState(100);
  const [bgColor, setBgColor] = useState("#ff0000");
  const [divs, setDivs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDivs([...divs, { height, width, bgColor }]);
  };

  return (
    <div style={{border: "1px solid #ccc", padding: "10px", marginBottom: "20px"}}>
      <h2>Exercise 4</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="Height" value={height} onChange={(e)=>setHeight(e.target.value)} />
        <input type="number" placeholder="Width" value={width} onChange={(e)=>setWidth(e.target.value)} />
        <input type="color" value={bgColor} onChange={(e)=>setBgColor(e.target.value)} />
        <button type="submit">Add Div</button>
      </form>

      <div style={{ marginTop: "20px" }}>
        {divs.map((d, i) => (
          <div key={i} style={{
            height: `${d.height}px`,
            width: `${d.width}px`,
            backgroundColor: d.bgColor,
            marginBottom: "10px"
          }}/>
        ))}
      </div>
    </div>
  );
}

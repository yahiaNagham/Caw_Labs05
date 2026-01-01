import { useState } from "react";

export function Exercise2() {
  const tab1 = ["hello", "world", "from", "react"];
  const tab2 = ["React", "is", "fun"];
  
  return (
    <div style={{border: "1px solid #ccc", padding: "10px", marginBottom: "20px"}}>
      <h2>Exercise 2</h2>

      {/* Display tab1 */}
      <DisplayTab tab={tab1} />

      {/* Display tab2 */}
      <DisplayTab tab={tab2} />
    </div>
  );
}

// Reusable DisplayTab component
function DisplayTab({ tab }) {
  const [items, setItems] = useState(tab);

  const handleRemove = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} onClick={() => handleRemove(index)}>
          Element {index + 1} is: {item}
        </li>
      ))}
    </ul>
  );
}

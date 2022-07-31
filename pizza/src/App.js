import { useState } from "react";
import "./App.css";
import pizza from './images/pizza.webp'

export default function App() {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [pep, setPep] = useState(false);
  const [glu, setGlu] = useState(false);
  const [quant, setQuant] = useState("");
  const [print, setPrint] = useState(["Here is your Order: "]);
  const [text, setText] = useState("None");

  function handle(e) {
    e.preventDefault();
    if (pep === true) {
      const item = [
        ...print,
        `Orderd by ${name} size is ${size} Flavour is pepper and quantity is ${quant} ,
      Additional detsils: ${text}`
      ];
      setPrint(item);
    }
    if (glu === true) {
      const item = [
        ...print,
        `Orderd by ${name} size is ${size} Flavour is gluten and quantity is ${quant} ,
      Additional detsils: ${text}`
      ];
      setPrint(item);
    }
  }
  return (
    <>
      <h1>Order Your Pizza</h1>
      <img className="pizza" src={pizza} alt="pizza" />
      <form className="form">
        <label>name</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <br /><br />
        <label>Size</label>
        <select onChange={(e) => setSize(e.target.value)}>
          <option></option>
          <option>medium</option>
          <option>large</option>
        </select>
        <br /><br />
        <label>pepper</label>
        <input type="checkbox" value="pepper" onChange={(e) => setPep(true)} />
        <label>gluten</label>
        <input type="checkbox" value="gluten" onChange={(e) => setGlu(true)} />
        <br /><br />
        <label>quantity</label>
        <input type="number" onChange={(e) => setQuant(e.target.value)} />
        <br /><br />
        <label>Additional</label>
        <br /><br />
        <textarea onChange={(e) => setText(e.target.value)}></textarea>
        <br /><br />
        <input className="btn" type="submit" onClick={handle} />
      </form>
      <p>{print}</p>
    </>
  );
}

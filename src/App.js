import React, { useState } from "react";
import "./App.css";

function PizzaForm() {
  const [name, setName] = useState("");
  const [pepperoni, setPepperoni] = useState(false);
  const [sausage, setSausage] = useState(false);
  const [peppers, setPeppers] = useState(false);
  const [onions, setOnions] = useState(false);

  return (
    <div>
      <h1>Pizza Order</h1>
      <form>
        <div>
          <label>
            <input
              type="text"
              value={name}
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={pepperoni}
              onChange={() => setPepperoni(!pepperoni)}
            />
            Pepperoni
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={sausage}
              onChange={() => setSausage(!sausage)}
            />
            Sausage
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={peppers}
              onChange={() => setPeppers(!peppers)}
            />
            Peppers
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={onions}
              onChange={() => setOnions(!onions)}
            />
            Onions
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <h2>Your Order</h2>
      <p>{name}</p>
      {pepperoni && <p>Pepperoni</p>}
      {sausage && <p>Sausage</p>}
      {peppers && <p>Peppers</p>}
      {onions && <p>Onions</p>}
    </div>
  );
}

export default PizzaForm;

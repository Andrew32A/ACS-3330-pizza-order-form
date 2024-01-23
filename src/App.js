import React, { useState } from "react";
import "./App.css";

function PizzaForm() {
  const [name, setName] = useState("");
  const [pepperoni, setPepperoni] = useState(false);
  const [sausage, setSausage] = useState(false);
  const [peppers, setPeppers] = useState(false);
  const [onions, setOnions] = useState(false);

  return (
    <div className="container">
      <div className="form-container">
        <h1>Pizza Order</h1>
        <form>
          <div>
            <input
              type="text"
              value={name}
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="checkbox"
              checked={pepperoni}
              onChange={() => setPepperoni(!pepperoni)}
            />
            Pepperoni
          </div>
          <div>
            <input
              type="checkbox"
              checked={sausage}
              onChange={() => setSausage(!sausage)}
            />
            Sausage
          </div>
          <div>
            <input
              type="checkbox"
              checked={peppers}
              onChange={() => setPeppers(!peppers)}
            />
            Peppers
          </div>
          <div>
            <input
              type="checkbox"
              checked={onions}
              onChange={() => setOnions(!onions)}
            />
            Onions
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="order-summary">
        <h2>Your Order</h2>
        {name && <p>{name}</p>}
        {pepperoni && <p>Pepperoni</p>}
        {sausage && <p>Sausage</p>}
        {peppers && <p>Peppers</p>}
        {onions && <p>Onions</p>}
      </div>
    </div>
  );
}

export default PizzaForm;

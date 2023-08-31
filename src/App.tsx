import { useState } from "react";
import "./App.css";
import Form from "./components/form";

function App() {
  const [items, setItem] = useState<string[]>(["luis", "maria"]);

  return (
    <main className="container">
      <div className="row">
        <div className="col-md-6">
          <ul className="list-group">
            <li className="list-group-item active">List</li>
            {items.map((item, index) => (
              <li className="list-group-item" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-6">
          <Form setItem={setItem} />
        </div>
      </div>
    </main>
  );
}

export default App;

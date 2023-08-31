import { useState } from "react";
import "./App.css";
import Form from "./components/form";

function App() {
  const [items, setItem] = useState<string[]>(["luis", "maria"]);

  const handlerDelete = (item: string) => {
    const newList = items.filter((i) => i !== item);
    setItem(newList);
  };
  return (
    <main className="container">
      <h1 className="text-center display-2 mb-4">Listing</h1>
      <div className="row">
        <div className="col-md-6">
          <ul className="list-group">
            <li className="list-group-item active">List</li>
            {items.map((item, index) => (
              <li
                className="list-group-item  d-flex justify-content-between "
                key={index}
              >
                {item}
                <button
                  onClick={() => handlerDelete(item)}
                  className="badge bg-danger btn rounded-pill"
                >
                  Delete
                </button>
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

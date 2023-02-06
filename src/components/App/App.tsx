import dataGentleman from "../../data/data";
import Gentleman from "../Gentleman/Gentleman";
import Info from "../Info/Info";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Info />
      <section className="controls">
        <button className="button button--select">Select all</button>
      </section>
      {dataGentleman.map((gentleman) => (
        <Gentleman dataGentleman={gentleman} />
      ))}
    </div>
  );
}

export default App;

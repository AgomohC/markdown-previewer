import React from "react";
import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <main className="bg-dark height">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h2 className="text-light text-capitalize my-5">
              markdown previewer
            </h2>
          </div>
        </div>
        <section>
          <div className="row">
            <div className="col-9 mx-auto">
              <textarea
                className="w-100 mb-5 height-30 rounded"
                value={input}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="col-12 mx-auto">
              <textarea className="w-100 height-50 mb-5 text-light bg-secondary  rounded"></textarea>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default App;

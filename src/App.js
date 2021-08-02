import marked from "marked";
import React from "react";
import { useState } from "react";

const defaultInput = `# Welcome to my React Markdown Previewer!
## This is a sub-heading...
There's also [links](https://www.freecodecamp.com)

> Block Quotes!

You can also make text **bold**... whoa!
- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

`;

const App = () => {
  const [input, setInput] = useState(defaultInput);
  const handleChange = (e) => {
    setInput(e.target.value);
    let marked = require("marked");
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
              <div className="mb-0 rounded text-capitalize text-right p-2 pr-4 text-light bg-secondary">
                <h5>editor</h5>
              </div>
              <textarea
                className="w-100 mb-5 p-4 height-30 rounded"
                value={input}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="col-12 mx-auto">
              <div className="mb-0 text-capitalize text-right p-2 pr-4 text-dark bg-light rounded">
                <h5>previewer</h5>
              </div>
              <div
                className="w-100 height-50 mb-5 text-light bg-secondary p-5 rounded overflow"
                dangerouslySetInnerHTML={{ __html: marked(input) }}
              ></div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default App;

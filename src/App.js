
import './App.css';
import { useState } from 'react';
import { marked } from 'marked';


function App() {
  const [markdown, setMarkdown] = useState('');

  function handleTextChange(event) {
    let newMarkdown = event.target.value;
    setMarkdown(newMarkdown);
    // console.log(newMarkdown);
  };

  function getMarkdownPreview() {
    return { __html: marked(markdown) };
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Markdown Previewer
        </h1>
        
        <p>create markdown on the left, preview it on the right</p>

      </header>
      <div id="textareaPanel">

        <textarea
          id="inputBox"
          value={markdown}
          onChange={handleTextChange}
        />
        <div
          id="outputBox"
          dangerouslySetInnerHTML={getMarkdownPreview()}
        />
      </div>

    </div>
  );
}

export default App;

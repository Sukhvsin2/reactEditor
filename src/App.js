import React from 'react';
import './App.css';
import EditorJs from '@editorjs/editorjs';
import Header from "@editorjs/editorjs/dist/editor/header"
// import Header from '@editorjs/editorjs';
import List from "@editorjs/editorjs/dist/editor/list"
// import Embed from "@editorjs/embed"


function App() {
  let editor = new EditorJs({
    holder: 'editorjs',
    
    tools: {
      header: {
        class: Header,
        inlineToolbar:['link']
      },
      list: {
        class: List,
        inlineToolbar: [
          'link',
          'bold'
        ]
      },
      embed: {
        // class: Embed,
        inlineToolbar: false,
        config: {
          services: {
            youtube: true,
            coub: true
          }
        }
      }
    }
  });
  
  function save() {
    editor.save().then((outputData) => {
      console.log('Article data: ', outputData)
    }).catch((error) => {
      console.log('Saving failed: ', error)
    });
  }
  return (
    <div className="app">
      <header className="app-header"></header>
      <section>
        <div className="editorjs" id="editorjs"></div>
        <button onClick={save} >Save</button>
      </section>
    </div>
  );
}

export default App;

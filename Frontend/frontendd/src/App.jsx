import { useState,useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from 'prismjs'
import "prismjs/components/prism-javascript";
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github-dark.css"
import Markdown from "react-markdown" // for changing the review output into readable data
import axios from 'axios'

import './App.css'

function App() {
  
  const [code, setcode] = useState(`function sum(){
 return 1+1; 
 }`)
 const [review, setreview] = useState(``)

  useEffect(() => {
    prism.highlightAll()
  },[])
  
 async function reviewCode(){
   const response= await axios.post('http://localhost:3000/ai/get-review',{code})
    setreview(response.data)
  }
  function clearCode(){
    setcode("")
    setreview("")
    setcode("Give Your Best Code Here!")
  }

  return (

      
  
    <>
       <header className='header'>
        <h3 className='heading'>Code Review AI- BY PRINCE MISHRA </h3>
      </header>
    <main>
      <div className="left">
        <div className="code">
          <Editor
            value={code}
            onValueChange={code => setcode(code)}
            highlight={code => prism.highlight(code, prism.languages.javascript)}
            padding={10}
            style={{
              fontFamily : '"Fira Code", "Fira Mono", monospace',
              fontSize: 16,
              border: '1px solid #ddd',
              height: "100%" ,
              width:  "100%",
              borderRadius: 5,
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
              
            }}
          />

          <div className="review"
          onClick={reviewCode}>
            <button>
              Review
            </button>
            
          </div>
        </div>
        
      </div>
      <div className="right">
        <Markdown
          rehypePlugins={[rehypeHighlight]}>
            {review}
        </Markdown>

        <div className="clear-code"
          onClick={clearCode}>
            <button>
              clear
            </button>
            
          </div>
        
      </div>

    </main>
   
    </>
  )
}


export default App

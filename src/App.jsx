import { useState } from "react"
import "./App.css"

function App() {
  const [text, setText] = useState(`# H1

## H2

[My Portfolio](https://gaelsm.github.io/Portfolio)

\`<div> Inline Code </div>\`

\`\`\`
function holaMundo(){
  return "Hola Mundo"
}
\`\`\`

> Block Quotes!

- List
  - Sub Itemm List
    - Sub Sub Item List
  
**Bold Text**

![freeCodeCamp](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`)

  return (
    <main>
      <textarea id="editor" onChange={(e) => setText(e.target.value)} value={text}/>
      <div
        id="preview"
        dangerouslySetInnerHTML = {{ __html: DOMPurify.sanitize(marked.parse(text))}} 
      >
      </div>
    </main>
  )
}

export default App

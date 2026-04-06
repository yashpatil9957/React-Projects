import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor: color}}  //used as COLOR is to updated, so we can't write in classname!!
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl" 
        >
          <button
          onClick={() => {setColor("red")}} //remember the thing of CALL-BACK FUNCTION!!
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>

          <button
          onClick={() => {setColor("green")}} //remember the thing of CALL-BACK FUNCTION!!
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>

          <button
          onClick={() => {setColor("blue")}} //remember the thing of CALL-BACK FUNCTION!!
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>

          <button
          onClick={() => {setColor("olive")}} //remember the thing of CALL-BACK FUNCTION!!
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "olive"}}
          >olive</button>

          <button
          onClick={() => {setColor("gray")}} //remember the thing of CALL-BACK FUNCTION!!
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "gray"}}
          >gray</button>

          <button
          onClick={() => {setColor("yellow")}} //remember the thing of CALL-BACK FUNCTION!!
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "yellow"}}
          >yellow</button>

          <button
          onClick={() => {setColor("pink")}} //remember the thing of CALL-BACK FUNCTION!!
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "pink"}}
          >pink</button>

          <button
          onClick={() => {setColor("purple")}} //remember the thing of CALL-BACK FUNCTION!!
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "purple"}}
          >purple</button>

          <button
          onClick={() => {setColor("lavender")}} //remember the thing of CALL-BACK FUNCTION!!
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "lavender"}}
          >lavender</button>

          <button
          onClick={() => {setColor("white")}} //remember the thing of CALL-BACK FUNCTION!!
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "white"}}
          >white</button>

          <button
          onClick={() => {setColor("black")}} //remember the thing of CALL-BACK FUNCTION!!
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "black"}}
          >black</button>

        </div>
      </div>
    </div>
  )
}

export default App

import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./router";
import './App.css'
import { MainPage } from "./main/pages/";
import { TableData } from "./data/components/TableData";

function App() {

  return (
    <>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
        {/* <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p> */}
        
    </>
  )
}

export default App

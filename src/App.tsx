import './App.css'
import Header from './comps/Header'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Overview from './comps/Overview'
import Output from './comps/Output'
import Synthesis from './comps/Synthesis'
import Documents from './comps/Documents'
import Practicum from './comps/Practicum'
import Portfolio from './comps/Portfolio'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
        <div className="mainContent">
        <Routes>
          <Route path="/" element={<Practicum />}/>
          <Route path="/Portfolio" element={<Portfolio />}/>
          <Route path="/Overview" element={<Overview />}/>
          <Route path="/Output" element={<Output />}/>
          <Route path="/Synthesis" element={<Synthesis />}/>
          <Route path="/Documents" element={<Documents />}/>
        </Routes>
        </div>
    </BrowserRouter>
    </>
  )
}

export default App

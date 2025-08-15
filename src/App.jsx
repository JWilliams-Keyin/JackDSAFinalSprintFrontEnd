import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import CreateTree from './pages/createTree';
import PreviousTrees from './pages/previousTrees';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path = '/' element = {<CreateTree/>}></Route>
          <Route path = '/previous' element = {<PreviousTrees/>}></Route>
        </Routes>
      </Router>
      
    </>
  )
}

export default App

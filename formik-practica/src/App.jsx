import './App.css'

import { Routes, Route } from "react-router-dom"
import { BrowserRouter } from "react-router-dom";
import SignUpForm from './Pages/SignUpForm';
import LogInForm from './Pages/LogInForm';
function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/Login" element={<LogInForm/>} />
          <Route path="/Register" element={ <SignUpForm/>  } />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App

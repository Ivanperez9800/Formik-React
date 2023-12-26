
import { Routes, Route } from "react-router-dom"
import { BrowserRouter } from "react-router-dom";


import AuthProvider from './contexts/Authtentication';

import ProtectedRoutes from './components/ProtectedRoutes'
import Home from './components/Home'

import LogInForm from "./pages/LogInForm";
import SignUpForm from "./pages/SignUpForm";

function App() {


  return (
    <>

      <AuthProvider>
        <BrowserRouter>
          <Routes>

            <Route path="/" element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>

            } />

            <Route path="/login" element={<LogInForm />} />

            <Route path="/register" element={<SignUpForm />} />
            {/* La siguiente línea establece "/Login" como la página inicial */}
            {/* <Route index element={<LogInForm />} /> */}
          </Routes>
        </BrowserRouter>
      </AuthProvider>



    </>
  )
}

export default App

/*COMPONENTE PARA RUTAS PROTEGIDAS */

import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/UseAuth";

function ProtectedRoutes({children}) {

    const { user, loading } = useAuth();

    if (loading) return <h1>Loading....</h1>

    if (!user) return <Navigate to='/login' />

    return (
        <>
          {children}
        </>
      )
}

export default ProtectedRoutes
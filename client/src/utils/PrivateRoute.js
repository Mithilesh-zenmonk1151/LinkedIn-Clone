

import React from 'react'
import { Navigate, Outlet } from 'react-router';

const PrivateRoute = () => {
    const auth={'token':false};
  return (
    <div>
    auth.token?<Outlet/> : <Navigate to="/login"/>

      
    </div>
  )
}

export default PrivateRoute

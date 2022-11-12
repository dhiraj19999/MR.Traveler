import { useContext } from "react";
import { Appcontext } from "../Context/Auth";

import { Navigate } from "react-router-dom";



function PrivateRoute({children}) {

const {auth}=useContext(Appcontext)

if(auth==false){
  return  <Navigate to='/'/>
}

return children



}

export default PrivateRoute;

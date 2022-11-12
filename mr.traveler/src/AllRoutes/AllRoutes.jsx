

import { Routes,Route } from "react-router-dom"
import HotelPage from "../Pages/Hoteloage"
import PrivateRoute from "./PrivateRoute"
import Home from "../Pages/Home"
import { Login } from "../Pages/Login"
import Cart from "../Pages/Cart"
function Allroutes(){


    return(


        <div>
<Routes>
<Route  path="/" element={<Home/>}/>
<Route    path="/hotel" element={<PrivateRoute><HotelPage/></PrivateRoute>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/cart' element={<PrivateRoute><Cart/></PrivateRoute>}/>
</Routes>
        </div>
    )
}
export default Allroutes
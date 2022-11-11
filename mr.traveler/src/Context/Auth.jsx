

import { createContext,useState } from "react";

export const Appcontext= createContext();

function AppcontextProvider({children}){
const [auth,SetAuth]=useState(false)
let [token,setToken]=useState("")

const handleLogin=((toke)=>{
    SetAuth(true);
  setToken(toke)

})

const handleLogout=()=>{
    SetAuth(false)
    setToken('')
}
    return <Appcontext.Provider  value={{handleLogin,handleLogout,auth,token}} >{children}</Appcontext.Provider>
}
export default AppcontextProvider;
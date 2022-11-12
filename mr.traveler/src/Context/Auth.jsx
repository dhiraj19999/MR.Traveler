

import { createContext,useState } from "react";

export const Appcontext= createContext();

function AppcontextProvider({children}){
const [auth,SetAuth]=useState(false)
let [token,setToken]=useState("")
let[dat,setDat]=useState([])
const handleLogin=((toke)=>{
    SetAuth(true);
  setToken(toke)

})






const handleLogout=()=>{
    SetAuth(false)
    setToken('')
}


const addData=(item)=>{

    setDat([...dat,item])

}



    return <Appcontext.Provider  value={{handleLogin,handleLogout,auth,token,addData,dat}} >{children}</Appcontext.Provider>
}





export default AppcontextProvider;


import { createContext,useState } from "react";

export const Appcontext= createContext();

function AppcontextProvider({children}){
const [auth,SetAuth]=useState(false)
let [token,setToken]=useState("")
let[dat,setDat]=useState([])
let [single,setSingle]=useState(null)
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


const singleItem=(sing)=>{

setSingle(sing)
}




    return <Appcontext.Provider  value={{handleLogin,setDat,handleLogout,auth,token,addData,dat,singleItem,single}} >{children}</Appcontext.Provider>
}






export default AppcontextProvider;


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
    let count=0;
if(dat!=[]){
    dat.map((it)=>{
        if(it.hotelId==item.hotelId){
           count++;
        }
    })
    if(count==0){
        setDat([...dat,item])
    }
}
if(dat==[]){
    setDat([...dat,item])
}
    

}

const remove=(da)=>{
    setDat(da)
}



const singleItem=(sing)=>{

setSingle(sing)
}




    return <Appcontext.Provider  value={{  remove,handleLogin,setDat,handleLogout,auth,token,addData,dat,singleItem,single}} >{children}</Appcontext.Provider>
}






export default AppcontextProvider;
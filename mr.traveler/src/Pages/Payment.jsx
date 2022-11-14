import React from 'react'
import { useState } from 'react'
import '../Pages/Payment.css'
import img1 from '../Images/card_img.png'
import Loading from '../Loading'
import Otp from './Otp'
import { Navigate } from 'react-router-dom'
import PaymentSucces from './PaymentSucces'

function Payment(){

const[loading,setLoding]=useState(false)
const[pay,setPay]=useState(false)


const handleClick=()=>{
setLoding(true)
setTimeout(() => {
  setLoding(false)
    setPay(true)
}, 4000);



}
       
if(pay){
    return <Otp/>
}





{if(loading){
    return <Loading/>
}}





    return(
<div>
        <div class="container">
        

    <form action="" >

        <div class="row">

            <div class="col">

                <h3 class="title">billing address</h3>

                <div class="inputBox">
                    <span>full name :</span>
                    <input type="text" placeholder="john deo"/>
                </div>
                <div class="inputBox">
                    <span>email :</span>
                    <input type="email" placeholder="example@example.com"/>
                </div>
                <div class="inputBox">
                    <span>address :</span>
                    <input type="text" placeholder="room - street - locality"/>
                </div>
                <div class="inputBox">
                    <span>city :</span>
                    <input type="text" placeholder="mumbai"/>
                </div>

                <div class="flex">
                    <div class="inputBox">
                        <span>state :</span>
                        <input type="text" placeholder="india"/>
                    </div>
                    <div class="inputBox">
                        <span>zip code :</span>
                        <input type="text" placeholder="123 456"/>
                    </div>
                </div>

            </div>

            <div class="col">

                <h3 class="title">payment</h3>

                <div class="inputBox">
                    <span>cards accepted :</span>
                    <img src={img1} alt=""/>
                </div>
                <div class="inputBox">
                    <span>name on card :</span>
                    <input type="text" placeholder="mr. john deo"/>
                </div>
                <div class="inputBox">
                    <span>credit card number :</span>
                    <input type="number" placeholder="1111-2222-3333-4444"/>
                </div>
                <div class="inputBox">
                    <span>exp month :</span>
                    <input type="text" placeholder="january"/>
                </div>

                <div class="flex">
                    <div class="inputBox">
                        <span>exp year :</span>
                        <input type="number" placeholder="2022"/>
                    </div>
                    <div class="inputBox">
                        <span>CVV :</span>
                        <input type="text" placeholder="1234"/>
                    </div>
                </div>

            </div>
    
        </div>

        <input type="submit" value="Pay" class="submit-btn" onClick={handleClick}/>

    </form>

</div> 
</div>   
    )
}

export default Payment
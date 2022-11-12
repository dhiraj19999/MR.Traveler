import React from 'react'
import {useContext} from 'react'
import { useState } from "react"
import {  useNavigate } from "react-router-dom";
import { Box,FormControl,FormLabel,FormHelperText ,Input, Center,Button} from "@chakra-ui/react"
import { Avatar,Wrap,WrapItem} from "@chakra-ui/react"
import { AiOutlineUser } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { FaGithubSquare } from "react-icons/fa"
import { Appcontext } from '../Context/Auth'


export function Login(){
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[buttonloading,setButtonloading]=useState(false)
    const navigate=useNavigate()
    const {handleLogin}=useContext(Appcontext)
   
   
   const getData=()=>{
setButtonloading(true)
    fetch('https://reqres.in/api/login',{
        method:'POST',
       headers:{
        'Content-Type':'application/json'
       },
       body:JSON.stringify({email,password})
    
    
      }).then(res=>res.json()).then(res=>{
        if(res.token){
            handleLogin(res.token)
          setButtonloading(false)
          navigate('/hotel')
        }
      }).catch(err=>{
        console.log(err)
      })

   }
   
   const gitHub=()=>{
    
   window.location.replace('https://github.com/dhiraj19999')

}
   
   
   
   
   
    return(
        < Box background={"linear-gradient(to right, #33ccff 0%, #ff99cc 100%)"} w='9xl' h='4xl' >
<Center>
        <Box w={'300'} h='450' mt='200' boxShadow={' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'} br='10' >
       
       <FormControl>
       <Avatar bg='pink.500' mt='4' icon={<AiOutlineUser fontSize='1.5rem' />} />
  <FormLabel ml='2'>Email address</FormLabel>
  <Input type='email' w='md'  focusBorderColor='pink.400' borderColor={'pink.200'} onChange={(e)=>setEmail(e.target.value)}/>
  <FormHelperText fontWeight={'black'}>We'll never share your email.</FormHelperText>
  <FormLabel ml='2'>Password</FormLabel>
  <Input type='password' w='md' focusBorderColor='red.300' borderColor={'pink.200'} onChange={(e)=>setPassword(e.target.value)}/>
  <FormHelperText fontWeight={'black'}>Never share your password</FormHelperText>
  <Button colorScheme='pink' mt='5' w='40' isLoading={buttonloading} loadingText='Loading' _hover={{backgroundColor:'purple'}} onClick={getData}>Submit</Button>
  <FormHelperText mt='3' fontWeight={'black'}>Connect With Us</FormHelperText>
 <Wrap ml='140' mt='7' spacing={'8'}>
  <WrapItem _hover={{cursor:'pointer',backgroundColor:'pink'}}><AiFillInstagram color="purple" size='28' /></WrapItem>
    <WrapItem _hover={{cursor:'pointer',backgroundColor:'pink'}}><AiFillLinkedin color="teal"  size='28'/></WrapItem>
     <WrapItem  onClick={gitHub} _hover={{cursor:'pointer',backgroundColor:'pink'}}><FaGithubSquare color='black' size='28'/></WrapItem>
 </Wrap>
 
 
</FormControl>

        </Box>
</Center>

        </Box>
    )
}
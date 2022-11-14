import React from 'react'
import {useContext} from 'react'
import { Flex,Spacer,Box,Image,Text,Button,Stack} from "@chakra-ui/react"

import {EditIcon,StarIcon,InfoIcon} from '@chakra-ui/icons'
import { BsCartCheck } from 'react-icons/bs'
import {FaHotel} from 'react-icons/fa'
import {AiOutlineHome} from 'react-icons/ai'
import img1 from  '../Images/tt.png'
import {MdRestaurant} from 'react-icons/md'
import {SiMastodon} from 'react-icons/si'
import {CgMore} from 'react-icons/cg'
import {TbWorld} from 'react-icons/tb'

import { Link } from 'react-router-dom'
import { Appcontext } from '../Context/Auth'















//import {}from "react-icons/fa";
function Navbar(){
 
 
const {handleLogout,auth}=useContext(Appcontext)




  






























    return(
<Box mt='20'>
<Box>
   





</Box>













<Box >
<Flex width='7xl'  alignItems='center' ml='70' h='270' position='sticky' >
  <Box p='4'  ml='10' mt='4'>
  
  
  
  
  <Box p='4'  ml='60' mt='0' mb='6' display={'flex'}>
  
  
  
  <Image src={img1} w='20'/>
   <Text fontWeight={'black'} color='black' mt='5' ml='2' fontSize={'30'}>MR.TRAVELER</Text>


  </Box>

  </Box>
 
  <Spacer />
 
  <Box p='4' display='flex' ml='100' mr='-80' >

<Box display='flex' >


    <Button leftIcon={<EditIcon m='auto' h='10' w='7' />} colorScheme='black' variant='ghost' _hover={{backgroundColor:'#fbd0d9'}} >

<Text fontSize='x-large' color='black'>Review </Text>
</Button>
</Box>
  
 <Box ml='2' display='flex'>



<Button leftIcon={<StarIcon m='auto' h='10' w='7' />} colorScheme='black' variant='ghost' _hover={{backgroundColor:'#fbd0d9'}} >

<Text fontSize='x-large' color='black'>Trips </Text>
</Button>
 </Box>
 


 <Box ml='2' display='flex'>


<Button leftIcon={<InfoIcon m='auto' h='10' w='7' />} colorScheme='black' variant='ghost' _hover={{backgroundColor:'#fbd0d9'}} >

<Text fontSize='x-large' color='black'>Alert </Text>
</Button>
 </Box>




<Box ml='2'   >

<Button  colorScheme='pink' variant='solid'  >
    Sign Up
  </Button>
  
</Box>

<Box ml='2'>{auth?<Button  colorScheme='pink' variant='solid'  onClick={handleLogout} >
    Logout
  </Button>:<Link to='/login'><Button  colorScheme='pink' variant='solid'  >
    Login
  </Button> </Link>  }</Box>

<Box ml='2'>
<Link to='/cart'>
<Button leftIcon={<BsCartCheck size='35'/>} colorScheme='black' variant='ghost'  _hover={{backgroundColor:'#fbd0d9'}}>
    <Text fontSize='x-large' color='black'>Cart </Text>
  </Button>
  </Link>
</Box>



 
  </Box>
</Flex>
</Box>



<Stack direction='row' spacing={5} ml='290' mt='0'>
 <Link to='/hotel'>
  <Button rightIcon={<FaHotel size='35'/>} colorScheme='black' variant='outline' w='50' _hover={{backgroundColor:'#fbd0d9'}} size='lg' >
  <Text fontSize='x-large' color='black' fontFamily='serif'>Hotels</Text>
  </Button>
</Link>

<Link to='/'>
  <Button rightIcon={<AiOutlineHome size='35'/>} colorScheme='black' variant='outline' _hover={{backgroundColor:'#fbd0d9'}} size='lg' >
    <Text fontSize='x-large' color='black' fontFamily='serif'> Home Page</Text>
  </Button>
</Link>




  <Button rightIcon={<SiMastodon size='35'/>} colorScheme='black' variant='outline' w='50' _hover={{backgroundColor:'#fbd0d9'}} size='lg'>
  <Text fontSize='x-large' color='black'>Things To Do</Text>
  </Button>
  <Button rightIcon={<MdRestaurant size='35'/>} colorScheme='black' variant='outline' _hover={{backgroundColor:'#fbd0d9'}} size='lg' >
    <Text fontSize='x-large' color='black'>Restaurants</Text>
  </Button>



  <Button rightIcon={<TbWorld size='35'/>} colorScheme='black' variant='outline' w='50' _hover={{backgroundColor:'#fbd0d9'}} size='lg'>
  <Text fontSize='x-large' color='black'>Travel Stories</Text>
  </Button>




  <Button rightIcon={<CgMore size='35'/>} colorScheme='black' variant='outline' w='50' _hover={{backgroundColor:'#fbd0d9'}} size='lg'>
  <Text fontSize='x-large' color='black'>More</Text>
  </Button>



</Stack>








</Box>

    )
}

export default Navbar;
import { Icon } from '@chakra-ui/react'
import {useContext} from 'react'
import { Flex,Spacer,Box,Image,Text,Button,Stack} from "@chakra-ui/react"
import img1 from '../Images/Travler.png.png'
import {EditIcon,StarIcon,InfoIcon} from '@chakra-ui/icons'
import { BsCartCheck } from 'react-icons/bs'
import {FaHotel} from 'react-icons/fa'
import {AiOutlineHome} from 'react-icons/ai'

import {MdRestaurant} from 'react-icons/md'
import {SiMastodon} from 'react-icons/si'
import {CgMore} from 'react-icons/cg'
import {TbWorld} from 'react-icons/tb'
import Slider from './Slider'

import { Appcontext } from '../Context/Auth'

//import {}from "react-icons/fa";
function Navbar(){


const {handleLogin,handleLogout,auth,token}=useContext(Appcontext)





    return(
<Box mt='20'>
<Box>
   





</Box>













<Box >
<Flex width='7xl'  alignItems='center' ml='70' h='270' position='sticky' >
  <Box p='4'  ml='10' mt='4'>
  
  
  
  
    <Image
  borderRadius='2xl'
  boxSize='390px'
  src={img1}
  alt='Dan Abramov'
  ml='10'
/>


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

<Box ml='2'>{auth?<Button  colorScheme='pink' variant='solid'  >
    Logout
  </Button>:<Button  colorScheme='pink' variant='solid'  >
    Login
  </Button>   }</Box>

<Box ml='2'>
<Button leftIcon={<BsCartCheck size='35'/>} colorScheme='black' variant='ghost'  _hover={{backgroundColor:'#fbd0d9'}}>
    <Text fontSize='x-large' color='black'>Cart </Text>
  </Button>
</Box>



 
  </Box>
</Flex>
</Box>



<Stack direction='row' spacing={5} ml='290' mt='0'>
  <Button rightIcon={<FaHotel size='35'/>} colorScheme='black' variant='outline' w='50' _hover={{backgroundColor:'#fbd0d9'}} size='lg'>
  <Text fontSize='x-large' color='black' fontFamily='serif'>Hotels</Text>
  </Button>
  <Button rightIcon={<AiOutlineHome size='35'/>} colorScheme='black' variant='outline' _hover={{backgroundColor:'#fbd0d9'}} size='lg' >
    <Text fontSize='x-large' color='black' fontFamily='serif'>Holiday Homes</Text>
  </Button>





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
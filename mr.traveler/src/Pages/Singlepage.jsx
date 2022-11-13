import React from 'react'
import { useState } from 'react'
import {useContext} from 'react'
import { Box,Image,Center,Text } from '@chakra-ui/react'
import { Appcontext } from '../Context/Auth'
import { StarIcon } from '@chakra-ui/icons'
import { Badge,HStack,Input,Button,Flex,Spacer } from '@chakra-ui/react'
import { MdFamilyRestroom, MdOutlineBedroomChild } from 'react-icons/md'
import { MdOutlineFamilyRestroom } from 'react-icons/md'
import { FaRestroom } from 'react-icons/fa'
import { FaParking } from 'react-icons/fa'
import { MdPool } from 'react-icons/md'
import { FaCoffee } from 'react-icons/fa'
import { FaTshirt } from 'react-icons/fa'
import { BsWifi } from 'react-icons/bs'
import { FaGlassMartini } from 'react-icons/fa'
import { CgGym } from 'react-icons/cg'
import { MdLocalAirport } from 'react-icons/md'
import { MdRestaurant } from 'react-icons/md'
import { BsSuitSpadeFill } from 'react-icons/bs'
import { FaTaxi } from 'react-icons/fa'
import { MdBusinessCenter } from 'react-icons/md'
import { BsCurrencyBitcoin } from 'react-icons/bs'
import { MdMeetingRoom } from 'react-icons/md'
import { MdBed } from 'react-icons/md'
import { MdSmokeFree } from 'react-icons/md'
import { BsMoonStarsFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Singlepage(){

const[room,setRoom]=useState(0)
const[adult,setAdult]=useState(0)

    const{single}=useContext(Appcontext)


return(
    <Box background={"linear-gradient(to right, #33ccff 0%, #ff99cc 100%)"} w='9xl' h='10xl'>
<Center>
<Box>
    <Image src={single.media.url} borderRadius='10'/>
   
    <Box display='flex' alignItems='baseline' mt='5' ml='80'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {3} beds &bull; {2} baths
          </Box>
        </Box>

   
    <Text fontWeight={'black'} fontSize='30' mt='1'>{single.name}</Text>





    <Box display='flex' mt='2' alignItems='center' ml='80'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < single.starRating ? 'teal.500' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' mt='2' color='gray.600' fontSize='sm'>
            {single.totalReviewCount} reviews
          </Box>
        </Box>

        <Box display={'flex'} ml='350' mt='4'>
         <Text fontWeight={'black'}> {Math.floor(Number(single.ratesSummary.minPrice)*83)}</Text>
          <Text fontWeight={'black'}>/ Week</Text>
        </Box>






        <HStack maxW='320px' ml='60' mt='3'>
        
        <FaRestroom size='80' mt='1'/>
        <Text ml='5' fontWeight={'black'} > Adults</Text>
      <Button ml='2' onClick={()=>setAdult(adult+1)} disabled={adult==2} bg='pink.300' _hover={{backgroundColor:'teal'}}>+</Button>
      <Input ml='2' value={adult} />
      <Button ml='2' onClick={()=>setAdult(adult-1)} disabled={adult==0} bg='pink.300' _hover={{backgroundColor:'teal'}}>-</Button>
    </HStack>






    <HStack maxW='320px' ml='60' mt='0'>
        
        <MdOutlineBedroomChild size='80' mt='1'/>
        <Text ml='5' fontWeight={'black'}> Rooms</Text>
      <Button ml='2' onClick={()=>setRoom(room+1)}  bg='pink.300' _hover={{backgroundColor:'teal'}}>+</Button>
      <Input ml='2' value={room} />
      <Button ml='2' onClick={()=>setRoom(room-1)} disabled={room==0} bg='pink.300' _hover={{backgroundColor:'teal'}}>-</Button>
    </HStack>

    <Text fontWeight={'black'} fontSize='20' mt='1'>Guests</Text>
    <HStack spacing={'10'} maxW='320px' ml='300' mt='3' borderColor={'gray.100'}>

<MdOutlineFamilyRestroom size='30'/>
<Text fontWeight={'black'}>{room}{"  "}rooms,{"  "}{adult}{"  "}adults</Text>
    </HStack>

<Text fontWeight={'black'} fontSize='30' mt='3'>Total:{" "}{room*Math.floor(Number(single.ratesSummary.minPrice)*83)}/Week</Text>
<Link to='/payment'>
<Button colorScheme='pink' mt='5' w='40' isLoading={false} loadingText='Loading' _hover={{backgroundColor:'purple'}} >Checkout</Button>
</Link>
</Box>
</Center>





<Box mt='10' borderColor='black' w='8xl' h='5xl' ml='20'    boxShadow={' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'} br='10' >
<Text fontWeight={'black'} fontSize='60' ml='20'>About</Text>
<Text fontWeight={'black'} fontSize='30' ml='20'>Property Amenities</Text>
<HStack spacing={500} ml='300' mt='20'>
<Box>
    <Box  display={'flex'}><FaParking size={'30'} mt='2'/> <Text fontWeight={'black'} fontSize='20' ml='2'>Free Parking</Text></Box>
    <Box mt='5' display={'flex'}><MdPool size={'30'} mt='2'/> <Text fontWeight={'black'} fontSize='20' ml='2'>Pool</Text></Box>

    <Box mt='5' display={'flex'}><FaCoffee size={'30'} mt='2'/> <Text fontWeight={'black'} fontSize='20' ml='2'>Free breakfast</Text></Box>

    <Box mt='5' display={'flex'}><BsWifi size={'30'} mt='2'/> <Text fontWeight={'black'} fontSize='20' ml='2'>Wifi</Text></Box>

    <Box mt='5' display={'flex'}><FaGlassMartini size={'30'} mt='2'/> <Text fontWeight={'black'} fontSize='20' ml='2'>Bar</Text></Box>

    <Box mt='5' display={'flex'}><FaTshirt size={'30'} mt='2'/> <Text fontWeight={'black'} fontSize='20' ml='2'>Laundry Service</Text></Box>

    <Box mt='5' display={'flex'}><CgGym size={'30'} mt='2'/> <Text fontWeight={'black'} fontSize='20' ml='2'>Fitness Center/Gym</Text></Box>

    <Box mt='5' display={'flex'}><MdLocalAirport size={'30'} mt='2'/> <Text fontWeight={'black'} fontSize='20' ml='2'>Airport Service</Text></Box>
    
    <Box mt='5' display={'flex'}><MdRestaurant size={'30'} mt='2'/> <Text fontWeight={'black'} fontSize='20' ml='2'>Restaurant</Text></Box>

    <Box mt='5' display={'flex'}><BsSuitSpadeFill size={'30'} mt='2'/> <Text fontWeight={'black'} fontSize='20' ml='2'>Spa</Text></Box>

    <Box mt='5' display={'flex'}><BsMoonStarsFill size={'30'} mt='2'/> <Text fontWeight={'black'} fontSize='20' ml='2'>Air Conditioning</Text></Box>
</Box>




















<Box>
    <Box  display={'flex'}><FaTaxi size={'30'} mt='2'/> <Text fontWeight={'black'} fontSize='20' ml='2'>Taxi Service</Text></Box>
    <Box mt='5' display={'flex'}><MdFamilyRestroom size={'30'} mt='2'/> <Text fontWeight={'black'} fontSize='20' ml='2'>Meeting Room</Text></Box>

    <Box mt='5' display={'flex'}><MdBusinessCenter size={'30'} mt='2'/> <Text fontWeight={'black'} fontSize='20' ml='2'>Business Room</Text></Box>

    <Box mt='5' display={'flex'}><MdFamilyRestroom size={'30'} mt='2'/> <Text fontWeight={'black'} fontSize='20' ml='2'>24 Hours Security</Text></Box>

    <Box mt='5' display={'flex'}><BsCurrencyBitcoin size={'30'} mt='2'/> <Text fontWeight={'black'} fontSize='20' ml='2'>Currency Exchange</Text></Box>

    <Box mt='5' display={'flex'}><FaTshirt size={'30'} mt='2'/> <Text fontWeight={'black'} fontSize='20' ml='2'>Ironing Service</Text></Box>

    <Box mt='5' display={'flex'}><MdBusinessCenter size={'30'} mt='2'/> <Text fontWeight={'black'} fontSize='20' ml='2'>24-hour front desk</Text></Box>

    <Box mt='5' display={'flex'}><MdMeetingRoom size={'30'} mt='2'/> <Text fontWeight={'black'} fontSize='20' ml='2'>Conference facilities</Text></Box>
    
    <Box mt='5' display={'flex'}><MdBed size={'30'} mt='2'/> <Text fontWeight={'black'} fontSize='20' ml='2'>Doorperson</Text></Box>

   
    <Box mt='5' display={'flex'}><MdMeetingRoom size={'30'} mt='2'/> <Text fontWeight={'black'} fontSize='20' ml='2'>Meeting Room</Text></Box>

    <Box mt='5' display={'flex'}><MdSmokeFree size={'30'} mt='2'/> <Text fontWeight={'black'} fontSize='20' ml='2'>Non-smoking rooms</Text></Box>
</Box>
























</HStack>









</Box>






    </Box>
)




console.log(single)
}
export default Singlepage
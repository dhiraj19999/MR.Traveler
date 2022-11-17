import React from 'react'
import {useContext} from 'react'
import { Box,SimpleGrid,Image,Badge,Button,HStack,Input,Text} from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons"
import { Appcontext } from '../Context/Auth'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'


function Cart(){

const{dat,singleItem,addData,remove}=useContext(Appcontext)
const toast = useToast()


       const handleRemove=(item)=>{

        var newarr=dat.filter((ele)=>ele.hotelId!==item.hotelId)
      
         
        remove(newarr)


        toast({
          title:'Product Removed Succesfully ',
          status: 'success',
          position:'top',
          isClosable: true,
        })
        
        
       }



console.log(dat)




    return(

        <Box>

<Navbar/>
<Box mt='10'>

<SimpleGrid columns={4} spacing={3}>

{
    (dat!==[]?dat.map((item)=>{
      
        
       return        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={item.media.url} alt={item.name} w='lg'  h='80' />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
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
            3 beds &&  2 baths
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {item.name}
        </Box>

        <Box>
          {Math.ceil(Number(item.ratesSummary.minPrice)*83)}
          <Box as='span' color='gray.600' fontSize='sm'>
            / wk
          </Box>
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < item.starRating ? 'teal.500' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='3' color='gray.600' fontSize='sm'>
            {item.totalReviewCount} reviews
          
<Link to='/single'>
            <Button
            mt='4'
            ml='4'
      onClick={()=>singleItem(item)   }
    loadingText='Loading'
    colorScheme='green'
    variant='solid'
    spinnerPlacement='end'
    _hover={{backgroundColor:'red.400'}}
    


  >
    Conform Booking
  </Button>
</Link>



<Button mt='5'
        
        id={item.hotelId}
            ml='4'
      onClick={()=>handleRemove(item)   }
    loadingText='Loading'
    colorScheme='green'
    variant='solid'
    spinnerPlacement='end'
    _hover={{backgroundColor:'red.400'}}
    



  >
    Remove
  </Button>







          </Box>
          
        </Box>
      </Box>

      




    </Box>
  
      
    }):console.log('error'))
}


</SimpleGrid>





</Box>


        </Box>
    )
}


export default Cart;
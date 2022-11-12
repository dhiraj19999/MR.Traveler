import React from 'react'
import {useContext} from 'react'
import { Box,SimpleGrid,Image,Badge,Button } from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons"
import { Appcontext } from '../Context/Auth'
function Cart(){

const{dat}=useContext(Appcontext)


    return(

        <Box>


<Box mt='10'>

<SimpleGrid columns={4} spacing={3}>

{
    (dat!=[]?dat.map((item)=>{
      
        
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
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {item.totalReviewCount} reviews
            <Button
            ml='4'
    
    loadingText='Loading'
    colorScheme='green'
    variant='solid'
    spinnerPlacement='end'
    _hover={{backgroundColor:'red.400'}}
    


  >
    Book Now
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
import { useState,useEffect,} from "react"
import { Box,Tooltip,Input,Center,InputGroup,Grid,InputRightElement,
    FormLabel,Select,Text,Badge,Image,SimpleGrid,Button} from "@chakra-ui/react"
import { SearchIcon,StarIcon } from "@chakra-ui/icons"
import { useToast } from "@chakra-ui/react"
import Loading from "../Loading"

function HotelPage(){
const[buttonloading,setButtonloading]=useState(false)
const [cityid,setCityid]=useState('')
const[loading,setLoding]=useState(false)
const[city,setCity]=useState('')
const[data,setData]=useState(null)
const toast = useToast()


function handleClick(){


setLoding(true)




    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '72061a6616mshdd6deb7d3a15b64p124cc2jsn39dc6d97b4ea',
            'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
        }
    };
    
    fetch(`https://priceline-com-provider.p.rapidapi.com/v1/hotels/locations?name=${city}&search_type=CITY`, options)
    .then(response => response.json())
	.then(response => getData (response[0].cityID)      )
	.catch(err => console.error(err));



    

}




function getData(cityid){

    const option = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '72061a6616mshdd6deb7d3a15b64p124cc2jsn39dc6d97b4ea',
            'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
        }
    };
    
    fetch(`https://priceline-com-provider.p.rapidapi.com/v1/hotels/search?sort_order=HDR&location_id=${cityid}&date_checkout=2022-11-16&date_checkin=2022-11-15&star_rating_ids=3.0%2C3.5%2C4.0%2C4.5%2C5.0&rooms_number=1&amenities_ids=FINTRNT%2CFBRKFST`, option)
        .then(response => response.json())
        .then(response => setData(response.hotels)).then(setLoding(false))
        .catch(err => console.error(err));



}


console.log(data)





function bookAdd(item){
    toast({
        title: 'Booking Added To The Cart',
        status: 'success',
        isClosable: true,
        position:'top'
      })
   console.log(item)
}







if(loading){
 return  <Loading lod={loading}/>
}





return(
<Box>

<Box>
    <Center>
    <InputGroup  ml='500' mt='40'>
    <InputRightElement><SearchIcon mr='1100' w='6' h='8' _hover={{cursor:'pointer'}} onClick={handleClick}/></InputRightElement>
    <Input type='text' placeholder='City Name'  w='2xl' h='10' focusBorderColor='pink.400' borderColor='crimson' color='pink.200'  onChange={(e)=>setCity(e.target.value)}/>
  </InputGroup>
    </Center>
</Box>


<Box mt='10'>

<SimpleGrid columns={4} spacing={3}>

{
    (data!=null?data.map((item,index)=>{
      if(index!=0 && index<=30){
        
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
    isLoading={buttonloading==true}
    loadingText='Loading'
    colorScheme='green'
    variant='solid'
    spinnerPlacement='end'
    _hover={{backgroundColor:'red.400'}}
    onClick={()=>bookAdd(item)}


  >
    Book Now
  </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  
      }
    }):console.log('error'))
}


</SimpleGrid>






</Box>







    









































       
 </Box>


)


}


export default HotelPage;

    




  
   

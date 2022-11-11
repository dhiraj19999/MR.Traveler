import { Box,Image,Center,Text,Grid,GridItem,SimpleGrid } from "@chakra-ui/react"
import Slider from "./Slider"
import './slider.css'
function Mainpage(){



    return(
<Box>
<Center><Box mt='8' ml='90' ><Image className="desti" src='https://static.tacdn.com/img2/brand/home/homemar2022_dt_trans.webp'/></Box>
</Center>


<Center mt='10'><Text fontSize='4xl' color='black'>Top experiences on MR.Traveler</Text></Center>


<Box>

<Grid templateColumns='repeat(4, 1fr)' gap={1} mt='8'>
  <GridItem  h='200'  ><Image className="desti" src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5f/cb/ed/caption.jpg?w=400&h=400&s=1' w='500' h='400' borderRadius='10' /><Text fontSize='2xl' fontWeight='bold' color='black'>Four-Day Private Luxury Golden Triangle Tour to Agra and Jaipur From New Delhi</Text></GridItem>
  <GridItem w='300' h='200'  ><Image className="desti" src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/97/0c/e8/caption.jpg?w=300&h=300&s=1' w='500' h='400'  borderRadius='10'/><Text  fontWeight='bold' fontSize='2xl' color='black' >
  Private Day Tour of Taj Mahal and Agra Fort By Superfast Train - All Inclusive
</Text></GridItem>
 
 
 
  <GridItem w='300' h='200'  ><Image className="desti" src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/71/c0/4d/caption.jpg?w=300&h=300&s=1' w='500' h='400'  borderRadius='10'/><Text fontWeight='bold' fontSize='2xl' color='black'>5-Hour Private Mumbai Sightseeing Tour (Travellers Choice Award Winner)</Text> 

</GridItem>
  
  
  
  
  
  
  <GridItem w='300' h='200'  ><Image className="desti" src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5a/ea/82/caption.jpg?w=300&h=300&s=1' w='500' h='400'  borderRadius='10'/><Text fontWeight='bold' fontSize='2xl' color='black'>All Inclusive Day Trip to Taj Mahal, Agra Fort and Baby Taj from Delhi by Car</Text></GridItem>
  
</Grid>



</Box>





<Center mt='350'><Text fontSize='4xl' color='black'>Scenic autumn spots</Text></Center>





<Box mt='90'>

<Grid templateColumns='repeat(4, 1fr)' gap={1} mt='8'>
  <GridItem  h='200'  ><Image className="desti" src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/68/2b/0f/merkmal-des-dal-sees.jpg?w=300&h=300&s=1' w='500' h='400' borderRadius='10' /><Text fontSize='2xl' fontWeight='bold' color='black'>Dal Lake</Text></GridItem>
  <GridItem w='300' h='200'  ><Image className="desti" src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/fa/d8/fd/photo2jpg.jpg?w=300&h=300&s=1' w='500' h='400'  borderRadius='10'/><Text  fontWeight='bold' fontSize='2xl' color='black' >
Paradise Beach
</Text></GridItem>
 
 
 
  <GridItem w='300' h='200'  ><Image className="desti" src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/b0/31/f4/the-beaut.jpg?w=300&h=300&s=1' w='500' h='400'  borderRadius='10'/><Text fontWeight='bold' fontSize='2xl' color='black'>
Double Decker Living Root Bridge</Text> 

</GridItem>
  
  
  
  
  
  
  <GridItem w='300' h='200'  ><Image className="desti" src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/f5/cb/a2/the-morning-show.jpg?w=300&h=300&s=1' w='500' h='400'  borderRadius='10'/><Text fontWeight='bold' fontSize='2xl' color='black'>Tiger Hill</Text></GridItem>
  
</Grid>



</Box>














<Box mt='400'  backgroundColor='#fffce6' h='550' w='700'>
<Center mt='350'><Text fontSize='4xl' color='black'>More to explore</Text></Center>
<Grid templateColumns='repeat(3, 1fr)' gap={1} mt='8' ml='40'>
  <GridItem  h='200'  ><Image className="desti" ml='10' src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/68/2b/0f/merkmal-des-dal-sees.jpg?w=300&h=300&s=1' w='500' h='400' borderRadius='10' /><Text fontSize='2xl' fontWeight='bold' color='black'  >Dal Lake</Text></GridItem>
  <GridItem w='300' h='200'  ><Image className="desti" ml='10' src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/fa/d8/fd/photo2jpg.jpg?w=300&h=300&s=1' w='500' h='400'  borderRadius='10'/><Text  fontWeight='bold' fontSize='2xl' color='black' >
Paradise Beach
</Text></GridItem>
 
 
 
  <GridItem w='300' h='200'  ><Image className="desti" ml='10' src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/b0/31/f4/the-beaut.jpg?w=300&h=300&s=1' w='500' h='400'  borderRadius='10'/><Text fontWeight='bold' fontSize='2xl' color='black'>
Double Decker Living Root Bridge</Text> 

</GridItem>
  
  
  
  
  
  
 
  
</Grid>



</Box>












<Center mt='100'><Text fontSize='4xl' color='black'>Top destinations for your next holiday</Text></Center>






<Box mt='90'  backgroundColor='#fffce6' h='550' w='700'>

<Grid templateColumns='repeat(4, 1fr)' gap={1} mt='8'>
  <GridItem  h='200'  ><Image className="desti" src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/6a/ff/2a/caption.jpg?w=300&h=300&s=1&cx=7014&cy=3760&chk=v1_14690e40614ca9b48b73' w='500' h='400' borderRadius='10' /><Text fontSize='2xl' fontWeight='bold' color='black'>Dubai United Arab Emirates</Text></GridItem>
  <GridItem w='300' h='200'  ><Image className="desti" src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/d2/2f/7a/palace-from-the-outside.jpg?w=300&h=300&s=1' w='500' h='400'  borderRadius='10'/><Text  fontWeight='bold' fontSize='2xl' color='black' >
Bengaluru India
</Text></GridItem>
 
 
 
  <GridItem w='300' h='200'  ><Image className="desti" src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/80/d7/80/caption.jpg?w=300&h=300&s=1' w='500' h='400'  borderRadius='10'/><Text fontWeight='bold' fontSize='2xl' color='black'>
Pune India</Text> 

</GridItem>
  
  
  
  
  
  
  <GridItem w='300' h='200'  ><Image className="desti" src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/98/f7/df/charminar.jpg?w=300&h=300&s=1' w='500' h='400'  borderRadius='10'/><Text fontWeight='bold' fontSize='2xl' color='black'>Hyderabad India</Text></GridItem>
  
</Grid>



</Box>



<Image ml='280' className="desti" borderRadius='10' src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/71/f2/f8/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_481bf63f148660a6e343'/>
<Text fontSize='4xl' fontWeight='bold' color='black'>Travelers' Choice 2022</Text>



<Box mt='10'>
<Center >
<SimpleGrid columns={2} spacing={7}>
  <Box  className="white" height='300px' ><Image          borderRadius='10' src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/71/f3/e8/caption.jpg?w=400&h=-1&s=1"/></Box>
  <Box className="white" height='300px'><Image  borderRadius='10' src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/71/f3/e7/caption.jpg?w=400&h=-1&s=1'/></Box>
  <Box className="white" height='300px'><Image  borderRadius='10' mt='10' src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/71/f4/16/caption.jpg?w=400&h=-1&s=1'/></Box>
  <Box className="white" height='300px'><Image  borderRadius='10' mt='10' src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/71/f4/15/caption.jpg?w=400&h=-1&s=1'/></Box>
  
</SimpleGrid>
</Center>
</Box>



<Slider/>

</Box>
    )
}

export default Mainpage
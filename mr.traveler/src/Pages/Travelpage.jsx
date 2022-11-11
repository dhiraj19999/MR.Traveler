

import {useState, useEffect} from 'react'

import { Text,  Box ,Grid,GridItem,Image} from '@chakra-ui/react'
function TravelStory(){
    let [count,setCount]=useState(0)
    let arr=[
        {img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/c1/32/8b/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_8aeeed5f31e73b4c9722'},
        {img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/61/28/44/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_f70b550a4e1485bfbff0'},
        {img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/ab/de/f3/caption.jpg?w=1200&h=700&s=1&cx=720&cy=360&chk=v1_e410111b8aaa3dae6a89'},
        {img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/c1/32/8b/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_8aeeed5f31e73b4c9722'},
    ]

    if(count==3){
        setCount((prevCount)=>prevCount-3)
       
     }
    useEffect(()=>{
        const id=setInterval(()=>{
          
           setCount((prevCount)=>prevCount+1)
          
           },2000)
           
           return ()=>{clearInterval(id)}
         
    },[])






    return(

        <div  style={{marginLeft:'250px'}}>
<img  src={arr[count].img} width="1300px"  height='1px' style={{borderRadius:'30px'}} >

</img>
<Box ml='40' w='3xl' mt='15' >
<Text fontSize='6xl' fontFamily='sans-serif' color='black' m='auto'>Food and Drink</Text>
<Text color='black' fontSize='2xl'>Dig into the best restaurants and bars, street food, and culinary hotspots around the world. Who's hungry?</Text>
</Box>


<Box mt='5'>
<Grid
  h='200px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(2, 1fr)'
  gap={4}
>
  <GridItem rowSpan={2} colSpan={1}  ><Image src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/93/35/ae/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_0fead5916d0df52f04ef'

 w='900' h='700' borderRadius='20'/></GridItem>
  <GridItem colSpan={1}    h={80} w={500}><Image src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/cd/a5/86/caption.jpg?w=1200&h=1200&s=1&cx=1920&cy=1080&chk=v1_1c72fb86bf69ccf6f57e' borderRadius='20' h='400' w='23'/></GridItem>
  <GridItem colSpan={1}   h={80} w={500} ><Image src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/c7/1c/3a/caption.jpg?w=1200&h=1200&s=1&cx=1920&cy=1080&chk=v1_38d18a124bc6505d3c22' w='22' mt='20' borderRadius='25'/></GridItem>
  
</Grid>
</Box>




        </div>


    )
}
export default TravelStory;
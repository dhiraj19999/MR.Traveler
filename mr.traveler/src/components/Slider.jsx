import {useState, useEffect} from 'react'
 import { Image,Box,Center,Text } from '@chakra-ui/react'
 import './slider.css'
function Slider(){
    const [data,setData]=useState("")
    let [count,setCount]=useState(0)
let arr=[

{text:'London, UK', img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/c0/b1/4b/caption.jpg?w=300&h=300&s=1'},
{text:'Singapore',img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4b/60/00/caption.jpg?w=300&h=300&s=1'},
{text:'Jaipur, India',img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/a3/3b/8a/screenshot-2017-09-12.jpg?w=300&h=-1&s=1'},
{text:'Chennai',img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/4d/46/b8/chennai-madras.jpg?w=300&h=300&s=1'},
{text:'Lal Killa, India', img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/0e/f6/1f/caption.jpg?w=300&h=300&s=1'},
{text:'North Goa',img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/39/26/43/caption.jpg?w=300&h=300&s=1'},
{text:'Mumbai, India',img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/64/5f/f1/caption.jpg?w=300&h=300&s=1'},
{text:'Aru Valley',img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/ec/dc/15/aru-city.jpg?w=400&h=400&s=1'},
{text:'Aru Valley',img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/ec/dc/15/aru-city.jpg?w=400&h=400&s=1'}


]

if(count==8){
    setCount((prevCount)=>prevCount-8)
   
 }
useEffect(()=>{
    const id=setInterval(()=>{
      
       setCount((prevCount)=>prevCount+1)
      
       },2000)
       
       return ()=>{clearInterval(id)}
     
},[])

    return (

        <div>
  <Box mt='40'>
  <Text fontSize='4xl' fontWeight='bold' color='black'>Famous Over The World</Text>
    <Center mt='8' ml='70'>

        <Image className='desti' borderRadius='10' src={arr[count].img} w='2xl' h='xl'/>
        
    </Center>
    <Text fontSize='4xl' fontWeight='bold' color='black'>{arr[count].text}</Text>
  </Box>

        </div>
    )
}

export default Slider
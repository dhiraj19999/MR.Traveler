import {useState, useEffect} from 'react'
 import { Image } from '@chakra-ui/react'
function Slider(){
    const [data,setData]=useState("")
    let [count,setCount]=useState(0)
let arr=[

{img:'https://media.istockphoto.com/id/532189860/photo/himalayan-trekking.jpg?s=1024x1024&w=is&k=20&c=ccOkC9a-3B1sYMPVoH11CuYGM1KRGJK7NhhTodKBt4E='},
{img:'https://media.istockphoto.com/id/1169602395/photo/coco-palm-on-tropical-paradise-beach.jpg?s=612x612&w=0&k=20&c=c4wSPH2voDGvYNzg8XzIh4VR9Tw18hdd54gSfQXkKZk='},
{img:'https://media.istockphoto.com/id/513247652/photo/panoramic-beautiful-view-of-mount-ama-dablam.jpg?s=612x612&w=0&k=20&c=5MWcvFfiJzmxMZ6olmyd14Q-OskUmbg33KS8LwFnb_0='},
{img:'https://media.istockphoto.com/id/1151755587/photo/sunrise-behind-a-tropical-island-in-the-maldives.jpg?s=612x612&w=0&k=20&c=1P-LXAZfbvIA58uLLRU8zTiwBSnR01zDzZAChe_wM7c='},
{img:'https://media.istockphoto.com/id/613882384/photo/photographer-silhouette-shooting-near-the-beach-when-sun-rising.jpg?s=612x612&w=0&k=20&c=k-kP2j3wNG8l3t0a2IH6czcYzID-6pdU2ZyUtXWKlD4='},
{img:'https://media.istockphoto.com/id/509112518/photo/taj-mahal-and-the-yamuna-river.jpg?s=612x612&w=0&k=20&c=oI3XjM3vTF-bfwYCd1-lMe-fSiSrTm4qyRP8R8O4ljw='},
{img:'https://media.istockphoto.com/id/544328914/photo/beautiful-landscape-in-norther-part-of-india.jpg?s=612x612&w=0&k=20&c=VYv5NYwqWZkvC3DRVEG6hxv6VTf9kR4sPEGW3g4WV-M='},
{img:'https://media.istockphoto.com/id/486121005/photo/sun-rays-inside-coconut-palms.jpg?s=612x612&w=0&k=20&c=beRZfHzsvKwSp-G1g-eR6CmYiR7B_qjNNgVlSHkdGfI='},
{img:'https://media.istockphoto.com/id/1220931161/photo/man-isolated-feeling-the-serene-nature-at-hill-top-with-amazing-cloud-layers-in-foreground.jpg?s=612x612&w=0&k=20&c=gXOevSO7H4quvncUlue-M3nzGD2BDW--EN_rgBV1j3Y='},
{img:'https://media.istockphoto.com/id/162137765/photo/summer-swimming-pool.jpg?s=612x612&w=0&k=20&c=Wv3DeS8S-yygZpJ6eE90iu7861DRVd177MlGTZVWd1I='}




]

if(count==7){
    setCount((prevCount)=>prevCount-7)
   
 }
useEffect(()=>{
    const id=setInterval(()=>{
      
       setCount((prevCount)=>prevCount+1)
      
       },2000)
       
       return ()=>{clearInterval(id)}
     
},[])

    return (

        <div>
  <div className='slider'>
    
    
   <img  src={arr[count].img} />
  </div>

        </div>
    )
}

export default Slider
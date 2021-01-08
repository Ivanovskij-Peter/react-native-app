import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageGellary from './imageGellary/ImageGellary';

const APP_API_KEY='ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9';

const Images=()=> {
    
const [Images,setImages]=useState([]);
console.log(Images);
useEffect(()=>{
const getImages = async() => {
const response=await axios.get(`https://api.unsplash.com/photos/?client_id=${APP_API_KEY}`) 
setImages(response.data)};
getImages();
},[]);

return(
    <>
    <ImageGellary data={Images}/>
    </>
)};

export default Images;
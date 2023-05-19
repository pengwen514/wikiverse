import React, { useState } from 'react';
import apiURL from '../api';

export const Page = (props) => {

  const [pagesData, setPagesData] = useState({})


 async function handleClick(){
    try{
      const response = await fetch(`${apiURL}/wiki/${props.page.slug}`);
      pagesInfo = await response.json();
      setPagesData(pagesInfo)
      console.log(pagesData)
    }
    catch(err){
      console.log('ERROR')
    }
 }
  

  return <>
    <a onClick={handleClick}><h3>{props.page.title}</h3></a>
    <h1>{pagesData ?  pagesData.id : 'error'}</h1>
  </>
} 
	

import React from 'react';
import apiURL from '../api';

export const Page = (props) => {

 async function handleClick(){
  console.log(props)
    try{
      const response = await fetch(`${apiURL}/wiki/${props.page.slug}`);
      const pagesData = await response.json();
      console.log(pagesData)
    }
    catch(err){
      console.log('ERROR')
    }
 }
  

  return <>
    <a onClick={handleClick}><h3>{props.page.title}</h3></a>
    
  </>
} 
	

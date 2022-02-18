import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";

const dataFatch = async (id) => { 
  let view = id;
  return await axios.get(`https://jsonplaceholder.typicode.com/photos/${view}`)
      .then(({ data }) => {
          return data;
      })
}
export default function Blog() {
 
  const[blogDtails, setBlogDtails] = useState([])
  let {id} =useParams() ;



  // using useEffect call the dataFatch function
      useEffect(() => {
          dataFatch(id).then((rendomData) => {
            setBlogDtails(rendomData);  
          });
      }, []);
  return (
    <div>
      <h1>Blog Details Page</h1>
      <p>{blogDtails.title}</p>
     
    </div>
  )
}

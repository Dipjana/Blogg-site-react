import React, {useState,  useEffect } from 'react';
import axios from 'axios'
import './bloglist.css';
import { Facebook, Whatsapp } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";

const dataFatch = async () => {  
  return await axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(({ data }) => {
          return data;
      })
}
export default function BlogList() {

    const[blogs, setBlogs] = useState([])
    // using useEffect call the dataFatch function
        useEffect(() => {
            dataFatch().then((rendomData) => {
              setBlogs(rendomData);
            });
        }, []);
  return (
<>
<div className="container">
  <div className="row m-3 justify-content-center">
  {blogs.map((blog) =>
<div className="card" key={blog.id}>
  <div className="row">
  <div className="col-5 mt-3 mb-5">
  <img src={blog.thumbnailUrl} className="card-img-top" alt="..."/>
  </div>
  <div className="col-7 card-body">
    <div className=''>
  <span className='btn-card'><h6>RHYME</h6> </span>
  <Link className="link" to={`${blog.id}`}>
  <h5 className="card-title" >Card title</h5>
            </Link>
  
    <p>{blog.title}</p>
    </div>
    <div className="">
      <span className='icon'> <Facebook /></span>
      <span className='icon'> <Whatsapp /></span> 
    </div>
    
  </div>
  </div>
</div>)}
</div>
</div>
</>
  )
}

import React from 'react'
import './css/Home.css';
import { useEffect } from "react";
import { useState } from "react";
import{ Link, useLocation } from 'react-router-dom';
import axios from "axios";
const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }
  
  return (
    <div>
    
   <div className="home">
    <div className="posts">
      {posts.map((post) =>(
        <div className="post" key={post.id}>
          <div className="img">
            <img className="uploadedImg" src={`../upload/${post.img}`} alt=""/>
          </div>
          <div className="content">
            <Link className="link" to={`/post/${post.id}`}>
              <h1 className="h1">{post.title}</h1>
              </Link>
              <p className="p">{getText(post.desc)}</p>
              <Link to={`/post/${post.id}`}>
              <button className="btnHome">Read More</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
   </div>
        
          
      
     
    
    </div>
    
  )
}

export default Home;
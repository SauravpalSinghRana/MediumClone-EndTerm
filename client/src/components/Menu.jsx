import axios from "axios";
import './css/Menu.css'
import React, { useEffect, useState } from "react";

const Menu = ({cat}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
  return (
    <div className="menu">
    <h1 className="h1Menu">Other posts you may like</h1>
    {posts.map((post)=>(
        <div className="postMenu" key={post.id}>
        <img className="imgMenu1" src={`../upload/${post?.img}`} alt="" />        
          <h2 className="h2Menu">{post.title}</h2>
          <button className="btnMenu">Read More</button>
        </div>
    ))}
    </div>
  )
}

export default Menu;
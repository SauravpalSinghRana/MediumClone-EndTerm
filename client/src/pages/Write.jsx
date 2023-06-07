import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import './css/Write.css';

const Write = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate()

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      state
        ? await axios.put(`/posts/${state.id}`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
          })
        : await axios.post(`/posts/`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
          navigate("/")
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="add">
      <div className="contentWrite">
        <input type="text" className="inputWrite" onChange={(e) => setTitle(e.target.value)} placeholder='Title'/> 
        <div className="editorContainer">
       <ReactQuill className="editor" theme="snow" value={value} onChange={setValue}/>
        </div>
      </div>
      <div className="menuWrite">
        <div className="itemWrite">
          <h1 className="h1write">Publish</h1>
          <span>
            <b>Status: </b>Draft
          </span>
          <span>
            <b>Visibility: </b>Public
          </span>
          <input style={{display:"none"}} type="file" onChange={e=>setFile(e.target.files[0])} id="file" name=""/>
          <label htmlFor="file">Upload Image</label>
          <div className="buttonsWrite">
            <button>Save as a draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="itemWrite">
        <h1 className="h1Write">Category</h1>
        <div className="cat">
        <input type="radio" name="cat" checked={cat === "science"} onChange={(e) => setCat(e.target.value)} value="science" id="science"/>
        <label htmlFor="science">Science</label>
        </div>
        <div className="cat">
        <input type="radio" name="cat" checked={cat === "technology"} onChange={(e) => setCat(e.target.value)} value="technology" id="technology"/>
        <label htmlFor="technology">Technology</label>
        </div>
        <div className="cat">
        <input type="radio" name="cat" value="cinema" checked={cat === "cinema"} onChange={(e) => setCat(e.target.value)} id="cinema"/>
        <label htmlFor="cinema">Cinema</label>
        </div>
        <div className="cat">
        <input type="radio" name="cat" value="design" checked={cat === "design"} onChange={(e) => setCat(e.target.value)} id="design"/>
        <label htmlFor="design">Design</label>
        </div>
        <div className="cat">
        <input type="radio" name="cat" value="food" checked={cat === "food"} onChange={(e) => setCat(e.target.value)} id="food"/>
        <label htmlFor="food">Food</label>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Write;
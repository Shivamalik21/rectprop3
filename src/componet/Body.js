import React from 'react'
import  './Body.css'
import {FaHeart, FaMailBulk, FaShareAlt,  } from "react-icons/fa";

const Body = (data) => {
  const movie=data.prop
  
  const spanStyle={
    border:"1px solid grey",
    marginRight:"0.5vw",
    fontWeight:"bold"
  }
  

  return (
    <div style={{padding:"10% 20%"}}>
      <h1>MovieCard:-</h1>
      {movie.map((e,index)=>{
        console.log(e.Poster)
        return(
          
          <div key={index} style={{textAlign:"start", width:"50vw",   marginBottom:"5vw",display:"flex", flexDirection:"column", gap:"3vw", boxShadow:"0px 0px 4px grey", borderRadius:"50px", padding:"3vw"}}>
            {/* cardBox */}
           <div style={{display:"flex",  alignItems:"center", gap:"1vw" } }>
            <img alt="img" src={e.Poster} style={{width:"10vw", height:"20vh", borderRadius:"10px"}}></img>
            {/* title/time/director */}
            <div style={{textAlign:"start",}}>
            <p style={{fontWeight:"bold", fontSize:"25px"}}>{e.Title}</p>
         <div style={{display:"flex", alignItems:"center"}}> <span>{e.Year+","}</span>
          <span style={{marginLeft:"1vw"}} className="dircterDiv"><p>{e.Director}</p></span>
          </div> 
            <p><span style={spanStyle}>{e.Runtime+""}</span><span style={{fontWeight:"bold", }} >{","+e.Genre}</span></p>
            </div>
            </div>
            {/* discription */}
            <div style={{width:"35vw"}}>{e.Plot}</div>
            {/* share/like */}
            <ul style={{listStyle:"none", display:"flex", gap:"3vw", color:"Gray", }}>
              <li><FaShareAlt/></li>
              <li><FaHeart/></li>
              <li><FaMailBulk/></li>
            </ul>
            

          
          </div>
        )
      })}
    </div>
    
  )
}

export default Body
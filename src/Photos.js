import React from "react";
import "./Photos.css";

export default function Photos(props){  
    console.log(props.photos);
    if(props.photos){
    return(<section className="Photos"> 
        <div className="row">
     {props.photos.map(function(photo,index){
           return (
             <div key={index} className="col-4">
             
                 <a href={photo.src.original} target="_blank">
                   <img
                     src={photo.src.landscape}
                     alt="image of keyword"
                     className="img-fluid"
                   ></img>
                 </a>
               </div>
          
           );
        
     })} 
     </div> </section>)}else{
        return null;
    }
}
//else return null, schreib i hin damit wenn photos undefined is also es kane gibt dass a nix angezeigt wird 
//weil in der search function zwei apis abgerufen wird kann es sein, dass bsp die mit den photos dann "dahinter hängen kau"
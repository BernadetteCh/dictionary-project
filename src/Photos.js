import React from "react";

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
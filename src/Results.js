import React from "react";
import "./Results.css";
import Meanings from "./Meanings";

export default function Results(props){

    if(props.results){
        return (
          <div className="Results">
            <h1>{props.results.word}</h1>
          
            {props.results.meanings.map(function(meaning,index){
                return (<section key={index}>
                    <Meanings meanings={meaning}/>
                </section>)
               
            })}
          </div>
        );
    }
    else{
        return null;
    }
   
     

}
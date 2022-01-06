import React from "react";
import Meanings from "./Meanings";

export default function Results(props){

    if(props.results){
        return (
          <div>
            <h1>{props.results.word}</h1>
            {props.results.meanings.map(function(meaning,index){
                return (<div key={index}>
                    <Meanings meanings={meaning}/>
                </div>)
               
            })}
          </div>
        );
    }
    else{
        return null;
    }
   
     

}
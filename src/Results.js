import React from "react";
import "./Results.css";
import Meanings from "./Meanings";
import Phonetic from "./Phonetic";

export default function Results(props){

    if(props.results){
        return (
          <div className="Results">
            <h1>{props.results.word}</h1>
            {props.results.phonetics.map(function(phonetic,index){
                return(
                    <div key={index}><Phonetic phonetics={phonetic}/></div>
                )
            })}
          
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
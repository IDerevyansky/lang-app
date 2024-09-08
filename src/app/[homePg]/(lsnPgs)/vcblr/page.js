'use client'
import Image from "next/image";
import { useEffect } from 'react';
import Card from "@/app/components/card"
import './vcblr.css';



export default function vcblr({ params }) {

  let listWords = ["Greetings", "Hello", "Hey", "Greetings", "Hello", "Hey", "Greetings", "Hello", "Hey", "Hello", "Hey", "Greetings", "Hello", "Hey", "Greetings", "Hello", "Hey","Greetings", "Hello", "Hey", "Greetings", "Hello", "Hey", "Greetings", "Hello", "Hey", "Hello", "Hey", "Greetings", "Hello", "Hey", "Greetings", "Hello", "Hey"];


  useEffect(() => {

    let listWords = document.getElementsByClassName('list-words');
     
    let word = document.getElementById(0);
    let wordWidth = word.clientWidth; 

    window.addEventListener('resize', ()=>(console.log(listWords[0].clientWidth)));

    // console.log(Math.round(wordWidth/2));

    

    console.log(listWordsX);





    
  }, []);
  

  return (
    <main className="content-box">

      <div className="header">
        <div className="back"><p>Back</p></div>
        <div className="title"><h3>Title</h3></div>
      </div>

      <div className="content">

        <div className="cards">
           <Card/>
        </div>

        <div className="count-cards">

          <div className="first"><p>12</p></div>
          <div className="second"><p>999</p></div>

        </div>

        <div className="list-words-box">

          <div className="dot-box">
            <div className="dot"></div>
          </div>

          <div className="list-words">

          {
            listWords.map((item, key)=>(<div key={key} id={key} className="word"><p>{item}</p></div>))
          }
    
          </div>

        </div>

      </div>

      {/* <div className="sheet">
        <div className="btn-line"></div>

      </div> */}

    </main>
  );
  
}
 
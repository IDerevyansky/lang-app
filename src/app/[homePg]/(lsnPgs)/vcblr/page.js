'use client'
import Image from "next/image";
import { useEffect, useState } from 'react';
import Card from "@/app/components/card"
import './vcblr.css';



export default function vcblr({ params }) {

  const [listWords, setListWords] = useState(
    [
      {
        "word": "VeryLongWord0",
        "part_of_speech": "междометие",
        "translation": "привет",
        "synonyms": ["hi", "greetings", "hey"],
        "description": "Приветствие, используемое при встрече или обращении к кому-либо.",
        "context_usage": {
          "target_language": "Hello, how are you today?",
          "translation": "Привет, как дела сегодня?"
        }
      },
      {
        "word": "LongWord1",
        "part_of_speech": "междометие",
        "translation": "привет",
        "synonyms": ["hi", "greetings", "hey"],
        "description": "Приветствие, используемое при встрече или обращении к кому-либо.",
        "context_usage": {
          "target_language": "Hello, how are you today?",
          "translation": "Привет, как дела сегодня?"
        }
      },
      {
        "word": "Word2",
        "part_of_speech": "междометие",
        "translation": "привет",
        "synonyms": ["hi", "greetings", "hey"],
        "description": "Приветствие, используемое при встрече или обращении к кому-либо.",
        "context_usage": {
          "target_language": "Hello, how are you today?",
          "translation": "Привет, как дела сегодня?"
        }
      },
      {
        "word": "VeryLongWord3",
        "part_of_speech": "междометие",
        "translation": "привет",
        "synonyms": ["hi", "greetings", "hey"],
        "description": "Приветствие, используемое при встрече или обращении к кому-либо.",
        "context_usage": {
          "target_language": "Hello, how are you today?",
          "translation": "Привет, как дела сегодня?"
        }
      },
      {
        "word": "VeryLong4",
        "part_of_speech": "междометие",
        "translation": "привет",
        "synonyms": ["hi", "greetings", "hey"],
        "description": "Приветствие, используемое при встрече или обращении к кому-либо.",
        "context_usage": {
          "target_language": "Hello, how are you today?",
          "translation": "Привет, как дела сегодня?"
        }
      },
      {
        "word": "VeryWord5",
        "part_of_speech": "междометие",
        "translation": "привет",
        "synonyms": ["hi", "greetings", "hey"],
        "description": "Приветствие, используемое при встрече или обращении к кому-либо.",
        "context_usage": {
          "target_language": "Hello, how are you today?",
          "translation": "Привет, как дела сегодня?"
        }
      },
    ]
  );



  useEffect(() => {

    let listWords = document.getElementsByClassName('list-words');
    //Center div list-words
    let ListWordsCenter = listWords[0].clientWidth/2;
    //Offset div list-words
    let ListWordsOffset = listWords[0].offsetLeft;



    //change to loop FOR 
    let word2 = document.getElementById(2);
    let word2Offeset = word2.offsetLeft;
    let word2Width = word2.clientWidth; 

    console.log( listWords[0].children.length );

    //set listener events to each [id]
    for (let i = 0; i < listWords[0].children.length; i++) {
    
      //document.getElementById(i).addEventListener('', ); <-- Set function with listener  to events touchMove/Scroll/Click/touchStart
 
      //Example
      // function startup() {
      //   const el = document.getElementById("canvas");
      //   el.addEventListener("touchstart", handleStart);
      //   el.addEventListener("touchend", handleEnd);
      //   el.addEventListener("touchcancel", handleCancel);
      //   el.addEventListener("touchmove", handleMove);
      //   log("Initialized.");
      // }
      
      // document.addEventListener("DOMContentLoaded", startup);


    }

    //Set listen width window
    window.addEventListener('resize', ()=>{

    //Update value centerListWords
    ListWordsCenter = listWords[0].clientWidth/2;

    } );



    listWords[0].scroll(
      {
        // top: 100,
        left: word2Offeset - ListWordsOffset - ListWordsCenter + word2Width/2,
        behavior: "smooth",
      }
    );


    listWords[0].addEventListener(
      'touchmove', 
      (e)=>{

        let pageX = Math.round(e.changedTouches[0].pageX);

        // console.log(e);

      }, { passive: true }
    );


  // Tip:-------------------------
  //  listen:
  //  - Resize -> Controll page center
  //  - Touch/Scroll -> Math search a div_world with min value and make the div centred position
  //  - Click/Tap -> Math after click we have [id] div_world and make the div ctntred position 

   

    
  }, []);
  

  return (
    <main className="content-box">

      <div className="header">
        <div className="back"><p>Back</p></div>
        <div className="title"><h3>Title</h3></div>
      </div>

      <div className="content">

        <div className="cards">
           <Card data={listWords}/>
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
            listWords.map((item, key)=>( <div key={key} id={key} className="word"><p>{item.word}</p></div> ))
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
 
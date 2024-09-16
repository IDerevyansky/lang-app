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

    console.log(listWords);

    //Set update value for resize
    window.addEventListener('resize', ()=>{

    ListWordsCenter = listWords[0].clientWidth/2;
    ListWordsOffset = listWords[0].offsetLeft;
    // console.log("ListWordsCenter: " + ListWordsCenter + " ListWordsOffset: " + ListWordsOffset);
  
    } );


    //set function scroll from click each item 
    function scrollToItem(q){

      let word = document.getElementById(q);
      let wordOffeset = word.offsetLeft;
      let wordWidth = word.clientWidth;

      listWords[0].scroll(
        {
          // top: 100,
          left: wordOffeset - ListWordsOffset - ListWordsCenter + wordWidth/2,
          behavior: "smooth",
        }
      );

    } 

    //set default value
    scrollToItem(0);
    

    function countOffset(e){

      for (let i = 0; i < listWords[0].children.length; i++) {
       
        let word = document.getElementById(i);
        let wordOffeset = word.offsetLeft;
        let wordWidth = Math.round(word.clientWidth);

        ListWordsCenter = listWords[0].clientWidth/2;
        ListWordsOffset = listWords[0].offsetLeft;

        console.log('word: '+i+' wordOffeset: '+wordOffeset+' clientWidth: '+wordWidth);
        console.log('scrollLeft: '+e.target.scrollLeft);
        //e.target.scrollLeft
        
      }

      console.log('-----------------------');

    }

    //set listener events to each [id]
    for (let i = 0; i < listWords[0].children.length; i++) {
    
      document.getElementById(i).addEventListener('click', ()=>scrollToItem(i) );
      // document.getElementById(i).addEventListener('touchend', ()=>scrollToItem(i), { passive: true } );

    }

    listWords[0].addEventListener( 'scrollend', (e)=>countOffset(e) );
    
    
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
 
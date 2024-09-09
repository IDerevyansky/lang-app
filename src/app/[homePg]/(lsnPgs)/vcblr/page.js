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
    let centerListWords = listWords[0].clientWidth/2; //191

    listWords[0].scroll(
      {
        // top: 100,
        left: 192-207+139/2,
        behavior: "smooth",
      }
    );


    // listWords[0].style.paddingLeft = centerListWords + 'px';
    // listWords[0].style.paddingRight = centerListWords + 'px';
    console.log(listWords[0].children);

    let count = 0; 

    listWords[0].addEventListener(
      'touchmove', 
      (e)=>{

        let pageX = Math.round(e.changedTouches[0].pageX);

        // console.log(pageX);

      }, { passive: true }
    );


    // Tip:
    // 1.Перебираем массив с данными
    // 2.Передаем цифру в scrollTo()
    // или
    // 3.Передаем значение в div margin left/right
    // или 
    // 4.Попробовать анкерные ссылки <- try is govno

   

    
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
 
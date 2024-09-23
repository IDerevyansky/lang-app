'use client'
import Image from "next/image";
import { useEffect, useState } from 'react';
import Card from "@/app/components/card"
import './vcblr.css';



export default function vcblr({ params }) {

  const [listWords, setListWords] = useState(
    [
      {
        "word": "VeryLongWord",
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
        "word": "LongWord",
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
        "word": "Word",
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
        "word": "VeryLongWord",
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
        "word": "VeryLong",
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
        "word": "VeryWord",
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
  const [num, setNum] = useState(1); //number of card with words
  const [saveNum, setSaveNum] = useState(0);


  useEffect(() => {

    let listWords = document.getElementsByClassName('list-words');
    let dot = document.getElementsByClassName('dot');
    

    //Set update value for resize
    window.addEventListener('resize', ()=>{

    ListWordsCenter = listWords[0].clientWidth/2;
    ListWordsOffset = listWords[0].offsetLeft;
  
    } );


    //set function scroll from click each item 
    function scrollToItem(q){

      let word = document.getElementById(q);
      let wordOffeset = word.offsetLeft;
      let wordWidth = word.clientWidth;

      listWords[0].scroll(
        {
          // top: 100,
          // left: wordOffeset - ListWordsOffset - ListWordsCenter + wordWidth/2,
          left: wordOffeset - window.innerWidth/2 + wordWidth/2,
          behavior: "smooth",
        }
      );

    } 

    
    scrollToItem(saveNum);//set default scroll position
    document.getElementById(saveNum).style.fontWeight='600';//set font weight for select item
    document.getElementById(saveNum).style.opacity='100%';

    //function scroll the line with words
    function countOffset(e){

      for (let f = 0; f < listWords[0].children.length; f++) {
        document.getElementById(f).style.fontWeight='400'; //set default fonts weight
        document.getElementById(f).style.opacity='80%'; //set default fonts weight
        document.getElementById(f).style.transition='0.2s'; //set duration animation
      }

      let sum = 0; //set default volume
      dot[0].className='dot'; //reload animation

      for (let i = 0; i < listWords[0].children.length; i++) {
       
        let word = document.getElementById(i);
        let wordWidth = Math.round(word.clientWidth);

        sum += wordWidth;//calculation value


        //make offset
        if(e.target.scrollLeft <= sum){
          setNum(i+1);
          word.style.fontWeight='600';//set fonts weight
          word.style.opacity='100%';
          dot[0].className='dot puls';//set animation
          break;
        }

      }

    }

    //set listener events to each [id]
    for (let i = 0; i < listWords[0].children.length; i++) {
    
      document.getElementById(i).addEventListener('click', ()=>scrollToItem(i) );

    }

    //set listener to event scrollend 
    listWords[0].addEventListener( 'scroll', (e)=>countOffset(e) );
    
    
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

          <div className="first"><p>{num}</p></div>
          <div className="second"><p>{listWords.length}</p></div>

        </div>

        <div className="list-words-box">

          <div className="dot-box">
            <div className="dot"></div>
          </div>

          <div className="list-words snap-x">


          {
            listWords.map((item, key)=>( <div key={key} id={key} className="word snap-center"><p>{item.word+key}</p></div> ))
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
 
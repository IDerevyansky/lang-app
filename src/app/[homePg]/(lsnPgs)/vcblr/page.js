import Image from "next/image";
import './vcblr.css';

export default function vcblr({ params }) {

  let listWords = ["Greetings", "Hello", "Hey", "Greetings", "Hello", "Hey", "Greetings", "Hello", "Hey"];

  return (
    <main className="content-box">

      <div className="header">
        <div className="back"><p>Back</p></div>
        <div className="title"><h3>Title</h3></div>
      </div>

      <div className="content">

        <div className="cards">
            cards
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
            listWords.map((item, key, arr)=>(<div key={key} id={key}><p>{item}</p></div>))
          }
    
          </div>

        </div>

      </div>

      <div className="sheet">
        <div className="btn-line"></div>

      </div>

    </main>
  );
  
}
 
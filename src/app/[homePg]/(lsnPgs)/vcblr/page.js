import Image from "next/image";
import './vcblr.css';

export default function vcblr({ params }) {

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
12|200
        </div>

        <div className="list-words">
          
        </div>

      </div>

      <div className="sheet">
        <div className="btn-line"></div>

      </div>

    </main>
  );
  
}
 
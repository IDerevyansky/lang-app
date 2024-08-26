import Image from "next/image";
import Link from "next/link";


export default function TargetLang() {


  return (
    <main className="main center-content">

      <div className="padding">
        <h3>Выбор языка</h3>
        <p>Выбери язык который хочешь учить</p>
      </div>


      <form className="form" action="/target-lang">
        
        <label className="label">
          <input name="lang" value="English" type="radio"/>
          English 🇺🇸
        </label>

        <label className="label">
          <input name="lang" value="Spanish" type="radio"/>
          Spanish 🇪🇸
        </label>

        {/* <button className="btn" type="submit">Делее</button> */}

      </form>


      <Link href="/target-lang" className="btn">Делее</Link>

    </main>
  );
}

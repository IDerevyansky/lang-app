import "./card.css";

export default function Card(props){
    //console.log(props.data[0].word);
    return(
        <div className="card">

            <div className="head">

                <p className="mainWord" >Greetings</p>
                <p className="transltWord" >Приветствую</p>
                <p className="descrptWord">Приветствие, используемое при встрече или обращении к кому-либо.</p>

            </div>

            <div className="description">

                <div className="titl">

                    <p className="fontsize">Синонимы:</p>
                    <div className="separator"></div>

                </div>

                <p className="serif">Hi, Greetings, Hey</p>

            </div>

            <div className="description">

                <div className="titl">

                    <p className="fontsize">Пример использования:</p>

                    <div className="separator"></div>

                </div>

                <p className="serif" >Hello, how are you today?</p>
                <p className="descrptWord" >Привет, как дела сегодня?</p>

            </div>

        </div>
    )
}
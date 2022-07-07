import React from 'react';
import './welcome.css'

const Welcome = () => {
    return (
        <div className="welcome">
            <div className="welcomeInfo">
                <div className="welcomeText">
                    <div className="welcomeMainText">Әлемнің ең үздік білім платформасы енді қазақ тілінде</div>
                    <div className="welcomeAdditionalText">Дүние жүзінің алдыңғы қатарлы компаниялары мен университеттеріндегі білімді қазақ тілінде алыңыз!</div>
                    <button className="welcomeLogin">Тегiн тiркелу</button>
                </div>
                <div className="welcomeImgWrapper">
                    <img src="./img/forComponents/Saly-10.png" alt="" className="welcomeImg"/>
                </div>
            </div>

        </div>
    );
};

export default Welcome;
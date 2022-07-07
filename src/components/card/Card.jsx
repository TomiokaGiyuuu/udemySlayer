import React from 'react';
import './card.css'

const Card = () => {
    return (
        <div className="card">
            <div className="cardImg">
                <img src="./img/forComponents/image 2 (1).png" alt="" className="cardImg_img"/>
            </div>
            <div className="cardDesc">
                <div className="cardName">Кемелмен ағылшын</div>
                <div className="cardAuthor">
                    <h1>Автор:</h1>
                    <h2>Кемел Академиясы</h2>
                </div>
                <div className="cardRating">5</div>
                <div className="cardPrice">

                </div>
                <div className="cardRegion">KZ</div>
            </div>
        </div>
    );
};

export default Card;
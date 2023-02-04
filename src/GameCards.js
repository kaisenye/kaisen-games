import React from 'react';
import { useState } from 'react';
import pokerImage from "./assets/images/poker.jpg"
import spyImage from "./assets/images/spy.jpg"
import checkImage from "./assets/images/checkOrNot.jpg"

const GameCards = () => {
    const [gameCards, setGameCards] = useState([
        { title:"小姐牌", alt:"小姐牌.jpg", image: pokerImage},
        { title:"谁是卧底", alt:"谁是卧底.jpg", image:spyImage},
        { title:"我从来没有..", alt:"我从来没有.jpg", image:checkImage}
    ])

    return (
        <div class="cards-list">
            {gameCards.map((gameCard) => 
                <div class="card">
                    <div class="card_image"> 
                        <img alt= { gameCard.alt } src = { gameCard.image } /> 
                    </div>
                    <div class="card_title title-black">
                        <p> { gameCard.title } </p>
                    </div>
                </div>
            )}
        </div>
                        
    );
};

export default GameCards;
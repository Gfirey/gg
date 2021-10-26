import React, {Component, useState} from 'react';
import './Card.css';
import {ICard, IPlayer} from '../interface/Game';
import { CSSTransition } from 'react-transition-group';
import Card from "./Card";

function PlayerWithAnimation(props: IPlayer) {
    const [showMessage, setShowMessage] = useState(true);

    const cardRender = (card: ICard) => {
        return <Card {...card}
                     key={card.id}
                     playerId={props.id}
                     isHidden={props.isHidden}
                     moveCardFn={props.moveCardFn}
        />
    };

    return (
        <div className={'player player-position-' + props.id}>
            <div className={'player-name player-color-' + props.id}>Игрок: {props.id}</div>
            <div className='board'>
                {props.cards.filter((card) => !card.inHand).map((card) =>
                    cardRender(card)
                )}
            </div>
            {/*<TransitionGroup component="div">*/}
            <div className='hand'>
                {props.cards.filter((card) => card.inHand).map((card) =>
                    <CSSTransition
                        in={showMessage}
                        key={card.id + '1'}
                        timeout={3000}
                        classNames="alert"
                        unmountOnExit
                        onEnter={() => setShowMessage(true)}
                        onExited={() => setShowMessage(false)}
                    >
                        <Card {...card}
                            key={card.id}
                            playerId={props.id}
                            isHidden={props.isHidden}
                            moveCardFn={props.moveCardFn}
                            />
                    </CSSTransition>
                )}
            </div>
            {/*</TransitionGroup>*/}
        </div>
    );
}

export default PlayerWithAnimation;

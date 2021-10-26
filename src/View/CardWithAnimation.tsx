import React, {Component, useState} from 'react';
import './Card.css';
import {ICard} from '../interface/Game';
import { CSSTransition } from 'react-transition-group';

function CardWithAnimation(props: ICard) {
    const [showMessage, setShowMessage] = useState(true);
    return (
        <div>
            <CSSTransition
                in={showMessage}
                timeout={300}
                classNames="alert"
                unmountOnExit
                onEnter={() => setShowMessage(true)}
                onExited={() => setShowMessage(false)}
            >
                <div onClick={() => props.moveCardFn(props.id)}
                     className={'card '
                     + (props.isHidden ? 'card-hidden' : 'card-showed') + ' '
                     + 'card-owner-player-' + props.ownerId}>
                    {props.name}
                </div>
            </CSSTransition>
        </div>
    );
}

export default CardWithAnimation;

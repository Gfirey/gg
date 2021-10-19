import React from 'react';
import './GameLoop.css';
import Player from './View/Player';
import {ICard} from './interface/Card';

type GameLoopProps = {};
type GameLoopState = {
    isInGame: boolean,
};

class GameLoop extends React.Component<GameLoopProps, GameLoopState> {
    private cards: ICard[];

    constructor(props: any) {
        super(props);
        this.state = {isInGame: true};
        this.startGame = this.startGame.bind(this);
        this.cards = [
            {
                id: 1,
                cardValue: 1,
                playerNumber: 1,
                inHand: true
            },
            {
                id: 2,
                cardValue: 2,
                playerNumber: 2,
                inHand: true
            },
            {
                id: 3,
                cardValue: 4,
                playerNumber: 3,
                inHand: false
            },
            {
                id: 4,
                cardValue: 7,
                playerNumber: 4,
                inHand: true
            }
        ];
    }

    startGame = () => {
        this.setState({isInGame: true});
    }

    render() {
        return (
            <div className="GameLoop">
                <p className="GameTitle">&lt;GameTitle&gt;</p>
                {!this.state.isInGame
                    ? <button onClick={this.startGame}>Начать игру</button>
                    : <div><Player id={1} cards={this.cards}/></div>
                }
            </div>
        );
    }
}

export default GameLoop;

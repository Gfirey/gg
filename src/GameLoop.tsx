import React from 'react';
import './GameLoop.css';
import {IBrain, IModel} from './interface/Game';
import Board from './View/Board';
import Brain from './Model/Brain';

type GameLoopProps = {};
type GameLoopState = {
    isInGame: boolean,
    playerId: number,
    model: IModel;
};

const PLAYER_ID = 1;

class GameLoop extends React.Component<GameLoopProps, GameLoopState> {
    private brain: IBrain;

    constructor(props: any) {
        super(props);
        this.brain = new Brain();
        this.state = {
            isInGame: true,
            playerId: PLAYER_ID,
            model: this.brain.getCurrentModel()
        }
    };

    startGame = () => {
        this.setState({
            isInGame: true,
            model: this.brain.getCurrentModel()
        });
    };

    moveCard = (cardId: number): boolean => {
        const response = this.brain.moveCard(cardId);
        if (response) {
            this.setState({
                model: this.brain.getCurrentModel()
            });
        }
        return response
    }

    render() {
        return (
            <div className="GameLoop">
                <p className="GameTitle">&lt;GameTitle&gt;</p>
                {!this.state.isInGame
                    ? <button onClick={this.startGame}>Начать игру</button>
                    : <Board
                        players={this.state.model.players}
                        playerId={this.state.playerId}
                        moveCardFn={this.moveCard}
                    />
                }
            </div>
        );
    }
}

export default GameLoop;

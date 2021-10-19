import React from 'react';
import './GameLoop.css';
import {IBrain, IModel, IPlayer} from './interface/Card';
import Board from './View/Board';
import Brain from './Model/Brain';

type GameLoopProps = {};
type GameLoopState = {
    isInGame: boolean,
    model: IModel;
};

class GameLoop extends React.Component<GameLoopProps, GameLoopState> {
    private brain: IBrain;

    constructor(props: any) {
        super(props);
        this.brain = new Brain();
        this.state = {
            isInGame: true,
            model: this.brain.getCurrentModel()
        }
    };

    startGame = () => {
        this.setState({
            isInGame: true,
            model: this.brain.getCurrentModel()
        });
    };

    render() {
        return (
            <div className="GameLoop">
                <p className="GameTitle">&lt;GameTitle&gt;</p>
                {!this.state.isInGame
                    ? <button onClick={this.startGame}>Начать игру</button>
                    : <div><Board players={this.state.model.players}/></div>
                }
            </div>
        );
    }
}

export default GameLoop;

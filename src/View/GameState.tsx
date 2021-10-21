import React, {Component} from 'react';
import './Card.css';
import {IModel} from '../interface/Game';

class GameState extends Component<IModel> {
    info() {
        if (this.props.loser) {
            return 'Игру проиграл:' + this.props.loser;
        }
        return 'Ход игрока: ' + this.props.nextPlayer;
    }

    render() {
        return (
            <div >
                {this.info()}
            </div>
        )
    }
}

export default GameState;

import React, {Component} from 'react';
import {IBoard} from '../interface/Card';
import Player from "./Player";

class Board extends Component<IBoard> {
    render() {
        return (
            <div className='playground'>
                {this.props.players.map((player) =>
                    <Player key={player.id} id={player.id} cards={player.cards}/>
                )}
            </div>
        )
    }
}

export default Board;

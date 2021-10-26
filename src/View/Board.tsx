import React, {Component} from 'react';
import {IBoard} from '../interface/Game';
import Player from "./Player";
import PlayerWithAnimation from "./PlayerWithAnimation";

class Board extends Component<IBoard> {
    render() {
        return (
            <div className='playground'>
                {this.props.players.map((player) =>
                    <Player key={player.id} id={player.id} cards={player.cards}
                            moveCardFn={this.props.moveCardFn}
                    />
                )}
            </div>
        )
    }
}

export default Board;

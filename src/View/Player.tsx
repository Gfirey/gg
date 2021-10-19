import React, {Component} from 'react';
import Card from '../View/Card';
import {IPlayer} from '../interface/Card';

class Player extends Component<IPlayer> {
    render() {
        return (
            <div className={'player player-position-' + this.props.id}>
                <div className='board'>
                    {this.props.cards.filter((card) => !card.inHand).map((card) =>
                        <Card id={card.id}
                              cardValue={card.cardValue}
                              playerNumber={card.playerNumber}
                              isHidden={this.props.isHidden}
                        />
                    )}
                </div>
                <div className='hand'>
                    {this.props.cards.filter((card) => card.inHand).map((card) =>
                        <Card id={card.id}
                              cardValue={card.cardValue}
                              playerNumber={card.playerNumber}
                              isHidden={this.props.isHidden}
                        />
                    )}
                </div>
            </div>
        )
    }
}

export default Player;

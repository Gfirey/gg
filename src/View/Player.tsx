import React, {Component} from 'react';
import Card from '../View/Card';
import {ICard, IPlayer} from '../interface/Game';

class Player extends Component<IPlayer> {

    cardRender(card: ICard) {
        return <Card {...card}
                     key={card.id}
                     playerId={this.props.id}
                     isHidden={this.props.isHidden}
                     moveCardFn={this.props.moveCardFn}
        />
    }

    render() {
        return (
            <div className={'player player-position-' + this.props.id}>
                <div className={'player-name player-color-' + this.props.id}>Игрок: {this.props.id}</div>
                <div className='board'>
                    {this.props.cards.filter((card) => !card.inHand).map((card) =>
                        this.cardRender(card)
                    )}
                </div>
                <div className='hand'>
                    {this.props.cards.filter((card) => card.inHand).map((card) =>
                        this.cardRender(card)
                    )}
                </div>
            </div>
        )
    }
}

export default Player;

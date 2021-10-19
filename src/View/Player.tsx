import React, {Component} from 'react';
import Card from '../View/Card';
import {IPlayer} from '../interface/Game';

class Player extends Component<IPlayer> {
    render() {
        return (
            <div className={'player player-position-' + this.props.id}>
                <div className={'player-name player-color-' + this.props.id}>Name: {this.props.id}</div>
                <div className='board'>
                    {this.props.cards.filter((card) => !card.inHand).map((card) =>
                        <Card id={card.id}
                              key={card.id}
                              type={card.type}
                              name={card.name}
                              rules={card.rules}
                              ownerId={card.ownerId}
                              inHand={card.inHand}
                              playerId={this.props.id}
                              isHidden={this.props.isHidden}
                              moveCardFn={this.props.moveCardFn}
                        />
                    )}
                </div>
                <div className='hand'>
                    {this.props.cards.filter((card) => card.inHand).map((card) =>
                        <Card id={card.id}
                              key={card.id}
                              type={card.type}
                              name={card.name}
                              rules={card.rules}
                              ownerId={card.ownerId}
                              inHand={card.inHand}
                              playerId={this.props.id}
                              isHidden={this.props.isHidden}
                              moveCardFn={this.props.moveCardFn}
                        />
                    )}
                </div>
            </div>
        )
    }
}

export default Player;

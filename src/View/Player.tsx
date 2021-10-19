import React, {Component} from 'react';
import Card from '../View/Card';
import {IPlayer} from '../interface/Card';

class Player extends Component<IPlayer> {
    render() {
        return (
            <div className={'player player-position-' + this.props.id}>
                <div className={'player-name player-color-' + this.props.id}>Name: {this.props.id}</div>
                <div className='board'>
                    {/*{this.props.cards.filter((card) => !card.inHand).map((card) =>*/}
                    {/*    <Card id={card.id}*/}
                    {/*          key={card.id}*/}
                    {/*          type={card.type.type}*/}
                    {/*          playerId={card.playerId}*/}
                    {/*          isHidden={this.props.isHidden}*/}
                    {/*    />*/}
                    {/*)}*/}
                </div>
                <div className='hand'>
                    {this.props.cards.filter((card) => card.inHand).map((card) =>
                        <Card id={card.id}
                              key={card.id}
                              type={card.type}
                              playerId={this.props.id}
                              ownerId={card.ownerId}
                              isHidden={this.props.isHidden}
                        />
                    )}
                </div>
            </div>
        )
    }
}

export default Player;

import {Component} from 'react';
import './Card.css';
import {ICard} from '../interface/Card';

class Card extends Component<ICard> {
    render() {
        return (
            <div key={this.props.id} className={'card '
                            + (this.props.isHidden ? 'card-hidden' : 'card-showed') + ' '
                            + 'card-player-' + this.props.playerNumber}>
                {this.props.cardValue}
            </div>
        )
    }
}

export default Card;

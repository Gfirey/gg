import {Component} from 'react';
import './Card.css';
import {ICard} from '../interface/Card';

class Card extends Component<ICard> {
    render() {
        return (
            <div className={'card '
                            + (this.props.isHidden ? 'card-hidden' : 'card-showed') + ' '
                            + 'card-player-' + this.props.ownerId}>
                {this.props.type}
            </div>
        )
    }
}

export default Card;

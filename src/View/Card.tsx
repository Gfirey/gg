import {Component} from 'react';
import './Card.css';
import {ICard} from '../interface/Game';

class Card extends Component<ICard> {
    render() {
        return (
            <div onClick={() => this.props.moveCardFn(this.props.id)}
                className={'card '
                            + (this.props.isHidden ? 'card-hidden' : 'card-showed') + ' '
                            + 'card-player-' + this.props.ownerId}>
                {this.props.name}
            </div>
        )
    }
}

export default Card;

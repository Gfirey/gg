interface ICard {
    id: number;
    playerNumber: number;
    cardValue: number;
    isHidden?: boolean;
    inHand?: boolean;
}

interface IPlayer {
    id: number;
    cards: ICard[];
    isHidden?: boolean;
}

export type {
    ICard,
    IPlayer
}

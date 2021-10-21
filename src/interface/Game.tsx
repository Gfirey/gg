type IMoveCardFn = (cardId: number) => boolean;

interface ICard {
    id: number;
    ownerId: number;
    type: number;
    name: string;
    rules: string;
    playerId: number;
    isHidden?: boolean;
    inHand?: boolean;
    moveCardFn: IMoveCardFn;
}

interface IPlayer {
    id: number;
    cards: ICard[];
    isHidden?: boolean;
    moveCardFn: IMoveCardFn;
}

interface IBoard {
    players: IPlayer[];
    playerId: number;
    moveCardFn: IMoveCardFn;
}

interface IModel {
    players: IPlayer[];
    cardsInHands: ICard[];
    deck: ICard[];
    nextPlayer: number;
    loser?: number;
}

interface IBrain {
    getCurrentModel: () => IModel;
    moveCard: IMoveCardFn;
}

interface ICardType {
    type: number;
    rules: string;
    name: string;
    img?: string;
}

type ICardTypes = ICardType[];

export type {
    ICard,
    IPlayer,
    IBoard,
    IModel,
    ICardType,
    ICardTypes,
    IBrain
}

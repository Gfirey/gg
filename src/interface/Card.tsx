interface ICard {
    id: number;
    ownerId: number;
    type: number;
    playerId: number;
    isHidden?: boolean;
    inHand?: boolean;
}

interface IPlayer {
    id: number;
    cards: ICard[];
    isHidden?: boolean;
}

interface IBoard {
    players: IPlayer[];
}

interface IModel {
    players: IPlayer[];
    usedCard: ICard[];
}

interface IBrain {
    getCurrentModel: () => IModel;
}

interface ICardType {
    type: number;
    img?: string;
}

interface ICardTypes {
    [key: string]: ICardType
}

export type {
    ICard,
    IPlayer,
    IBoard,
    IModel,
    ICardType,
    ICardTypes,
    IBrain
}

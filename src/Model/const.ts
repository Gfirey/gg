import {ICard, IPlayer, ICardTypes} from "../interface/Card";

const CARD_TYPES: ICardTypes = {
    type_1: {type: 1},
    type_2: {type: 2},
    type_3: {type: 3},
    type_4: {type: 4},
    type_5: {type: 5},
    type_6: {type: 6},
    type_7: {type: 7}
};

const CARDS: ICard[] = [
    {
        id: 1,
        ownerId: 1,
        playerId: 1,
        ...CARD_TYPES['type_1']
    },
    {
        id: 2,
        ownerId: 1,
        playerId: 1,
        ...CARD_TYPES['type_2']
    },
    {
        id: 3,
        ownerId: 1,
        playerId: 1,
        ...CARD_TYPES['type_3']
    },
    {
        id: 4,
        ownerId: 1,
        playerId: 1,
        ...CARD_TYPES['type_4']
    },
    {
        id: 5,
        ownerId: 1,
        playerId: 1,
        ...CARD_TYPES['type_5']
    },
    {
        id: 6,
        ownerId: 1,
        playerId: 1,
        ...CARD_TYPES['type_6']
    },
    {
        id: 7,
        ownerId: 1,
        playerId: 1,
        ...CARD_TYPES['type_7']
    },

    {
        id: 8,
        ownerId: 2,
        playerId: 2,
        ...CARD_TYPES['type_1']
    },
    {
        id: 9,
        ownerId: 2,
        playerId: 2,
        ...CARD_TYPES['type_2']
    },
    {
        id: 10,
        ownerId: 2,
        playerId: 2,
        ...CARD_TYPES['type_3']
    },
    {
        id: 11,
        ownerId: 2,
        playerId: 2,
        ...CARD_TYPES['type_4']
    },
    {
        id: 12,
        ownerId: 2,
        playerId: 2,
        ...CARD_TYPES['type_5']
    },
    {
        id: 13,
        ownerId: 2,
        playerId: 2,
        ...CARD_TYPES['type_6']
    },
    {
        id: 14,
        ownerId: 2,
        playerId: 2,
        ...CARD_TYPES['type_7']
    },
    {
        id: 15,
        ownerId: 3,
        playerId: 3,
        ...CARD_TYPES['type_1']
    },
    {
        id: 16,
        ownerId: 3,
        playerId: 3,
        ...CARD_TYPES['type_2']
    },
    {
        id: 17,
        ownerId: 3,
        playerId: 3,
        ...CARD_TYPES['type_3']
    },
    {
        id: 18,
        ownerId: 3,
        playerId: 3,
        ...CARD_TYPES['type_4']
    },
    {
        id: 19,
        ownerId: 3,
        playerId: 3,
        ...CARD_TYPES['type_5']
    },
    {
        id: 20,
        ownerId: 3,
        playerId: 3,
        ...CARD_TYPES['type_6']
    },
    {
        id: 21,
        ownerId: 3,
        playerId: 3,
        ...CARD_TYPES['type_7']
    },
    {
        id: 22,
        ownerId: 4,
        playerId: 4,
        ...CARD_TYPES['type_1']
    },
    {
        id: 23,
        ownerId: 4,
        playerId: 4,
        ...CARD_TYPES['type_2']
    },
    {
        id: 24,
        ownerId: 4,
        playerId: 4,
        ...CARD_TYPES['type_3']
    },
    {
        id: 25,
        ownerId: 4,
        playerId: 4,
        ...CARD_TYPES['type_4']
    },
    {
        id: 26,
        ownerId: 4,
        playerId: 4,
        ...CARD_TYPES['type_5']
    },
    {
        id: 27,
        ownerId: 4,
        playerId: 4,
        ...CARD_TYPES['type_6']
    },
    {
        id: 28,
        ownerId: 4,
        playerId: 4,
        ...CARD_TYPES['type_7']
    },
    {
        id: 29,
        ownerId: 5,
        playerId: 5,
        ...CARD_TYPES['type_1']
    },
    {
        id: 30,
        ownerId: 5,
        playerId: 5,
        ...CARD_TYPES['type_2']
    },
    {
        id: 31,
        ownerId: 5,
        playerId: 5,
        ...CARD_TYPES['type_3']
    },
    {
        id: 32,
        ownerId: 5,
        playerId: 5,
        ...CARD_TYPES['type_4']
    },
    {
        id: 33,
        ownerId: 5,
        playerId: 5,
        ...CARD_TYPES['type_5']
    },
    {
        id: 34,
        ownerId: 5,
        playerId: 5,
        ...CARD_TYPES['type_6']
    },
    {
        id: 35,
        ownerId: 5,
        playerId: 5,
        ...CARD_TYPES['type_7']
    }
];

const PLAYERS: IPlayer[] = [
    {id: 1, cards: []},
    {id: 2, cards: []},
    {id: 3, cards: []},
    {id: 4, cards: []},
    {id: 5, cards: []}
];

export {
    CARDS,
    PLAYERS
}
import {ICard, IPlayer, ICardTypes} from "../interface/Game";

const MAX_CARD_IN_HAND = 6;
const PLAYERS_COUNT = 4;

const PLACEHOLDER_FIELDS = {
    playerId: 4,
    name: '',
    rules: ''
}

const PLACEHOLDER_FNS = {
    moveCardFn: () => {
        return true;
    }
}

const CARD_TYPES: ICardTypes = [
    {
        type: 1,
        name: 'Казначей',
        rules: 'Игрок, выкладывающий эту карту, обязан показать все свои карты остальным.'
    },
    {
        type: 2,
        name: 'Чародей',
        rules: 'Игрок, выложивший эту карту, должен поменять любое количество своих карт с другим выбранным игроком. ' +
            'Количество карт он определяет перед обменом. Это количество не должно быть больше того ' +
            'количества, которое оба игрока имеют на руках. Минимум одна карта должна быть заменена. Каждый решает сам, какие карты отдать. ' +
            'Игроки меняют карты одновременно и рубашкой вверх.'
    },
    {
        type: 3,
        name: 'Служанка',
        rules: 'Игрок, выложивший эту карту, скидывает рубашкой вверх одну любую карту и берет одну карту из колоды помощи.'
    },
    {
        type: 4,
        name: 'Куртизанка',
        rules: 'Игрок, выложивший эту карту, меняет по одной любой карте из 2 разных раскладов не вызывая при этом ' +
            'дворцовых интриг (2 одинаковых персонажа в одном раскладе)! Выложенную куртизанку менять при этом нельзя. ' +
            'Если куртизанка выложена первой или второй в раунде, действие не выполняется, но ее можно разыграть еще раз.'
    },
    {
        type: 5,
        name: 'Страж',
        rules: 'Игрок, выложивший эту карту, забирает назад одну из карт своего расклада. ' +
            'Если расклад еще не начат, действие не выполняется, но может быть выполнено позже.'
    },
    {
        type: 6,
        name: 'Шут',
        rules: 'При розыгрыше этой карты ничего не происходит. ' +
            'Это единственная карта, которая не должна разыгрываться, если это запрещено королевской картой.'
    },
    {
        type: 7,
        name: 'Шпион',
        rules: 'Разыгрывающий эту карту открывает одну из колоды королевских карт.'
    }
];

const CARDS: ICard[] = [
    {
        id: 1,
        ownerId: 1,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[0]
    },
    {
        id: 2,
        ownerId: 1,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[1]
    },
    {
        id: 3,
        ownerId: 1,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[2]
    },
    {
        id: 4,
        ownerId: 1,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[3]
    },
    {
        id: 5,
        ownerId: 1,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[4]
    },
    {
        id: 6,
        ownerId: 1,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[5]
    },
    {
        id: 7,
        ownerId: 1,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[6]
    },

    {
        id: 8,
        ownerId: 2,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[0]
    },
    {
        id: 9,
        ownerId: 2,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[1]
    },
    {
        id: 10,
        ownerId: 2,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[2]
    },
    {
        id: 11,
        ownerId: 2,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[3]
    },
    {
        id: 12,
        ownerId: 2,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[4]
    },
    {
        id: 13,
        ownerId: 2,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[5]
    },
    {
        id: 14,
        ownerId: 2,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[6]
    },
    {
        id: 15,
        ownerId: 3,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[0]
    },
    {
        id: 16,
        ownerId: 3,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[1]
    },
    {
        id: 17,
        ownerId: 3,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[2]
    },
    {
        id: 18,
        ownerId: 3,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[3]
    },
    {
        id: 19,
        ownerId: 3,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[4]
    },
    {
        id: 20,
        ownerId: 3,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[5]
    },
    {
        id: 21,
        ownerId: 3,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[6]
    },
    {
        id: 22,
        ownerId: 4,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[0]
    },
    {
        id: 23,
        ownerId: 4,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[1]
    },
    {
        id: 24,
        ownerId: 4,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[2]
    },
    {
        id: 25,
        ownerId: 4,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[3]
    },
    {
        id: 26,
        ownerId: 4,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[4]
    },
    {
        id: 27,
        ownerId: 4,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[5]
    },
    {
        id: 28,
        ownerId: 4,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[6]
    },
    {
        id: 29,
        ownerId: 0,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[0]
    },
    {
        id: 30,
        ownerId: 0,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[1]
    },
    {
        id: 31,
        ownerId: 0,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[2]
    },
    {
        id: 32,
        ownerId: 0,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[3]
    },
    {
        id: 33,
        ownerId: 0,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[4]
    },
    {
        id: 34,
        ownerId: 0,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[5]
    },
    {
        id: 35,
        ownerId: 0,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[6]
    },
    {
        id: 36,
        ownerId: 0,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[0]
    },
    {
        id: 37,
        ownerId: 0,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[1]
    },
    {
        id: 38,
        ownerId: 0,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[2]
    },
    {
        id: 39,
        ownerId: 0,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[3]
    },
    {
        id: 40,
        ownerId: 0,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[4]
    },
    {
        id: 41,
        ownerId: 0,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[5]
    },
    {
        id: 42,
        ownerId: 0,
        ...PLACEHOLDER_FNS,
        ...PLACEHOLDER_FIELDS,
        ...CARD_TYPES[6]
    }
];

const PLAYERS: IPlayer[] = [
    {id: 0, cards: [], ...PLACEHOLDER_FNS},
    {id: 1, cards: [], ...PLACEHOLDER_FNS},
    {id: 2, cards: [], ...PLACEHOLDER_FNS},
    {id: 3, cards: [], ...PLACEHOLDER_FNS},
    {id: 4, cards: [], ...PLACEHOLDER_FNS}
];

export {
    CARDS,
    PLAYERS,
    MAX_CARD_IN_HAND,
    PLAYERS_COUNT
}

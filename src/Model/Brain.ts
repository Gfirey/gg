import {IBrain, ICard, IModel} from '../interface/Game';
import {CARDS, PLAYERS, MAX_CARD_IN_HAND, PLAYERS_COUNT} from "./const";

class Brain implements IBrain {
    private model: IModel;

    constructor() {
        this.model = {
            players: [],
            cardsInHands: [],
            deck: [],
            nextPlayer: 1
        };
        this.generateModelData();
    }

    public getCurrentModel(): IModel {
        return this.model;
    };

    public moveCard(cardId: number): boolean {
        const card = this.getCardById(cardId);
        const res = this.isMoveAvailable(card);
        if (res) {
            card.inHand = false;
            this.selectNextPlayerByCard(card);
            this.checkIsLose();
        }
        return res;
    }

    checkIsLose(): void {
        const isLose = !this.model.players[this.model.nextPlayer].cards
            .filter((playerCard) => playerCard.inHand)
            .some((card: ICard) => this.isMoveAvailable(card));
        if (isLose) {
            this.model.loser = this.model.nextPlayer;
        }
    }

    generateModelData(): void {
        this.generateCards();
        this.generatePlayers();
        this.selectNextPlayerRandom();
    };

    generateCards(): void {
        for (let i = 0; i < (PLAYERS_COUNT * MAX_CARD_IN_HAND); i++) {
            let index = this.getRandomCardIndex();
            while (this.isCardInUsed(index + 1)) {
                index = this.getRandomCardIndex();
            }
            let card = {...CARDS[index]};
            card.inHand = true;
            card.playerId = Math.floor(i / MAX_CARD_IN_HAND);
            this.model.cardsInHands.push(card);
        }
        CARDS.forEach((card) => {
            if (!this.getCardById(card.id)) {
                let currentCard = {...card};
                currentCard.inHand = false;
                this.model.deck.push(card);
            }
        });
    }

    generatePlayers(): void {
        const players = PLAYERS.slice(0, PLAYERS_COUNT);
        this.model.players = players.map((player) => {
            player.cards = this.model.cardsInHands?.filter((card) => card.playerId === (player.id));
            return player;
        });
    };

    selectNextPlayerByCard({ownerId, playerId}: ICard): void {
        if (ownerId < PLAYERS_COUNT) {
            this.setNextPlayer(ownerId);
        } else {
            this.selectNextPlayerRandom();
        }
    }

    selectNextPlayerRandom(): void {
        let maxCards = MAX_CARD_IN_HAND;
        let playersIds: number[] = [];
        this.model.players.forEach((player) => {
            const cardsInHandCount = player.cards.filter((playerCard) => playerCard.inHand).length;
            if (cardsInHandCount < maxCards) {
                maxCards = cardsInHandCount;
                playersIds = [player.id];
            } else if (cardsInHandCount === maxCards) {
                playersIds.push(player.id);
            }
        })
        this.setNextPlayer(this.getRandomFromArray(playersIds));
    }

    setNextPlayer(id: number): void {
        this.model.nextPlayer = id;
    }

    isMoveAvailable(card: ICard): boolean {
        return card.playerId === this.model.nextPlayer &&
            !this.getAllCardsByPlayerId(card.playerId)
                .filter((playerCard) => !playerCard.inHand)
                .filter((playerCard) => playerCard.id !== card.id)
                .some((playerCards) => playerCards.type === card.type);
    }

    getCardById(id: number): ICard {
        return this.model.cardsInHands.find((card) => card.id === id) as unknown as ICard;
    }

    getAllCardsByPlayerId(id: number): ICard[] {
        return this.model.cardsInHands.filter((card) => card.playerId === id);
    }

    getRandomInt = (maxInt: number): number => Math.floor(Math.random() * maxInt);

    getRandomCardIndex = (): number => this.getRandomInt(CARDS.length);

    getRandomPlayerId = (): number => this.getRandomInt(PLAYERS_COUNT);

    getRandomFromArray = (arr: number[]): number => arr[Math.floor(Math.random()*arr.length)];


    isCardInUsed(id: number): boolean {
        return this.model.cardsInHands?.some((card) => card.id === id);
    }
}

export default Brain;

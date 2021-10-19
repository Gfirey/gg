import {IBrain, ICard, IModel} from '../interface/Game';
import {CARDS, PLAYERS, MAX_CARD_IN_HAND, PLAYERS_COUNT} from "./const";

class Brain implements IBrain {
    private model: IModel;

    constructor() {
        this.model = {
            players: [],
            cardsInHands: [],
            deck: []
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
        }
        return res;
    }

    generateModelData(): void {
        this.generateCards();
        this.generatePlayers();
    };

    generateCards(): void {
        this.model.cardsInHands = [];
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
            player.cards = this.model.cardsInHands?.filter((card) => card.playerId === (player.id - 1));
            return player;
        });
    };

    isMoveAvailable(card: ICard): boolean {
        return !this.getAllCardsByPlayerId(card.playerId)
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

    getRandomCardIndex(): number {
        return Math.floor(Math.random() * CARDS.length);
    }

    isCardInUsed(id: number): boolean {
        return this.model.cardsInHands?.some((card) => card.id === id);
    }
}

export default Brain;

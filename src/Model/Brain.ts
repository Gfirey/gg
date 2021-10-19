import {IBrain, IModel} from "../interface/Card";
import {CARDS, PLAYERS} from "./const";

class Brain implements IBrain {
    private model: IModel;

    constructor() {
        this.model = {
            players: [],
            usedCard: []
        };
        this.generateModelData();
    }

    public getCurrentModel = (): IModel => {
        return this.model;
    };

    private generateModelData = () => {
        this.generateCards();
        this.generatePlayers();
    };

    private generatePlayers = () => {
        const players = PLAYERS.slice(0, 4);
        this.model.players = players.map((player) => {
            player.cards = this.model.usedCard?.filter((card) => card.playerId === (player.id - 1));
            return player;
        });
    };

    getRandomCardIndex() {
        return Math.floor(Math.random() * 35);
    }

    isCardInUsed(id: number) {
        return this.model.usedCard?.some((card) => (card.id - 1) === id);
    }

    private generateCards = () => {
        this.model.usedCard = [];
        for (let i = 0; i < 28; i++) {
            let index = this.getRandomCardIndex();
            while (this.isCardInUsed(index)) {
                index = this.getRandomCardIndex();
            }
            let card = {...CARDS[index]};
            card.inHand = true;
            card.playerId = Math.floor(i / 7);
            this.model.usedCard.push(card);
        }
    }
}

export default Brain;

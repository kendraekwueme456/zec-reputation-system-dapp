import crypto from 'node:crypto';

export class Freelancer {
    id;
    name;
    reputation;
    reviews;

    constructor(name) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.reputation = 0;
        this.reviews = [];
    }

    getData() {
        return {
            id: this.id,
            name: this.name,
            reputation: this.reputation,
        };
    }

    addReview(review) {
        this.reviews.push(review);
        this.calculateReputation();
    }

    calculateReputation() {
        const totalRating = this.reviews.reduce((sum, review) => sum + review.rating, 0);
        this.reputation = totalRating / this.reviews.length || 0;
    }
}

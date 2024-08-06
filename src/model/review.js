import crypto from 'node:crypto';

export class Review {
    id;
    freelancerId;
    rating;
    comment;

    constructor({ freelancerId, rating, comment }) {
        this.id = crypto.randomUUID();
        this.freelancerId = freelancerId;
        this.rating = rating;
        this.comment = comment;
    }

    getData() {
        return {
            id: this.id,
            freelancerId: this.freelancerId,
            rating: this.rating,
            comment: this.comment,
        };
    }
}

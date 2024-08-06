class ReviewStorage {
    reviews;

    constructor() {
        this.reviews = new Map();
    }

    addOne(review) {
        this.reviews.set(review.id, review);
    }

    getAllForFreelancer(freelancerId) {
        return Array.from(this.reviews.values()).filter(review => review.freelancerId === freelancerId);
    }
}

export const reviewStorage = new ReviewStorage();

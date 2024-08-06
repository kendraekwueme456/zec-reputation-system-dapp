import { Review } from '../model/review';
import { RollupStateHandler } from '../shared/rollup-state-handler';
import { freelancerStorage } from '../storage/freelancer';
import { reviewStorage } from '../storage/review';

export class ReviewController {
    /**
     * ### ReviewController rateFreelancer
     * @description rate a freelancer.
     * @param {*} required {freelancerId: UUID, rating: number, comment: string}
     */
    async rateFreelancer(data) {
        const { freelancerId, rating, comment } = data;

        if (!freelancerId || rating == null) {
            return await RollupStateHandler.handleReport({
                error: 'Freelancer ID and rating must be provided.',
            });
        }

        const freelancer = freelancerStorage.getOneById(freelancerId);

        if (!freelancer?.id) {
            return await RollupStateHandler.handleReport({
                error: `Freelancer not found for id '${freelancerId}'`,
            });
        }

        return await RollupStateHandler.advanceWrapper(() => {
            const newReview = new Review({ freelancerId, rating, comment });
            reviewStorage.addOne(newReview);

            freelancer.addReview(newReview);
            freelancerStorage.updateOne(freelancer);

            return {
                ok: true,
                message: `Review added successfully to freelancer '${freelancer.id}'!`,
                data: newReview.getData(),
            };
        });
    }

    /**
     * ### ReviewController getReviews
     * @description get all reviews for a freelancer.
     * @param {*} data freelancer id (UUID)
     */
    async getReviews(data) {
        const freelancerId = data[0];
        const reviews = reviewStorage.getAllForFreelancer(freelancerId);

        return await RollupStateHandler.inspectWrapper(() => ({
            data: reviews.map(review => review.getData()),
        }));
    }
}

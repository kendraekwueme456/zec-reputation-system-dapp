import { ReviewController } from './review';
import { FreelancerController } from './freelancer';

const reviewController = new ReviewController();
const freelancerController = new FreelancerController();

export const controller = {
    rateFreelancer: reviewController.rateFreelancer,
    getReviews: reviewController.getReviews,
    getFreelancerById: freelancerController.getFreelancerById,
    getFreelancers: freelancerController.getFreelancers,
};

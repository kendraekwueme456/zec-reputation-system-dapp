import { Freelancer } from '../model/freelancer';
import { RollupStateHandler } from '../shared/rollup-state-handler';
import { freelancerStorage } from '../storage/freelancer';

export class FreelancerController {
    /**
     * ### FreelancerController getFreelancerById
     * @description get a freelancer by ID.
     * @param {*} data freelancer id (UUID)
     */
    async getFreelancerById(data) {
        const freelancerId = data[0];
        const freelancer = freelancerStorage.getOneById(freelancerId);

        if (!freelancer?.id)
            return await RollupStateHandler.handleReport({
                error: `Freelancer not found for id '${freelancerId}'.`,
            });

        return await RollupStateHandler.inspectWrapper(() => ({
            data: freelancer.getData(),
        }));
    }

    /**
     * ### FreelancerController getFreelancers
     * @description get all freelancers.
     */
    async getFreelancers() {
        return await RollupStateHandler.inspectWrapper(() =>
            freelancerStorage.getAll()
        );
    }
}

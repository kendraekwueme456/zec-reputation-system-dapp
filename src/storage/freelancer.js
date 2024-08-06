class FreelancerStorage {
    freelancers;

    constructor() {
        this.freelancers = new Map();
    }

    getAll() {
        return Array.from(this.freelancers.values());
    }

    addOne(freelancer) {
        this.freelancers.set(freelancer.id, freelancer);
    }

    getOneById(id) {
        return this.freelancers.get(id);
    }

    updateOne(freelancer) {
        this.freelancers.set(freelancer.id, freelancer);
    }
}

export const freelancerStorage = new FreelancerStorage();

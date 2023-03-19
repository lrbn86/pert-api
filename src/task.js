class Task {
    constructor() {
        this.description = "";
        this.optimisticTime = 0;
        this.mostLikelyTime = 0;
        this.pessimisticTime = 0;
        this.expectedTime = 0;
        this.status = 'in progress';
        this.dependencies = [];
    }

    calculateExpectedTime() {
        return Math.round((this.optimisticTime + (4 * this.mostLikelyTime) + this.pessimisticTime) / 6);
    }

    setStatus(status) {
        this.status = status;
        return this;
    }

    setExpectedTime() {
        this.expectedTime = this.calculateExpectedTime();
        return this;
    }

    setDescription(description) {
        this.description = description;
        return this;
    }

    setOptimisticTime(time) {
        this.optimisticTime = time;
        return this;
    }

    setMostLikelyTime(time) {
        this.mostLikelyTime = time;
        return this;
    }

    setPessimisticTime(time) {
        this.pessimisticTime = time;
        return this;
    }
}

export default Task;

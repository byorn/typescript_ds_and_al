import {RateLimiter} from "./RateLimiter";

class LeakyBucket implements RateLimiter {
    private capacity: number;

    /** tokens per second **/
    // private refillRate: number;
    // private lastRefillTime: number;

    constructor(capacity: number) {
        this.capacity = capacity;
    }

    allowRequest(numberOfRequests: number): boolean {
        if (numberOfRequests > this.capacity) {
            return false;
        } else {
            this.capacity -= numberOfRequests;
            return true;
        }
    }



}
import {RateLimiter} from "./RateLimiter";

class TokenBucket implements RateLimiter {
    private capacity:number;
    private existingTokens: number;
    private refillRate: number;
    private lastRefillTime: number;

    constructor(capacity: number, refillRate: number) {
        this.capacity = capacity;
        this.existingTokens = capacity;
        this.refillRate = refillRate;
        this.lastRefillTime = Date.now();
    }

    allowRequest(numberOfRequests: number): boolean {
        this.refill();
        if (numberOfRequests > this.capacity) {
            return false;
        } else {
            this.existingTokens -= numberOfRequests;
            return true;
        }
    }

     refill(): void {
        const tokensToRefil = (Date.now() - this.lastRefillTime / 1000) * this.refillRate;
        this.existingTokens = Math.min(tokensToRefil, this.capacity);
        this.lastRefillTime = Date.now();
     }

}
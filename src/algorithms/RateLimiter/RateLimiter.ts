export interface RateLimiter  {
    allowRequest(numberOfRequests: number) : boolean;
}
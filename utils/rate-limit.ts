import type { NextApiResponse } from "next";
import LRU from "lru-cache";

type Options = {
  uniqueTokenPerInterval?: number;
  interval?: number;
};

export default function rateLimit(options?: Options) {
  // Dynamic configuration with environment variables
  const uniqueTokens = parseInt(process.env.RATE_LIMIT_UNIQUE_TOKENS || '100', 10);
  const rateLimitInterval = parseInt(process.env.RATE_LIMIT_INTERVAL_MS || '60000', 10);

  const tokenCache = new LRU({
    max: options?.uniqueTokenPerInterval || uniqueTokens,
    ttl: options?.interval || rateLimitInterval,
  });

  return {
    check: (res: NextApiResponse, limit: number, token: string) =>
      new Promise<void>((resolve, reject) => {
        const tokenCount = (tokenCache.get(token) as number[]) || [0];
        if (tokenCount[0] === 0) {
          tokenCache.set(token, tokenCount);
        }
        tokenCount[0] += 1;

        const currentUsage = tokenCount[0];
        const isRateLimited = currentUsage >= limit;
        res.setHeader("X-RateLimit-Limit", limit);
        res.setHeader(
          "X-RateLimit-Remaining",
          isRateLimited ? 0 : limit - currentUsage
        );

        return isRateLimited ? reject() : resolve();
      }),
  };
}
import { NextApiRequest, NextApiResponse } from "next";
import redis from "../../utils/redis";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body } = req;

  // Input validation
  if (!body || typeof body.body !== 'string' || typeof body.sourceMessageId !== 'string') {
    return res.status(400).json({ error: 'Invalid input format' });
  }

  try {
    const decoded = atob(body.body);
    // Additional validation for decoded content can be added here if necessary
    await redis.set(body.sourceMessageId, decoded);
    return res.status(200).send(decoded);
  } catch (error) {
    // Improved error handling
    console.error('Error in callback endpoint:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

import { NextApiRequest, NextApiResponse } from "next";
import redis from "../../utils/redis";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id }: any = req.query;

  // Validate id query parameter
  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'ID is required and must be a string.' });
  }

  try {
    const data = await redis.get(id);
    if (!data) {
      return res.status(404).json({ error: "No data found for the provided ID." });
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to retrieve data due to an internal server error.' });
  }
}

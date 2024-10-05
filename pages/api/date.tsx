import { NextApiRequest, NextApiResponse } from "next";

export default function handler (request: NextApiRequest, response: NextApiResponse ) {
    const now = new Date();
    if (request.method === "GET") {
        return response.status(200).json(now)
    }
}
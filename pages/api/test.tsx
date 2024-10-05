import { NextApiRequest, NextApiResponse } from "next";

export default function handler(request: NextApiRequest, response: NextApiResponse) {
    if (request.method === 'POST') {
        return response.status(200).json('처리완료')
    }
}
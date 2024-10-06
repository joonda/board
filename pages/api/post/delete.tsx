import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    if (request.method === "DELETE") {
        const client = await connectDB;
        const db = client.db('forum');

        await db.collection('post').deleteOne(
            {_id : new ObjectId(request.body)}
        );
        response.status(200).redirect('/list')
    }
}
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import {NextApiRequest, NextApiResponse} from "next";



export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    
    if (request.method == "POST") {
        let change = {
            title:request.body.title, 
            content:request.body.content
        }
        const db = (await connectDB).db('forum')
        let result = await db.collection('post').updateOne(
            {_id : new ObjectId(request.body._id.toString())}, 
            {$set : change}
        )
        response.status(200).redirect(302, '/list')
    }
}
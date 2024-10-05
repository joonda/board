import { connectDB } from "@/util/database";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {

    if (request.method === "POST") {
        try {
            if (request.body.title == '' || request.body.content == "") {
                return response.status(400).json("글 제목이나 내용을 채워주세요.")
            }
            const client = await connectDB;
            const db = client.db('forum');

            await db.collection('post').insertOne(request.body);

            return response.status(200).redirect('/list');
        } catch (error) {  
            return response.status(500).json('오류입니다')
        }
    }
}
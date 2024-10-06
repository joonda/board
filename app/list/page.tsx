import { connectDB } from "@/util/database"
import Link from "next/link";
import ListItem from "./ListItem";

interface Post {
    _id: string;
    title: string;
    content: string;
}

export default async function List() {

    const client = await connectDB;
    const db = client.db('forum')

    let result = await db.collection('post').find().toArray();

    let posts: Post[] = result.map((doc) => ({
        _id: doc._id.toString(),
        title: doc.title || '',
        content: doc.content || ','
    }));


    return (
        <div className="list-bg">
            <ListItem result={posts} />
        </div>
    )
}
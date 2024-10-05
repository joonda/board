import DetailLink from "@/app/list/DetailLink";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

interface DetailProps {
    readonly params: {
        id: string;
    };
}

export default async function Detail(props: DetailProps) {

    const client = await connectDB;
    const db = client.db('forum')
    let result = await db.collection('post').findOne({
        _id: new ObjectId(props.params.id)
    })

    return (
        <div>
            <DetailLink></DetailLink>
            <h4>상세페이지</h4>
            <h4>{result?.title}</h4>
            <p>{result?.content}</p>
        </div>
    )
}
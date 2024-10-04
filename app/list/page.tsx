import { connectDB } from "@/util/database"

export default async function List() {

    const client = await connectDB;
    const db = client.db('forum')
    let result = await db.collection('post').find().toArray()

    return (
        <div className="list-bg">
            {
                // return, 중괄호 생략 가능
                result.map((post, i) => {
                    return (
                        <div className="list-item" key={i}>
                            <h4>{result[i].title}</h4>
                            <p>{result[i].content}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
import { connectDB } from "@/util/database"

export default async function Home() {
  // db code is only write in server component 
  const client = await connectDB;
  const db = client.db('forum')
  let result = await db.collection('post').find().toArray()
  console.log(result)

  return (
    <div>Hello Next.js!</div>
  )
}

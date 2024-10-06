'use client'

import Link from "next/link";

interface Post {
    _id: string;
    title: string;
    content: string;
}

interface ListItemProps {
    readonly result: readonly Post[];
}

export default function ListItem({ result }: ListItemProps) {

    return (
        <div>
            {
                // return, 중괄호 생략 가능
                result.map((post, i) => {
                    return (
                        <div className="list-item" key={i}>
                            <Link href={'/detail/' + result[i]._id}>
                                <h4>{result[i].title}</h4>
                            </Link>
                            <p>{result[i].content}</p>
                            <Link href={'/edit/' + result[i]._id}>✏️</Link>
                            <span onClick={(e) => {
                                fetch("/api/post/delete", { method: "DELETE", body: result[i]._id })
                            }}>🗑️</span>
                        </div>
                    )
                })
            }
        </div>
    )
}
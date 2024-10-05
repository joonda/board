export default function Write() {

    return (
        <div className="p-20">
            <h4>Write</h4>
            <form action='/api/post/new' method="POST">
                <input name="title" placeholder="글 제목" />
                <input name="content" placeholder="글 내용"/>
                <button type="submit">글쓰기</button>
            </form>
            <form action='/api/list' method="GET">
                <button type="submit">글목록</button>
            </form>
            <form action='/api/date' method="GET">
                <button type="submit">Now time</button>
            </form>
        </div>
    );
}


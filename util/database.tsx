import { MongoClient } from "mongodb";
const url = "mongodb+srv://admin:qwer1234@cluster0.ffz12.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

declare global {
    namespace NodeJS {
        interface Global {
            _mongo: Promise<MongoClient> | undefined;
        }
    }
}
// connectDB를 const로 선언
const connectDB: Promise<MongoClient> = (async () => {
    if (process.env.NODE_ENV === "development") {
        // global을 unknown으로 타입 변환 후 NodeJS.Global로 캐스팅
        if (!(global as unknown as NodeJS.Global)._mongo) {
            (global as unknown as NodeJS.Global)._mongo = new MongoClient(url).connect();
        }
        return (global as unknown as NodeJS.Global)._mongo as Promise<MongoClient>;
    } else {
        return new MongoClient(url).connect();
    }
})();

export { connectDB };

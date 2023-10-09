import * as dotenv from "dotenv";
import url from "url";
dotenv.config();

import { createServer } from "http";
import { getNews } from "./fake_dao";

const HOST = process.env.HOST ?? "0.0.0.0";
const PORT = +(process.env.PORT ?? "3000");

let requestCount = 1;

const server = createServer((req, res) => {
    const urlData = url.parse(req.url!, true);
    if (req.method === "GET" && urlData.pathname === "/") {
        const queries = urlData.query;
        const page = +(queries.page ?? "0");
        const size = +(queries.size ?? "20");

        if (requestCount % 5 !== 0) {
            requestCount++;
            const news = getNews(page, size);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.write(
                JSON.stringify({
                    pagination: {
                        nextPage: page + 1,
                        size,
                        length: news.length,
                    },
                    news,
                })
            );
            res.end();
        } else {
            requestCount++;
            res.writeHead(500, { "Content-Type": "application/json" });
            res.write(JSON.stringify({ error: "5th request" }));
            res.end();
        }
    }
});

server.listen(PORT, HOST, () => {
    console.log("Listening: " + HOST + ":" + PORT);
});

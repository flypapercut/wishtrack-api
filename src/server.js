import express from "express";
import routes from "./routes/index.js";

const server = express();

server.use(routes);

const port = process.env.PORT;
server.listen(port, () => {
	console.log(`server running on port ${port}`);
});

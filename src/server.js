import express from "express";

const server = express();

const port = process.env.PORT;
server.listen(port, () => {
	console.log(`server running on port ${port}`);
});

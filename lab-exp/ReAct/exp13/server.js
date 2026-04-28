const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 3000 });

console.log("WebSocket Server is running on ws://localhost:3000");

server.on("connection", (socket) => {
    console.log("Client connected");

    socket.send("Welcome to WebSocket Server!");

    socket.on("message", (message) => {
        console.log("Received:", message.toString());

        socket.send("Server received: " + message);
    });

    socket.on("close", () => {
        console.log("Client disconnected");
    });
});
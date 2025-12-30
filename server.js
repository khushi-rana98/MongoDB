const websocket=require('ws');
const wss= new websocket.Server({port:8080});

console.log("Websocket server running on ws://localhost:8080");

wss.on("connection",(ws)=>{
  console.log("Client connected!");

  ws.send("message from server to client!");

  ws.on("message",(data)=>{
    const message=JSON.parse(data.toString());
    console.log("received!",message);
  });

  ws.send(JSON.stringify({
    type:"response",
    text:"Message received successfully!"
  }))
})
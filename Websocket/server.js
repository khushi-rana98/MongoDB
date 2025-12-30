const websocket=require('ws');
const wss=new websocket.Server({port:8000});

console.log("Websoket server is running on ws://localhost:8000");

wss.on("connection",(ws)=>{
  console.log("Client connected!");

  ws.send("Hello client! Welcome to webSocket");

  ws.on("message",(message)=>{
    console.log("received from client!",message.toString());
  });

  ws.on("close",()=>{
    console.log("Client Connected! ");
  });
});
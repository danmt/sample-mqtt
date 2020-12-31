const mqtt = require("mqtt");
const { v4: uuid } = require("uuid");

const connect = (options) => {
  const client = mqtt.connect("mqtt://localhost:1883", options);

  client.on("connect", () => {
    const connectionId = uuid();
    console.log("Connection stablished. ID: " + connectionId);
    client.subscribe("client/connected");
    client.publish(
      "client/connected",
      JSON.stringify({
        clientId: client.options.clientId,
        connectionId,
      })
    );
  });

  client.on("message", (topic, message) => {
    switch (topic) {
      case "client/connected":
        const connectedClient = JSON.parse(message.toString());
        console.log(
          `Client ${connectedClient.clientId} connected via ${connectedClient.connectionId}`
        );
    }
  });
};

module.exports = { connect };

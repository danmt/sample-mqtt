const { connect } = require("./mqtt-helper");

const options = {
  protocolId: "MQTT",
  clientId: "123",
  username: "sample-1",
  password: "123456",
  clean: false,
};

connect(options);

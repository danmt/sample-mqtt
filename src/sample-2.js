const { connect } = require("./mqtt-helper");

const options = {
  clientId: "124",
  username: "sample-2",
  password: "123456",
  clean: true,
};

connect(options);

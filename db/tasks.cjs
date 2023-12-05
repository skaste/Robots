const client = require("./client.cjs");

const createTasks = async (name, description) => {
  try {
    await client.query(`
    INSERT INTO tasks (name, description)
    VALUES ('${name}', '${description}')`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createTasks,
};

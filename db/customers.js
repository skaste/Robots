const client = require("./client");

const createCustomers = async (name, email, would_recommend) => {
  try {
    await client.query(`
    INSERT INTO customers (name, email, would_recommend)
    VALUES ('${name}', '${email}', '${would_recommend}' )`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createCustomers,
};

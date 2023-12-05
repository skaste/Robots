const client = require("./client.cjs");

const createRobots = async (
  name,
  model,
  company_name,
  longevity_months,
  is_child_safe,
  cost,
  release_date
) => {
  try {
    await client.query(`
    INSERT INTO robots (name, model, company_name, longevity_months, is_child_safe, cost, release_date)
    VALUES ('${name}', '${model}', '${company_name}', '${longevity_months}', '${is_child_safe}', '${cost}', '${release_date}')`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createRobots,
};

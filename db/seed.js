const client = require("./client");
const { robots, createRobots } = require("./robots");

//drop tables for robots, task, and customers
async function dropTables() {
  try {
    console.log("Tables are being dropped");
    await client.query(`
DROP TABLE IF EXISTS robots;
DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS customers`);
  } catch (err) {
    console.log(err);
  }
}
//build tables for robots, task, and customers

//async await function with try catches because they call api:
async function createTables() {
  try {
    console.log("Build Tables");
    await client.query(`
CREATE TABLE robots (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30),
  model VARCHAR(30),
  company_name VARCHAR(30),
  longevity_months INTEGER,
  is_child_safe BOOLEAN,
  cost DECIMAL,
  release_date DATE
);

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  task_name VARCHAR(30),
  task_description TEXT
);

CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  custom_name VARCHAR(30),
  customer_email VARCHAR(30),
  would_recommend BOOLEAN 
);
`);
  } catch (err) {
    console.log(err);
  }
}
// CREATE TABLE robots ('');
// CREATE TABLE tasks ('');
// CREATE TABLE customers ('');

//create initial data for robots, task, and customers
async function createInitialData() {
  try {
    console.log("Create Data in Table");
    await client.query(`

    `);
  } catch (err) {
    console.log(err);
  }
}
// create an async await function with try catch and awaits client.query:

// INSERT INTO robots ('name, model, company_name, longevity_months, is_child_safe, cost, release_date')
// VALUES ('same thing as insert into but each gets '' around it);

// return values from the inserted data set

//build all tables and create initial data

async function syncAndSeed() {
  try {
    client.connect();
    console.log("Connected to DB");

    await dropTables();
    console.log("Table deleted");

    await createTables();
    console.log("Tables created");

    await createInitialData();
    console.log("created data");

    await createRobots(
      "Weirdo Weld",
      "WW12345",
      "Weldomatic",
      24,
      false,
      1000,
      "2023-12-05"
    );

    await createRobots(
      "PowerWeld",
      "ZZ12345",
      "Weld Better",
      48,
      true,
      10000,
      "2023-11-14"
    );

    await createRobots(
      "Kid Sitter",
      "BB12345",
      "Wish It Was True",
      84,
      true,
      1000000,
      "2023-10-10"
    );

    await createRobots(
      "Food Cooker",
      "BAKE123",
      "Wish It Was True",
      84,
      true,
      250,
      "2023-10-11"
    );

    await createRobots(
      "Bed Maker",
      "KB12345",
      "Like Made Beds",
      120,
      true,
      750,
      "2023-1-11"
    );

    console.log(new Date().toISOString().slice(0, 19).replace("T", " "));
  } catch (err) {
    console.log(err);
  }
}
syncAndSeed();
module.exports = {};

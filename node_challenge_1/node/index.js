const express = require("express");
const app = express();
const port = 3000;
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const mysql = require("mysql");
const connection = mysql.createConnection(config);

const tableSql = `CREATE TABLE IF NOT EXISTS people(
  id int primary key auto_increment,
  name varchar(255)
)`;

connection.query(tableSql);

const clearSql = `DELETE FROM people`;

connection.query(clearSql);

const sql = `INSERT INTO people(name) values('Francisco'), ('Wesley'), ('João')`;
connection.query(sql);
connection.end();

app.get("/", (req, res) => {
  const connection = mysql.createConnection(config);

  const sql = `SELECT name FROM people`;

  const names = [];

  connection.query(sql, (err, result) => {
    if (err) console.log("error");

    console.log(result);

    result.forEach((element) => {
      names.push(element.name);
    });

    res.send("<h1>Full Cycle</h1><br><br>" + names.join("<br>"));
  });
});

app.listen(port, () => {
  console.log("Rodando na porta " + port);
});

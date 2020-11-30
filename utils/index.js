const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    // Your port
    port: 3000,
    // username
    user: "root",
    // password
    password: "MiVida2130!!",
    database: "music_db"
  });
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    createPlaylist();
  });
  
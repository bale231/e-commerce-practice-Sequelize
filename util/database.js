// Richiama il modulo dotenv per caricare le variabili d'ambiente
const dotenv = require("dotenv");

// Richiama il modulo Sequelize per gestire il database
const Sequelize = require("sequelize");

// Carica le variabili d'ambiente
dotenv.config();

// Estrae i valori delle variabili d'ambiente
const databaseName = process.env.DB_DATABASE;
const databaseUser = process.env.DB_USERNAME;
const databasePass = process.env.DB_PASSWORD;
const databaseHost = process.env.DB_HOST;
const databasePort = process.env.DB_PORT;

// Crea un'istanza di Sequelize con i parametri specificati
const sequelize = new Sequelize(databaseName, databaseUser, databasePass, {
  host: databaseHost,
  port: databasePort,
  dialect: "mysql",
});

// Esporta l'istanza di Sequelize
module.exports = sequelize;


// Importare tutti i moduli richiesti
const path = require("path"); // Modulo per gestire i percorsi dei file
const express = require("express"); // Modulo per creare l'applicazione Express
const bodyparser = require("body-parser"); // Modulo per gestire il parsing del corpo della richiesta
const errorController = require("./controllers/error"); // Controller per gestire gli errori
const sequelize = require("./util/database"); // Oggetto Sequelize per la connessione al database
const Product = require("./models/product"); // Modello per il prodotto
const User = require("./models/user"); // Modello per l'utente
const Cart = require("./models/cart"); // Modello per il carrello
const CartItem = require("./models/cart-item"); // Modello per l'elemento del carrello
const Order = require("./models/order"); // Modello per l'ordine
const OrderItem = require("./models/order-item"); // Modello per l'elemento dell'ordine
const adminRoutes = require("./routes/admin"); // Routing per la gestione delle rotte dell'area amministrativa
const shopRoutes = require("./routes/shop"); // Routing per la gestione delle rotte dell'area shop
const dotenv = require("dotenv"); // Modulo per caricare le variabili d'ambiente

dotenv.config(); // Caricare le variabili d'ambiente

const app = express(); // Creare l'applicazione Express
const port = process.env.LOCAL_PORT || 3000; // Definire la porta su cui l'applicazione deve essere in ascolto

app.set("view engine", "ejs"); // Impostare il motore di rendering come EJS
app.set("views", "views"); // Impostare la directory dei file di visualizzazione come "views"

app.use(bodyparser.urlencoded({ extended: false })); // Abilitare il parsing del corpo della richiesta come URL codificato
app.use(express.static(path.join(__dirname, "public"))); // Definire la directory delle risorse statiche come "public"
app.use("/admin", adminRoutes); // Utilizzare il routing per l'area amministrativa
app.use(shopRoutes); // Utilizzare il routing per l'area shop
app.use(errorController.get404); // Utilizzare il controller per gestire gli errori 404
app.listen(port, () => { // Avviare l'applicazione sulla porta specifica
  console.log(`listening on port ${port}`); // Stampare nel terminale che l'applicazione è in ascolto sulla porta specificata
});
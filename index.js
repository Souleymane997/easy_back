const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");

admin.initializeApp();
const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.post("/send-delete-request", async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ message: "Email requis." });

  // Exemple : envoyer un email au support (ou loguer la demande)
  console.log(`Demande de suppression pour : ${email}`);

  // Tu peux ici envoyer un email, notifier une team, ou supprimer automatiquement

  return res.json({ message: "Votre demande a été enregistrée." });
});

exports.api = functions.https.onRequest(app);

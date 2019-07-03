import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp(functions.config().firebase, "imagens");

export const listarImagens = functions.https.onRequest(
  async (request, response) => {
    response.header("Content-Type", "application/json");
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Content-Type");

    const imagens = await admin
      .firestore()
      .collection("imagens")
      .get();
    const arrayImagens = imagens.docs.map(doc => {
      return { url: doc.data().url };
    });

    response.json(arrayImagens);
  }
);

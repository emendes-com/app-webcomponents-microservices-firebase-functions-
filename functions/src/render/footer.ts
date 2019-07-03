import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp(functions.config().firebase, "login");

export const renderFooter = functions.https.onRequest(
  async (request, response) => {
    console.log('body', request.body);
    console.log('idToken', request.body.idToken);
    const idToken = request.body.idToken;
    let decodedIdToken;
    try {
      decodedIdToken = await admin.auth().verifyIdToken(idToken);
    } catch (error) {
      response.status(400).send("idToken inválido");
    }
      if (decodedIdToken ) {
      const docSnapshot = await admin
        .firestore()
        .collection("usuarios")
        .doc(decodedIdToken.uid)
        .get();

      const usuario = docSnapshot.data() as any;
      const html = `
      <img src="${usuario.picture}" >
        <h1>Olá ${usuario.name}</h1>`;
      response.send(html);
    } else {
      response.status(400).send("Usuário inválido");
    }
  }
);

import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp(functions.config().firebase);

export const renderizarMenu = functions.https.onRequest(
  async (request, response) => {
    const menu = await admin
      .firestore()
      .collection("menu")
      .get();
    const arrLi = menu.docs.map(doc => {
      return `<li> ${doc.data().item}</li> `;
    });

    const html = `<h3>Menu</h3><ul>${arrLi.join("")}</ul>`;
    console.log("enviando menu ao client ");
    response.send(html);
  }
);

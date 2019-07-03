import * as functions from "firebase-functions";

export const renderizarTopo = functions.https.onRequest((request, response) => {
  const html = `
    <img src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png">
    <h2>Microsserviços no Firebase</h2>`;
  response.send(html);
});

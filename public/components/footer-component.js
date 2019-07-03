class AppFooter extends HTMLElement {
    async connectedCallback() {
        const thisFooter = this;
        document.addEventListener("DOMContentLoaded", async function () {
            const user = await firebase
                .auth()
                .signInWithEmailAndPassword("app@evlymn.dev", "12345678");
            if (user) {
                const token = await firebase.auth().currentUser.getIdToken();
                const xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        thisFooter.innerHTML = xhr.responseText;
                    }
                };
                const uspBody = new URLSearchParams();
                uspBody.append("idToken", token)
                xhr.open("POST", "/render-footer");
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
                xhr.send(uspBody);
            }
        });
    }
}
customElements.define("app-footer", AppFooter);
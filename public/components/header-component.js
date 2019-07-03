class AppHeader extends HTMLElement {
    async connectedCallback() {
        const header = this;
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                header.innerHTML = xhr.responseText;
            }
        }
        xhr.open("GET", "/render-topo", true);
        xhr.send();
    }
}
customElements.define("app-header", AppHeader);
class AppMenu extends HTMLElement {
    async connectedCallback() {
        const thisMenu = this;
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                thisMenu.innerHTML = xhr.responseText;
            }
        }
        xhr.open("GET", "/render-menu", true);
        xhr.send();
    }
}
customElements.define("app-menu", AppMenu);
class AppImagens extends HTMLElement {
    async connectedCallback() {
        const thisImagens = this;
        const xhr = new XMLHttpRequest();
        const divOuter = document.createElement('div');
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const imagens = JSON.parse(xhr.responseText);
                imagens.forEach(element => {
                    const span = document.createElement('span');
                    span.innerHTML = element.titulo;
                    const img = document.createElement('img');
                    img.src = element.url;
                    const div = document.createElement('div');
                    div.appendChild(img);

                    if (element.titulo) {
                        div.appendChild(span);
                    }
                    divOuter.appendChild(div)
                });
            }
            thisImagens.innerHTML = divOuter.outerHTML;
        };

        xhr.open('GET', '/imagens-listar', true);
        xhr.send();

    }
}
customElements.define("app-imagens", AppImagens);
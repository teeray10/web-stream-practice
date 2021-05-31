
customElements.define('index-element', class Index extends HTMLElement {
    constructor(){
        super();
        let container = document.createElement('div');
        container.setAttribute('class', 'container');
        
        let content = document.createElement('div');
        content.setAttribute('class', 'content');

        let addBtn = document.createElement('input');
        addBtn.setAttribute('type', 'submit');
        addBtn.setAttribute('value', 'add');
        addBtn.setAttribute('onclick', 'writeToDB()');

        let style = document.createElement('link');
        style.setAttribute('href', '../css/index.css');
        style.setAttribute('rel', 'stylesheet');

        let dbScript = document.createElement('script');
        dbScript.setAttribute('src', '../js/index-db.js');
        content.appendChild(dbScript);

        content.appendChild(addBtn);
        container.appendChild(content);
        container.appendChild(style);

        let shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(container);
    }
});
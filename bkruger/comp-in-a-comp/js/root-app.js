
customElements.define('root-app', class Root extends HTMLElement {
    constructor(){
        super();

        let container = document.createElement('div');
        container.setAttribute('class', 'container');

        let header = document.createElement('div');
        header.setAttribute('class', 'header');
        header.textContent="A_HEADER_HERE";

        let leftAside = document.createElement('div');
        leftAside.setAttribute('class', 'leftAside');
        leftAside.textContent="A_MONETISING_AD_HERE";

        let template = document.getElementById('template');
        let templateContent = template.content;
        let main = document.createElement('div');
        main.setAttribute('class', 'main');
        main.appendChild(templateContent.cloneNode(true));

        let rightAside = document.createElement('div');
        rightAside.setAttribute('class', 'rightAside');
        rightAside.textContent="A_MONETISING_AD_HERE";

        let footer = document.createElement('div');
        footer.setAttribute('class', 'footer');
        footer.textContent="A_FOOTER_HERE";

        let style = document.createElement('style');
        style.textContent = `
        
        .container {
            display: grid;
            grid-template-columns: 1fr 576px 1fr;
            grid-template-rows: 40px auto 30px;
            grid-template-areas:
                "header header header"
                "leftAside main rightAside"
                "leftAside footer footer";
        }

        .header {
            grid-area: header;
        }

        .leftAside {
            grid-area: leftAside;
        }

        .main {
            grid-area: main;
        }

        .rightAside {
            grid-area: rightAside;
        }

        .footer {
            grid-area: footer;
        }

        .container > :nth-child(odd){
            background-color: lightsalmon;
        } 

        .container > :nth-child(even){
            background-color: gold;
        } 
        `
        
        container.appendChild(header);
        container.appendChild(leftAside);
        container.appendChild(main);
        container.appendChild(rightAside);
        container.appendChild(footer);
        container.appendChild(style);
        let shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(container);
    }
});
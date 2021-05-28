
customElements.define('main-grid-cell', class Main extends HTMLElement {
    constructor(){
        super();

        let container = document.createElement('div');
        container.setAttribute('class', 'container');

        let email = document.createElement('input');
        email.setAttribute('class', 'emailInput');
        email.setAttribute('type', 'text');
        email.setAttribute('placeholder', 'Email');

        let password = document.createElement('input');
        password.setAttribute('class', 'passwordInput');
        password.setAttribute('type', 'password');
        password.setAttribute('placeholder', 'Password');

        let submitBtn = document.createElement('input');
        submitBtn.setAttribute('class', 'registerBtn');
        submitBtn.setAttribute('type', 'submit');
        submitBtn.setAttribute('value', 'Register');

        let style = document.createElement('style');
        style.textContent = `
            .container {
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .emailInput, .passwordInput{
                width: 50%;
            }

            .registerBtn {
                width: 25%;
                margin-left:25%; // RTL got switched?
            }
        `;

        container.appendChild(style);
        container.appendChild(email);
        container.appendChild(password);
        container.appendChild(submitBtn);
        let shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(container);
    }
});
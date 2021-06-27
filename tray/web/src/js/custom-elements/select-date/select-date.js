class SelectDate extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});
        const container = document.createElement('div');
        console.log(shadow.host); // output: <select-date>

        this.appendLabel(container);
        this.appendSelect(container);
        this.appendStylesheet(shadow);

        shadow.append(container);
    }

    appendLabel(container) {
        const label = document.createElement('label');
        label.innerText = 'Choose Date:';
        container.append(label);
    }

    appendSelect(container) {
        const select = document.createElement('select');
        this.appendOptions(select);
        container.append(select);
    }

    setDateToPreviousWednesday(currentDate) {
        console.log(currentDate.toDateString());
        const wednesday = 3;
        const currentDayOfMonth = currentDate.getDate();
        const currentDayOfWeek = currentDate.getDay();

        const daysSincePreviousWednesday = currentDayOfWeek - wednesday;

        
        if (daysSincePreviousWednesday < 0) {
            currentDate.setDate(currentDayOfMonth - (7 + daysSincePreviousWednesday))
        } else {
            currentDate.setDate(currentDayOfMonth - daysSincePreviousWednesday);
        }
        console.log(currentDate.toDateString());

        return currentDate;
    }

    appendOptions(select) {
        let currentDate = new Date();
        currentDate = this.setDateToPreviousWednesday(currentDate);
        for(let i = 0; i < 10; i++) {
            const option = document.createElement('option');
            option.setAttribute('value', currentDate);
            option.innerText = currentDate.toDateString();
            select.append(option);

            currentDate.setDate(currentDate.getDate() - 7);
            console.log(currentDate.toDateString);
        }
    }

    appendStylesheet(shadow) {
        const stylesheet = document.createElement('link');
        stylesheet.setAttribute('rel', 'stylesheet');
        stylesheet.setAttribute('href', '../js/custom-elements/select-date/select-date.css');

        shadow.append(stylesheet);
    }
}

customElements.define('select-date', SelectDate);
export default class RecentResultsTable extends HTMLElement {
    constructor() {
        super();

        this.getResults().then(results => {
            const shadow = this.attachShadow({mode: 'open'});

            this.appendStyle(shadow);
            this.appendTable(shadow, results);  
        })
    }

    appendTable(shadow, results) {
        console.log(results);
        // for(let dateOfResults of allResults.dates) {
        //     console.log(dateOfResults);
        //     const table = document.createElement('table');

        //     this.appendHeader(table, dateOfResults);
        //     this.appendBody(table, dateOfResults);

        //     shadow.append(table);
        // }
    }

    appendHeader(table, dateOfResults) {
        const header = document.createElement('thead');
        const row = document.createElement('tr');
        const heading = this.createHeading(dateOfResults);

        row.append(heading);
        header.append(row);
        table.append(header);
    }

    createHeading(dateOfResults) {
        const heading = document.createElement('th');
        heading.setAttribute('colspan', 6);
        heading.innerText = dateOfResults.getDateString();

        return heading;
}

    appendBody(table, dateOfResults) {
        const body = document.createElement('tbody');
        for (let result of dateOfResults.results) {
            const row = document.createElement('tr');
            for (let property in result) {
                const data = document.createElement('td');
                if (property === "team2Goals") {
                    this.insertDash(row);
                }
                data.innerText = result[property];
                row.append(data);
            }
            body.append(row);
        }
        table.append(body);
    }

    insertDash(row) {
        const dash = document.createElement('td');
        dash.innerText = '-';
        row.append(dash);
    }

    appendStyle(shadow) {
        const style = document.createElement('style');
        style.innerHTML = `
        table {
            border: 1px solid lightgray;
            border-collapse: collapse;
            width: 100%;
            text-align: left;
            background-color: whitesmoke;
            color: black;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            margin-bottom: 20px;
        }
        
        
        
        tr > td:first-child {
            width: 1%;
        }
        
        tr > td:nth-child(2) {
            font-weight: bold;
            text-align: right;
            width: 35%;
        }
        
        tr > td:nth-child(3) {
            text-align: right;
            width: 1%;
        }
        
        tr > td:nth-child(4) {
            margin: 0;
            padding: 0;
            width: 1%;
            text-align: center;
        }
        
        tr > td:nth-child(5) {
            text-align: left;
            width: 1%;
        }
        
        tr > td:nth-child(6) {
            font-weight: bold;
            text-align: left;
            width: 35%;
        }
        
        th, td {
            margin: 15px;
            padding: 15px;
        }
        
        td {
            border-top: 1px solid lightgray;
            border-bottom: 1px solid lightgray;
        }
        
        tr:last-child > td {
            border: 0;
        }`;

        shadow.append(style);
    }

    async getResults() {
        let results = await fetch("http://localhost:5000/results", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then(response => {
            return response.json();
        }).then(body => {
            return body;
        });

        return results;
    }
}


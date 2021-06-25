export default class LeaderboardTable extends HTMLElement {
    constructor() {
        super();

        this.getLeaderboardData().then((teams) => {
            let shadow = this.attachShadow({mode: 'open'});
            this.appendStyleSheet(shadow);
            this.appendTable(shadow, teams);
        });
    }

    appendStyleSheet(shadow) {
        const style = document.createElement('style');
        style.innerHTML = `
        table {
            border: 1px solid lightgray;
            border-spacing: 0;
            width: 100%;
            text-align: center;
            background-color: whitesmoke;
            color: black;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        
        }
        
        thead > tr {
            background-color: rgba(0, 0, 0, 0.116);
        }
        
        tr > td:nth-child(2) {
            text-align: left;
            padding-left: 10px;
            font-weight: bold;
        }
        
        tbody tr:hover {
            background-color: rgb(0, 0, 0, 0.04);
        }
        
        th, td {
            border-bottom: 1px solid lightgray;
            margin: 15px;
            padding: 15px;
        }
        
        tr:last-child > td {
            border: 0;
        }
        `;

        shadow.append(style);
    }

    appendTable(shadow, teams) {
        const table = document.createElement('table');

        this.appendHeader(table);
        this.appendBody(table, teams);

        shadow.append(table);
    }

    appendHeader(table) {
        const header = document.createElement('thead');
        const row = document.createElement('tr');
        const columnHeadings = [
            "#", "Team", "Played", "Won", "Drawn", "Lost", "GD", "Points"
        ];

        for (let i = 0; i < 8; i++) {
            const heading = document.createElement('th');
            heading.innerText = columnHeadings[i];
            row.appendChild(heading);
        }

        header.append(row);
        table.append(header);
    }

    appendBody(table, teams) {
        const body = document.createElement('tbody');
        console.log(teams);
        let position = 1;
        for (const team of teams) {
            const row = document.createElement('tr');
            for (const property in team) {
                const data = document.createElement('td');
                if (property === "_id") {
                    data.innerText = position;
                    position++;
                } else {
                    data.innerText = team[property];
                }
                row.appendChild(data);
            }
            body.appendChild(row);
        }
        table.appendChild(body);
    }

    async getLeaderboardData() {
        let teams = await fetch("http://localhost:5000/leaderboard", {
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

        return teams;
    }
}
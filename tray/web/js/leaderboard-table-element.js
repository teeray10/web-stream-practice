import { teams } from "./dummyData.js";

class LeaderboardTable extends HTMLElement {
  constructor() {
    super();

    let shadow = this.attachShadow({mode: "open"});
    /* CREATING ELEMENT USING HTML
        shadow.innerHTML = `
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Team</th>
                        <th scope="col">Played</th>
                        <th scope="col">Won</th>
                        <th scope="col">Drawn</th>
                        <th scope="col">Lost</th>
                        <th scope="col">GD</th>
                        <th scope="col">Points</th>
                    </tr>
            </table>
        `;*/

    /* CREATING ELEMENT USING JS */
    this.columnHeadings = [
      "#", "Team", "Played", "Won", "Drawn", "Lost", "GD", "Points"
    ];
    const stylesheet = document.createElement("link");
    stylesheet.setAttribute("rel", "stylesheet");
    stylesheet.setAttribute("href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css");
    stylesheet.setAttribute("integrity", "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm");
    stylesheet.setAttribute("crossorigin", "anonymous");

    shadow.append(stylesheet);
  }

  appendTable(shadow, teams) {
    const table = document.createElement("table");

    this.appendHeader(table);
    this.appendBody(table, teams);

    shadow.append(table);
  }

  appendHeader(table) {
    const header = document.createElement("thead");
    const row = document.createElement("tr");
    const columnHeadings = [
      "#", "Team", "Played", "Won", "Drawn", "Lost", "GD", "Points"
    ];

    for(const team of teams) {
      const bodyRow = document.createElement("tr");
      for (const property in team) {
        console.log(property);
        const td = document.createElement("td");
        td.innerText = team[property];

        if(property === "teamName") {
          td.setAttribute("class", "team-name");
        }
                
        bodyRow.appendChild(td);
      }
      tbody.appendChild(bodyRow);
    }

    header.append(row);
    table.append(header);
  }

  appendBody(table, teams) {
    const body = document.createElement("tbody");
    console.log(teams);
    let position = 1;
    for (const team of teams) {
      const row = document.createElement("tr");
      for (const property in team) {
        const data = document.createElement("td");
        data.innerText = team[property];
        shadow.append(table);
      }
    }
  }

  async getLeaderboardData() {
    return fetch("http://localhost:5000/leaderboard", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        return data;
      });
  }
}

customElements.define("leaderboard-table", LeaderboardTable);
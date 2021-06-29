import { teams } from './dummyData.js';
import { Result } from './models/Result.js';

const submitBtn = document.getElementById('submit-result');
submitBtn.addEventListener('click', submitResult);

function submitResult() {
    const { result, team1, team2 } = createResultObject();
    postResult(result);
    // updateLeaderboard(result);

    // const winnerOutput = document.getElementById('show-winner');
    // if (checkTeamsExist(team1, team2)) {
        // const winner = checkGoals(team1, team2);
        // calculatePoints(winner);
        // winnerOutput.innerHTML = winner;
    // } else alert("One or more of these teams do not exist.");

}

function createResultObject() {
    const date = new Date(document.querySelector('select-date').shadowRoot.querySelector('select').value);
    const time = document.getElementById('time').value;
    const team1 = document.getElementById('team-1-name').value;
    const team2 = document.getElementById('team-2-name').value;
    const team1Goals = document.getElementById('team-1-goals-scored').value;
    const team2Goals = document.getElementById('team-2-goals-scored').value;

    return {
        result: new Result(date, time, team1, team1Goals, team2Goals, team2),
        team1: team1,
        team2: team2
    };
}

async function postResult(result) {
    await fetch("http://localhost:5000/submit-result", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(result)
    });
}
const { client, dbName } = require('./dbConnection');

let winner;
let loser;

async function updateTeams(result) {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('teams');
        const teams = collection.find();
        findWinner(result);
    
        teams.forEach((team) => {
            if (team.name.localeCompare(result.team1) === 0 || team.name.localeCompare(result.team2) === 0) {
                console.log(team);
                team.played++;
                team.goalDifference += calculateGoalDifference(team.name, result);
                if (team?.name.localeCompare(winner) === 0) {
                    console.log("winner");
                    team.won++;
                    team.points += 3;
                } else if (team?.name.localeCompare(loser) === 0) {
                    console.log("loser");
                    team.lost++;
                } else {
                    console.log("draw");
                    team.drawn++;
                    team.points += 1;
                }
                collection.replaceOne({_id: team._id}, team, {upsert: true});
            }  
        });
        
    } catch (err) {
        console.log(err.stack);
    }
}

function findWinner(result) {
    if (result.team1Goals === result.team2Goals) {
        winner = "";
        loser= "";
    } else if (result.team1Goals > result.team2Goals) {
        winner = result.team1;
        loser = result.team2;
    } else {
        winner = result.team2;
        loser = result.team1;
    }
}

function calculateGoalDifference(team, result) {
    return (team.localeCompare(result.team1) === 0) ? result.team1Goals - result.team2Goals : result.team2Goals - result.team1Goals;
}

exports.updateTeams = updateTeams;
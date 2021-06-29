import { Leaderboard } from "./leaderboard.js";

export var teams = [
  {
    position: 1,
    teamName: "Skop n Dop",
    played: 17,
    won: 22,
    drawn: 0,
    lost: 0,
    goalDifference: 100,
    points: 66
  },
  {
    position: 2,
    teamName: "Sparticans",
    played: 17,
    won: 15,
    drawn: 1,
    lost: 1,
    goalDifference: 10,
    points: 45
  },
  {
    position: 18,
    teamName: "Celtics",
    played: 17,
    won: 5,
    drawn: 2,
    lost: 10,
    goalDifference: -30,
    points: 15
  },
  {
    position: 22,
    teamName: "United",
    played: 17,
    won: 1,
    drawn: 6,
    lost: 10,
    goalDifference: -50,
    points: 3
  },
];
    
var leaderboard = new Leaderboard(teams[0]);

console.log(leaderboard.teamName);

export var results = [
  {
    date: new Date(2021, 4, 19, 18, 30),
    time: "18:30",
    team1Name: "Skop n Dop",
    team1Goals: 10,
    team2Goals: 2,
    team2Name: "Sparticans"
  },
  {
    date: new Date(2021, 3, 19, 19, 15),
    time: "19:15",
    team1Name: "A",
    team1Goals: 2,
    team2Goals: 2,
    team2Name: "B"
  }
];

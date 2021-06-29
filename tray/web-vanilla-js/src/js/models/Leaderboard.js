export class Leaderboard {
    constructor(team, played, won, drawn, lost, goalDifference, points) {
        this.team = team;
        this.played = played;
        this.won = won;
        this.drawn = drawn;
        this.lost = lost;
        this.goalDifference = goalDifference;
        this.points = points;
    }
}
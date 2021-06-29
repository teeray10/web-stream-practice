class AllResults {
    constructor(dates) {
        this.dates = dates; //array of resultdates
    }
}

class ResultDate {
    constructor(dateObject, results) {
        this.date = dateObject; //date object
        this.results = results;
    }

    getDateString() {
        let dayOfWeek = this.date.toLocaleString("default", {weekday: "long"});
        let day = this.date.getDate();
        let month = this.date.toLocaleString("default", {month: "short"});
        let year = this.date.getFullYear();
        return dayOfWeek + " " + month + " " + day + " " + year;
    }

    // getDayOfWeek(date) {
    //     var dayOfWeek = '';
    //     switch(date.getDay()) {
    //         case 0:
    //         dayOfWeek = 'Sunday';
    //         break;
    //         case 1:
    //         dayOfWeek = 'Monday';
    //         break;
    //         case 2:
    //         dayOfWeek = 'Tuesday';
    //         break;
    //         case 3:
    //         dayOfWeek = 'Wednesday';
    //         break;
    //         case 4:
    //         dayOfWeek = 'Thursday';
    //         break;
    //         case 5:
    //         dayOfWeek = 'Friday';
    //         break;
    //         case 6:
    //         dayOfWeek = 'Saturday';
    //         break;
    //         default:
    //     }
    //     return dayOfWeek;
    // }
}

class Result {
    constructor(date, time, team1Name, team1Goals, team2Goals, team2) {
        this.date = date;
        this.time = time;
        this.team1 = team1Name;
        this.team1Goals = team1Goals;
        this.team2Goals = team2Goals;
        this.team2Name = team2;
    }
}



let result1 = new Result("19:15", "A", 2, 2, "B");
let result2 = new Result("20:00", "Skop n Dop", 7, 3, "Celtics");
let resultSet1 = new Array(result1, result2);

let result3 = new Result("19:15", "United", 4, 9, "FC");
let result4 = new Result("20:00", "Skop n Dop", 9, 1, "Sparticans");
let resultSet2 = new Array(result3, result4);

let result5 = new Result("19:15", "United", 4, 9, "FC");
let result6 = new Result("20:00", "Skop n Dop", 9, 1, "Spar");
let resultSet3 = new Array(result5, result6);


let dateSet = new Array(
    new ResultDate(new Date(2021, 4, 26), resultSet1),
    new ResultDate(new Date(2021, 4, 19), resultSet2),
    new ResultDate(new Date(2021, 4, 12), resultSet3)
);

export var allResults = new AllResults(dateSet);

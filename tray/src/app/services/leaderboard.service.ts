import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Team } from "../models/Team";

@Injectable({
  providedIn: "root",
})
export class LeaderboardService {
	public teams$ = new Subject<Team[]>();
	private url: string = "http://localhost:5000/leaderboard";

	constructor(private httpClient: HttpClient) {}

	getCurrentStandings(): Observable<Team[]> {
	  console.log("Standings Service Call");
	  return this.httpClient.get<Team[]>(this.url);
	}
}

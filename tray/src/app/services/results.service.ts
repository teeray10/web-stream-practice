import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Result } from "../models/Result";

@Injectable({
  providedIn: "root",
})
export class ResultsService {
  private url = "http://localhost:5000/results";

  constructor(private httpClient: HttpClient) { }

  getResults(): Observable<Result[]> {
    console.log("Service call");
    
    return this.httpClient.get<Result[]>(this.url);
  }
}

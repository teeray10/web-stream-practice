import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Result } from "../models/Result";

@Injectable({
  providedIn: "root",
})
export class AddResultService {
  private url: string = "http://localhost:5000/add-result";

  constructor(private httpClient: HttpClient) {}

  addResult(result: Result): Observable<Result> {
    console.log("here");
    return this.httpClient.post<Result>(this.url, result)
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }
}

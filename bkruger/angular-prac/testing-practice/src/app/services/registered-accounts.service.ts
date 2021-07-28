import { Observable, of } from "rxjs";
import { RegisteredAccount } from "../models/registered-account.model";

export class RegisteredAccountsService {

  getRegisteredAccounts(): Observable<RegisteredAccount[]> {
    return of([])
  }
}
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RegisteredAccount } from '../models/registered-account.model';

@Injectable({
  providedIn: 'root'
})
export class RegisteredAccountsRepository {
  getRegisteredAccounts(): Observable<RegisteredAccount[]>{
    return of([]);
  }

}

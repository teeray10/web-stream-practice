// import { TestBed } from '@angular/core/testing';

import { RegisteredAccount } from '../models/registered-account.model';
import { RegisteredAccountsService } from './registered-accounts.service';
import { RegisteredAccountsRepository } from './registered-accounts-repository.service';

describe('RegisteredAccountsService', () => {
  let service: RegisteredAccountsService;
  let repo: RegisteredAccountsRepository;

  beforeEach(() => {
    repo = new RegisteredAccountsRepository();
    service = new RegisteredAccountsService(repo);
  });

  it('should exist', () => {
    expect(repo).toBeTruthy();
  });

  it('should return a list of registered accounts asynchronously', (done: DoneFn) => {
    service.getRegisteredAccounts().subscribe((accounts: RegisteredAccount[]) => {
      expect(accounts).toBeTruthy();
      done();
    })
  });
});

import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private msalService: MsalService
  ) { }

  async getAccessToken(): Promise<string> {
    const account = this.msalService.instance.getAllAccounts()[0];
    const result = await this.msalService
      .acquireTokenSilent({
        account: account ?? undefined,
        scopes: ['user.read']
      })
      .toPromise()
      .catch((reason) => {
        throwError(`Failed to get token ${JSON.stringify(reason, null, 2)}`,)
      })
    
    if (result){
      return result.accessToken;
    }
    return '';
  }
}

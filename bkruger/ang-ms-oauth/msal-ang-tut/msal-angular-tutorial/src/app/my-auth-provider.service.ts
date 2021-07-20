import { MsalService } from '@azure/msal-angular';
import { AuthenticationProvider } from '@microsoft/microsoft-graph-client';
import { throwError } from 'rxjs';
import { OAuthSettings } from './oauth';

export class MyAuthenticationProvider implements AuthenticationProvider{
  constructor(
    private msalService: MsalService,
  ) { }
  
  async getAccessToken(): Promise<string> {
    const account = this.msalService.instance.getAllAccounts()[0];
    const result = await this.msalService
      .acquireTokenSilent({
        account: account ?? undefined,
        scopes: OAuthSettings.scopes
      })
      .toPromise()
      .catch((reason) => {
        throwError(`Failed to get token ${JSON.stringify(reason, null, 2)}`,)
      });

    if (result) {
      return result.accessToken;
    }
    // Couldn't get a token
    return '';
  };
}
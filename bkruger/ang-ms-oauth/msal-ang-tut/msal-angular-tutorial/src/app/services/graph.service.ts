import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { Client } from '@microsoft/microsoft-graph-client';
import { MyAuthenticationProvider } from '../my-auth-provider.service';

@Injectable({
  providedIn: 'root'
})
export class GraphService {
  public graphClient: Client;

  constructor(
    private msalService: MsalService
  ) { 
    this.graphClient = Client.initWithMiddleware({
      authProvider: new MyAuthenticationProvider(this.msalService)
    })
  }

}

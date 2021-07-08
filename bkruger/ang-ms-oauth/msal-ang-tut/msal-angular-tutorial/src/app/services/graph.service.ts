import { Injectable } from '@angular/core';
import { Client } from '@microsoft/microsoft-graph-client';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GraphService {
  public graphClient: Client;

  constructor(
    private authService: AuthService
  ) { 
    this.graphClient = Client.init({
      authProvider: async (done) => {
        const token = await this.authService.getAccessToken()
          .catch(reason => {
            done(reason, null)
          })

        if (token){
          done(null, token)
        } else {
          done("Could not get access token", null)
        }
      }
    })
  }


}

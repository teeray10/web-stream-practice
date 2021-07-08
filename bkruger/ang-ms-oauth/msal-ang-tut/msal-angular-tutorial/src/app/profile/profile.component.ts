import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GraphService } from '../services/graph.service';

const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';

type ProfileType = {
  givenName?: string,
  surname?: string,
  userPrincipalName?: string,
  id?: string
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile!: ProfileType;
  graphHttpProfile!: ProfileType;

  constructor(
    private http: HttpClient,
    private graphHttp: GraphService
  ) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(){
    this.http.get(GRAPH_ENDPOINT)
      .subscribe((profile) => {
        this.profile = profile
      });
  }

  async graphHttpGetProfile(){
    try{
      const graphHttpProfile = await this.graphHttp.graphClient.api("/me").get();
      console.log("==================================================================");
      console.log(graphHttpProfile);
      console.log("==================================================================");
    } catch (error) {
      throw console.error();
      
    }
  }
}

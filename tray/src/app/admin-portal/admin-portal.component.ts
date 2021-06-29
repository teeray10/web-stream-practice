import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-admin-portal",
  templateUrl: "./admin-portal.component.html",
  styleUrls: ["./admin-portal.component.scss"],
})
export class AdminPortalComponent implements OnInit {
	leagues: string[] = ["Wednesday", "Thursday", "Friday"];

	constructor() {}

	ngOnInit(): void {
		
	}
}

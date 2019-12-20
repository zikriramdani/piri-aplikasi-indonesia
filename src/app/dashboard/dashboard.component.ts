import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  	selector: 'app-dashboard',
  	templateUrl: './dashboard.component.html',
  	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	isLoading = true;
	dataDummy: Array<object>;

  	constructor(
		private dashboardService: DashboardService
	) { }

  	ngOnInit() {
		this.fetchDashboard();
	}

	fetchDashboard() {
		this.dashboardService.get().subscribe(response => {
			this.dataDummy = response;
			this.isLoading = false;
		});
	}
}

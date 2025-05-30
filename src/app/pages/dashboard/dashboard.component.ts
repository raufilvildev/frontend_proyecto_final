import { Component } from '@angular/core';
import { DashboardSidebarComponent } from "./dashboard-sidebar/dashboard-sidebar.component";
import { DashboardMainComponent } from "./dashboard-main/dashboard-main.component";
import { DashboardTaskDetailsComponent } from "./dashboard-task-details/dashboard-task-details.component";
import { AngularSplitModule } from 'angular-split';


@Component({
  selector: 'app-dashboard',
  imports: [DashboardSidebarComponent, DashboardMainComponent, DashboardTaskDetailsComponent,AngularSplitModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {}

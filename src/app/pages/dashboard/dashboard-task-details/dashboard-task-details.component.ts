import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-task-details',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-task-details.component.html',
  styleUrl: './dashboard-task-details.component.css'
})
export class DashboardTaskDetailsComponent {
  @Input() task: any = null;
  @Input() subtask: any = null;
}

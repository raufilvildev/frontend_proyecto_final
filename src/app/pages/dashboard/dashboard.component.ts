import { Component, signal } from '@angular/core';
import { DashboardSidebarComponent } from "./dashboard-sidebar/dashboard-sidebar.component";
import { DashboardMainComponent } from "./dashboard-main/dashboard-main.component";
import { DashboardTaskDetailsComponent } from "./dashboard-task-details/dashboard-task-details.component";
import { AngularSplitModule } from 'angular-split';

import TASKS_DATA from './task_data.json';

@Component({
  selector: 'app-dashboard',
  imports: [DashboardSidebarComponent, DashboardMainComponent, DashboardTaskDetailsComponent, AngularSplitModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  // Signals principales para detectar cuales estan activos y cambios
  lists = signal<any[]>(TASKS_DATA); // Usar el JSON directamente
  selectedList = signal<any | null>(TASKS_DATA[0] ?? null);
  selectedTask = signal<any | null>(null);
  selectedSubtask = signal<any | null>(null);

  // Para cuando lo seleccionamos (no me queda claro si subtask es necesario o lo ponemos como otra tarea)
  selectList(list: any) {
    this.selectedList.set(list);
    this.selectedTask.set(null);
    this.selectedSubtask.set(null);
  }

  selectTask(task: any) {
    this.selectedTask.set(task);
    this.selectedSubtask.set(null);
  }

  selectSubtask(subtask: any, parentTask: any) {
    this.selectedTask.set(parentTask);
    this.selectedSubtask.set(subtask);
  }
}

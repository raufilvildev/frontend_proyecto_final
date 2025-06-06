import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskItemComponent } from "../../../shared/components/task/task-item/task-item.component";

@Component({
  selector: 'app-dashboard-main',
  imports: [ TaskItemComponent],
  templateUrl: './dashboard-main.component.html',
  styleUrl: './dashboard-main.component.css'
})
export class DashboardMainComponent {
  @Input() tasks: any[] = [];
  @Input() selectedTask: any = null;
  @Input() selectedSubtask: any = null;
  @Output() taskSelected = new EventEmitter<any>();
  @Output() subtaskSelected = new EventEmitter<{subtask: any, parentTask: any}>();

  selectTask(task: any) {
    this.taskSelected.emit(task);
  }

  selectSubtask(subtask: any, parentTask: any) {
    this.subtaskSelected.emit({subtask, parentTask});
  }
}

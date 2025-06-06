import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [MatCheckboxModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() tasks: any[] = [];
  @Input() selectedTask: any = null;
  @Input() selectedSubtask: any = null;
  @Output() taskSelected = new EventEmitter<any>();
  @Output() subtaskSelected = new EventEmitter<{subtask: any, parentTask: any}>();

  selectTask(task: any) {
    this.taskSelected.emit(task);
  }

  selectSubtask(subtask: any, parentTask: any) {
    this.subtaskSelected.emit({ subtask, parentTask });
  }

  allSubtasksCompleted(task: any): boolean {
    return Array.isArray(task.subtasks) && task.subtasks.length > 0 && task.subtasks.every((st: any) => st.is_completed);
  }
}

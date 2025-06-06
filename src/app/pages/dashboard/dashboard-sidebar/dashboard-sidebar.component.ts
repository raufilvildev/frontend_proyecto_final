import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-sidebar.component.html',
  styleUrl: './dashboard-sidebar.component.css'
})
export class DashboardSidebarComponent {
  @Input() lists: any[] = [];
  @Input() selectedList: any = null;
  @Output() listSelected = new EventEmitter<any>();

  selectList(list: any) {
    this.listSelected.emit(list);
  }
}

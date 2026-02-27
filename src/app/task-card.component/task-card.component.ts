import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-task-card.component',
  imports: [],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
})
export class TaskCardComponent {
  @Input() taskData: any;

  @Output() deleteRequest = new EventEmitter<number>();

  deleteButton () {
    this.deleteRequest.emit(this.taskData.id);
  }

}

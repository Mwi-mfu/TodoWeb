import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-task-card.component',
  imports: [
    FormsModule
  ],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
})
export class TaskCardComponent {
  @Input() taskData: any;

  constructor (private storage: StorageService) {

  }
  
  @Output() deleteRequest = new EventEmitter<number>();

  deleteButton () {
    this.deleteRequest.emit(this.taskData.id);
    this.storage.deleteTask(this.taskData.id);

  }

  updateDb() {
    this.storage.updateStatus(this.taskData.id);
  }

}

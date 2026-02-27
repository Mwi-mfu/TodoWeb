import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { TaskCardComponent } from '../task-card.component/task-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-view.component',
  imports: [CommonModule, TaskCardComponent],
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.scss',
})
export class TaskViewComponent {

  public taskList: any[];

  constructor (private storage: StorageService) {
    this.taskList = storage.getTodosInWorkingForm();
  }

  addTask() {
    //get input and clean it
    const nameHtmlElement = document.getElementById('taskToAdd') as HTMLInputElement;
    const name = nameHtmlElement.value.trim();

    if (name) {
      this.storage.addToList(name);
    }
  }

  handleDelete(idToDelete: any) {
    this.taskList = this.taskList.filter(task => task.id !== idToDelete);
    this.storage.deleteTask(idToDelete);
  }

  trackByTaskId(index: number, item: any): number {
    return item.id;
  }
}

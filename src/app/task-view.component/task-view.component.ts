import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { TaskCardComponent } from '../task-card.component/task-card.component';

@Component({
  selector: 'app-task-view.component',
  imports: [],
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.scss',
})
export class TaskViewComponent {

  private taskList: any[];

  constructor (private storage: StorageService) {
    this.taskList = storage.getTodosInWorkingForm();
  }

  addTask() {
    //get input and clean it
    const nameHtmlElement = document.getElementById('taskToAdd') as HTMLInputElement;
    const name = nameHtmlElement.value.trim();

    this.storage.addToList(name);
  }

  handleDelete(idToDelete: number) {
    this.taskList = this.taskList.filter(task => task.id !== idToDelete);
  }
}

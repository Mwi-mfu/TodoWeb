import { Injectable } from '@angular/core';
import { nanoid } from 'nanoid';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private STORAGE_KEY = 'my-todo-list';
  //Array of objects of items to work with
  public todosInWorkingForm: any[] = [];
  static counter: number = 0;
  private taskId: string = nanoid(3);

  constructor() {
    this.loadFromStorage();
  }

  public loadFromStorage () {
    /* 
      -Loads from storage
      -Stored like a big spreadsheet
      -STORAGE_KEY is the key and data is stored in an array of objects
    */
    const saved = localStorage.getItem(this.STORAGE_KEY);
   
    //parse converts string to objects
    this.todosInWorkingForm = saved ? JSON.parse(saved) : [];
  }

  public getTodosInWorkingForm () {
    return this.todosInWorkingForm;
  }

  public addToList (entry: string) {
    //stringify converts objects to string
    //entry is an object
    //task id is set here
    let taskToBeAdd = {
      id: StorageService.counter,
      name: entry, 
      isComplete: false
    };
    StorageService.counter++;
    this.todosInWorkingForm.push(taskToBeAdd);

    // converts to JSON style string
    const todosInStorageForm = JSON.stringify(this.todosInWorkingForm);
    localStorage.setItem(this.STORAGE_KEY, todosInStorageForm);
  }

  public updateEntry (id: string, change: string) {
    const indexOfInterest = this.todosInWorkingForm.findIndex(task => task.id === id)
    if (!(indexOfInterest < 0)) {
      this.todosInWorkingForm[indexOfInterest].name = change;
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.todosInWorkingForm));
    }
  }

  public updateStatus (id: string) {
    const indexOfInterest = this.todosInWorkingForm.findIndex(task => task.id === id)
    if (indexOfInterest >= 0) {
      this.todosInWorkingForm[indexOfInterest].isComplete = !this.todosInWorkingForm[indexOfInterest].isComplete;
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.todosInWorkingForm));
    }
  }

  public deleteTask (id: string) {
    const indexOfInterest = this.todosInWorkingForm.findIndex(task => task.id === id)
    if (!(indexOfInterest < 0)) {
      this.todosInWorkingForm.splice(indexOfInterest, 1);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.todosInWorkingForm));
    }
  }
}

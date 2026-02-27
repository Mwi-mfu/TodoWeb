import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskViewComponent } from './task-view.component/task-view.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskViewComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ToDo-Frontend');
}

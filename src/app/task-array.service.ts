import { Injectable } from '@angular/core';
import { Task } from './Task';

@Injectable({
  providedIn: 'root'
})
export class TaskArrayService {

  tasks: Array<Task> = new Array() ;
  
  
  constructor() {

    for(let i=1;i<=10;i++)
    {
      this.tasks.push(new Task(i.toString(),'Description',new Date(),new Date()));
    }
    
   }
  pushATask(task: Task) {
    this.tasks.push(task);
  }
  showAllTasks(): Task[] {
    return this.tasks;
  }
}

import { Injectable } from '@angular/core';
import { Task } from './Task';

@Injectable({
  providedIn: 'root'
})
export class TaskArrayService {

  tasks: Array<Task> = new Array() ;
  
  
  constructor() {
      for(let i=1; i<=10 ; i++) {
          let t = new Task(i.toString() , "Desc" , new Date() , new Date());
          this.tasks.push(t);
      }
    
  }
  pushATask(task: Task) {
    this.tasks.push(task);
  }
  showAllTasks(): Task[] {
    return this.tasks;
  }
}

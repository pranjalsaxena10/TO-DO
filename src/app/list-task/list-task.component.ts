import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TaskArrayService } from '../task-array.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  selectedTaskArray : Array<Task> = new Array() ;

  tasks=this.taskArray.showAllTasks();
  
  deleteAllFlag : Boolean=false;
  constructor(private taskArray: TaskArrayService, private router: Router) { }
  selectTask(task: Task){
  
    if(this.checkIfPresent(task)===true){
      this.deleteTask(task);
    }
    else{
      this.selectedTaskArray.push(task);
    }

    if(this.selectedTaskArray.length>0) {
        this.deleteAllFlag=true;
    }
    else {
        this.deleteAllFlag=false;
    }
    console.log("Number of selections: "+this.selectedTaskArray.length);
  }

  checkIfPresent(task:Task): Boolean
  {
    let flag = false;
    for(let i=0;i<this.selectedTaskArray.length;i++)
    {
      if(this.selectedTaskArray[i].title===task.title){
        flag = true;
        break;
      }
    }
    return flag;
  }

  deleteTask(task:Task){
    let deleteIndex:number;
    let tasks = this.selectedTaskArray;
    for(let i = 0;i< tasks.length;i++) {
      if(tasks[i].title===task.title) {
        deleteIndex = i;
        break;
      }
    }
    tasks.splice(deleteIndex,1);
    // console.log(this.router.url);
  }

  onDeleteAll() {
      let selectedTasks = this.selectedTaskArray;
      for(let i = 0 ; i < selectedTasks.length ; i++) {
        let deleteIndex: number;
        for(let j = 0 ; j < this.tasks.length ; j++) {
            if(selectedTasks[i].title === this.tasks[j].title) {
                deleteIndex=j;
                break;
            }
        }
        this.tasks.splice(deleteIndex,1);
      }

      this.selectedTaskArray.splice(0,this.selectedTaskArray.length);
      if(this.selectedTaskArray.length ===0) {
        this.deleteAllFlag=false;
      }
      console.log(this.tasks);
  }

  dropped(){
    console.log("in dropped!");
    this.onDeleteAll();
  }

  dragStart(){
    console.log("in drag");
  }
  ngOnInit() {
      
  }

}

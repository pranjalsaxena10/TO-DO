import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { Util } from '../util';
import { Router , ActivatedRoute } from '@angular/router';
import { TaskArrayService } from '../task-array.service';
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

    // newTask: Task = new Task('' , '' , '10/01/2018' , '');
    title: String;
    desc: String;
    startDate: Date;
    endDate: Date;
    t: Task;
    resultFlag: Boolean = false;
    sub: any;
    id: number;

    constructor(private taskArray: TaskArrayService , private router: Router , private route: ActivatedRoute ) { }

    ngOnInit() {
        // console.log(this.router.url);
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
        this.resultFlag=true;
        let newTask = this.taskArray.showAllTasks()[this.id];
        if(this.id !== undefined && this.id !== null && newTask !== undefined && newTask !== null)
        {
            
            this.title = newTask.title;
            this.desc = newTask.desc;
            this.startDate = newTask.startDate;
            this.endDate = newTask.endDate;
        }

    }

    onSave() {
        if(this.isValidTitle(this.title) && this.isValidDesc(this.desc) && 
        this.isValidStartDate(this.startDate) && this.isValidEndDate(this.endDate,this.startDate)) {

            let utilObject = new Util();
            this.resultFlag=true;
            this.t = new Task(this.title , this.desc , this.startDate , this.endDate);
            console.log(this.t); 
            
            var index = this.taskArray.showAllTasks().indexOf(this.t);
            if(index === -1) {
                this.taskArray.pushATask(this.t);
            }
            alert('Data Saved');
            console.log(this.taskArray.showAllTasks());
            this.router.navigate(['/showATask']);
            
            // this.taskCreateService.submitTask(this.t)
            // .subscribe(
            //     data => {
            //         this.resultFlag=true;
            //         console.log(data);
            //     },
            //     error => console.error("Error!", error)
            // );
        }
        else {
            if(this.endDate < this.startDate) {
                alert("End Date should not be before Start Date");
            }
        }
         
    }
    
    isValidTitle(title: String): Boolean {
        if(title !== undefined && title !== null) {
            return true;
        }
        else
            return false;
    }

    isValidDesc(desc: String): Boolean {
        if(desc !== undefined && desc !== null) {
            return true;
        }
        else
            return false;
    }
    isValidStartDate(startDate: Date): Boolean {
        if(startDate !== undefined && startDate !== null) {
            return true;
        }
        else
            return false;
    }
    isValidEndDate(endDate: Date, startDate: Date): Boolean {
        if(endDate !== undefined && endDate !== null && endDate >= startDate) {
            return true;
        }
        else
            return false;
    }

}

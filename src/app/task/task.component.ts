import {Component} from "@angular/core";
import {Itask} from "../interfaces/task.interface";
import {Icategory} from "../interfaces/task-category.interface";
import {TaskService} from "../services/task.service";

@Component({
  selector: 'app-task',
  templateUrl:'task.component.html',
  styleUrls: ['task.component.css']
})

export class TaskComponent{
  tasks: Itask[] = [];
  categories: Icategory[] = [];

  constructor(private TaskService: TaskService) {
  }

  ngOnInit(){
    this.TaskService.taskList().subscribe(value => {
      this.tasks = value.data.tasks;
      this.categories = value.data.categories;
    })
  }

}

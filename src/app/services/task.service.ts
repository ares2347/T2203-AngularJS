import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {IDataJSON} from "../interfaces/task-category.interface";

@Injectable({
  providedIn: 'root'
})

export class TaskService{
  constructor(private httpClient: HttpClient) {
  }

  taskList(){
    return this.httpClient.get<IDataJSON>('http://localhost:4200/assets/task.json')
  }
}

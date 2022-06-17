import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {ICategory, IDataJSON} from "./category.interface";

@Injectable({
  providedIn: 'root'
})

export class MailService{
  constructor(private httpClient: HttpClient) {
  }
  mailList(){
    return this.httpClient.get<IDataJSON>('assets/data.json');
  }
}

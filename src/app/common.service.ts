import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  basicUrl = environment.BASIC_URL;

  constructor(private http: HttpClient) {

   }
  employeeList():Observable<any> {
    const url = this.basicUrl + '/employees';
    return this.http.get<any>(url);
  }
  addEmployee() {
    const url = this.basicUrl + '/employees';
    return this.http.get<any>(url);
  }
  deleteEmployee(id:number) {
    const url = this.basicUrl + '/employees/'+ id;
    return this.http.delete<any>(url);
  }
}

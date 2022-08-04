import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnDestroy{
  subs:Subscription = new Subscription();
  employeesList:any;
  constructor(private service:CommonService) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployees() {
    this.subs = this.service.employeeList().subscribe(res => {
      this.employeesList = res;
    }, error=> {
      console.log(error);
      
    });
  }
  btnEVent($e:any) {
    console.log($e);
    if ($e.action == 'Delete') {
      this.deleteEmp($e?.data?.id);
    } else if($e.action == 'Add') {
      alert('Add functionality coming soon!');
    }
  }
  deleteEmp(id:number) {
    this.subs = this.service.deleteEmployee(id).subscribe(res => {
      this.getEmployees();
    });
  }
  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }

}

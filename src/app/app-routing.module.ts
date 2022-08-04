import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentChangeDetectComponent } from './change-detect/parent-change-detect/parent-change-detect.component';
import { EmployeeComponent } from './employee/employee.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {path:'', component:EmployeeComponent},
  {path:'employees', component:EmployeeComponent},
  {path:'lazy-comp', component:ParentComponent},
  {path:'change-detect', component:ParentChangeDetectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

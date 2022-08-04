import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddressComponent } from './address/address.component';
import { AdditionPipe } from './pipes/AdditionPipe';
import { ActionButtonComponent } from './action-button/action-button.component';
import { basicHighlightDirective } from './directive/text-highlight';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './change-detect/child/child.component';
import { ParentChangeDetectComponent } from './change-detect/parent-change-detect/parent-change-detect.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddressComponent,
    AdditionPipe,
    ActionButtonComponent,
    basicHighlightDirective,
    ParentComponent,
    ChildComponent,
    ParentChangeDetectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

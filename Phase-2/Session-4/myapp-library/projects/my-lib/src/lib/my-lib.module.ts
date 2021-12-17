import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { Comp1Component } from './comp1/comp1.component';



@NgModule({
  declarations: [
    MyLibComponent,
    Comp1Component
  ],
  imports: [
  ],
  exports: [
    MyLibComponent,
    Comp1Component
  ]
})
export class MyLibModule { }

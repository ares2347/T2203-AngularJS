import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StudentComponent} from "./student/student.component";
import {ClassroomComponent} from "./classroom/classroom.component";
import {ProductsComponent} from "./products/products.component";
import {ProductComponent} from "./product/product.component";
import {WeatherComponent} from "./weather/weather.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {Assignment1Component} from "./assignment1/assignment1.component";

const appRoutes: Routes = [
  {
    path: '', component: ClassroomComponent
  },
  {
    path: 'san-pham', component: ProductsComponent
  },
  {
    path: 'thoi-tiet', component: WeatherComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ClassroomComponent,
    ProductsComponent,ProductComponent,
    WeatherComponent,
    Assignment1Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

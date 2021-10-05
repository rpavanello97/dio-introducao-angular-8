import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { ChangeMonetaryValue } from './pipe/changeMonetaryValue.pipe';
import { ChangeMonetarySimbol } from './pipe/changeMonetarySimbol.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error-404/error-404.component';
import { CourseInfoComponent } from './courses/course-info.component';



@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    ChangeMonetaryValue,
    ChangeMonetarySimbol,
    NavBarComponent,
    Error404Component,
    CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent //Route with parameter
      },
      {
        path: '', redirectTo: 'courses', pathMatch: 'full' //Raiz route
      },
      {
        path: '**', component: Error404Component //When angular do not find any destiny
      }         
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

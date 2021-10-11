import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { Error404Component } from './error-404/error-404.component';
import { CourseModule } from './courses/course-module';
import { NavBarModule } from './core/component/nav-bar.module';




@NgModule({
  declarations: [
    AppComponent,       
    Error404Component
  ],
  imports: [ 
    BrowserModule, 
    CourseModule,  
    FormsModule,
    HttpClientModule,
    NavBarModule,
    RouterModule.forRoot([      
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

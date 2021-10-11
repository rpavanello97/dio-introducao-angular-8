import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ChangeMonetarySimbol } from "../pipe/changeMonetarySimbol.pipe";
import { ChangeMonetaryValue } from "../pipe/changeMonetaryValue.pipe";
import { ReplacePipe } from "../pipe/replace.pipe";
import { StarComponent } from "../star/star.component";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
        StarComponent,
        ReplacePipe,
        ChangeMonetaryValue,
        ChangeMonetarySimbol,
    ],
    imports: [
        CommonModule,
        FormsModule,                
        RouterModule.forChild([
            {
                path: 'courses', component: CourseListComponent
            },
            {
                path: 'courses/info/:id', component: CourseInfoComponent //Route with parameter
            },
        ])
    ]
})



export class CourseModule {

}
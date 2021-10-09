import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']

})

export class CourseListComponent implements OnInit {

    filteredCourses: Course[] = [];
    _courses: Course[] = [];
    _filterBy: string;

    constructor(private courseService: CourseService) { } //getting information from the class CoursesService.

    ngOnInit(): void {
        this.retrieveAll();
    }

    retrieveAll(): void {
        this.courseService.retrieveAll().subscribe({
            next: courses => {
                this._courses = courses;
                this.filteredCourses = this._courses;
            },
            error: err => console.log('Error' + err)
        })
    }

    delete(id: Number): void {
        this.courseService.deleteById(id).subscribe({
            next: () => {
                console.log('Success deleted!')
                this.retrieveAll();
            },
            error: err => console.log('Error' + err)
        })
    }

    set filter(value: string) {
        this._filterBy = value;
        this.filteredCourses = this._courses.filter((course: Course) => {
            return course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1
        })
    }

    get filter() {
        return this._filterBy;
    }

}
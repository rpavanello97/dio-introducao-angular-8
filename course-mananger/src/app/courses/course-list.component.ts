import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html' 
})

export class CourseListComponent implements OnInit {

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: "Angular: Forms",
                imageUrl: './assets/images/forms.png',
                price: 99.99,
                code: "XPS-8796",
                duration: 120,
                rating: 5,
                releaseDate: "December, 2, 2021"
            },
            {
                id: 2,
                name: "Angular: HTTP",
                imageUrl: './assets/images/http.png',
                price: 45.99,
                code: "LKL-1094",
                duration: 80,
                rating: 3.5,
                releaseDate: "Octuber, 15, 2021"
            },
            {
                id: 3,
                name: "Angular: Routes",
                imageUrl: '',
                price: 89.99,
                code: "LKL-1084",
                duration: 90,
                rating: 3,
                releaseDate: "April, 15, 2021"
            },
            {
                id: 4,
                name: "Angular: SPA",
                imageUrl: '',
                price: 35.49,
                code: "LKL-9999",
                duration: 120,
                rating: 4,
                releaseDate: "May, 05, 2021"
            }
        ]
    }

}
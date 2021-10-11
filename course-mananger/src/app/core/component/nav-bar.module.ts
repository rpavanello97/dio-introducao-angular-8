import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./error-404/error-404.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@NgModule({
    declarations: [
        NavBarComponent
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '**', component: Error404Component //When angular do not find any destiny
            }
        ])
    ],
    exports: [
        NavBarComponent
    ]
})
export class NavBarModule {

}
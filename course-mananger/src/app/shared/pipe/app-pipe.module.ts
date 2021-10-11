import { NgModule } from "@angular/core";
import { ChangeMonetarySimbol } from "./changeMonetarySimbol.pipe";
import { ChangeMonetaryValue } from "./changeMonetaryValue.pipe";
import { ReplacePipe } from "./replace.pipe";

@NgModule({
    declarations:[
        ChangeMonetarySimbol,
        ChangeMonetaryValue,
        ReplacePipe
    ],
    exports: [
        ChangeMonetarySimbol,
        ChangeMonetaryValue,
        ReplacePipe
    ]
})

export class AppPipeModule {

}
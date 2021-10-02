import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'changeMonetaryValue'
})

export class ChangeMonetaryValue implements PipeTransform{

        transform(value: number, oldChar:string, valueToReplace:string) {
            var newValue = value.toString(); 

            return newValue.replace(oldChar, valueToReplace);
        }
}
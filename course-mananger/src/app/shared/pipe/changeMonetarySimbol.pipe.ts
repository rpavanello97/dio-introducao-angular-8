import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name: 'changeMonetarySimbol'
})

export class ChangeMonetarySimbol implements PipeTransform {

    transform(value: string, valueToReplace: string) {
        return value = valueToReplace+value
    }
}
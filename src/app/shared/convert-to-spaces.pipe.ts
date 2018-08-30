import { Pipe, PipeTransform } from "@angular/core";
import { transformAll } from "@angular/compiler/src/render3/r3_ast";

@Pipe({
    name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform{
    transform(value: string, character: string): string{
        return value.replace(character, ' ');
    }
}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addition'
})
export class AdditionPipe implements PipeTransform{
    transform(num1:number, num2:number, type?:string) : number {
        let finalNumber:number = 0
        switch(type) {
            case 'subs':
                finalNumber = num1 - num2;
                break;
            case 'mul':
                finalNumber = num1 * num2;
                break;
            default:
                finalNumber = num1 + num2;
        } 
        return finalNumber;
    }
}
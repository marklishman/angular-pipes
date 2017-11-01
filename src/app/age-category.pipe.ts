import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class AgeCategoryPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    let category = '';

    if (value < 16) {
      category = 'child';
    } else if (value < 18) {
      category = 'junior';
    } else if (value < 60) {
      category = 'adult';
    } else {
      category = 'senior';
    }
    return category;
  }

}

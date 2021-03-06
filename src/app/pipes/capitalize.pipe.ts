import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: any): string {
    if (!value) {
      return '';
    }
    if (!value.includes(' ')) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
    return value
      .split(' ')
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}

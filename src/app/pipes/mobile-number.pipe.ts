import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mobileNumber',
})
export class MobileNumberPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }
    return /^(\+[0-9])/.test(value)
      ? value
          .toString()
          .replace(/(\+\d{2})(\d{3})(\d{3})(\d{3})/, '$1 ($2) $3 $4')
      : value.toString().replace(/(\d{4})(\d{3})(\d{3})/, '($1) $2 $3');
  }
}

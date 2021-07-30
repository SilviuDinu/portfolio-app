import { Pipe, PipeTransform } from '@angular/core';
import { TokenService } from '@services/token.service';
import { isObject } from 'lodash';

@Pipe({
  name: 'token',
})
export class TokenPipe implements PipeTransform {
  constructor(private tokenService: TokenService) {}

  transform(value: any, ..._args: any[]): any {
    let args = _args;

    if (isObject(value)) {
      args = [(value as any).params];
      value = (value as any).token;
    }

    let text = this.tokenService.getText(value);
    return text || '';
  }
}

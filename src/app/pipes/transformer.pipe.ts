import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformer',
})
export class TransformerPipe implements PipeTransform {

  transform(value: string, name:any, token:any): unknown {
    if (value.search('-')) {
      return value.replace('-', ' ');
    } else return value;
  }

}

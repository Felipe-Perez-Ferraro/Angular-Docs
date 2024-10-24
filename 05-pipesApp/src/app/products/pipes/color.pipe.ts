import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

@Pipe({
  name: 'color',
})
export class ColorPipe implements PipeTransform {
  transform(color: Color): string {
    switch (color) {
      case Color.BLACK:
        return 'negro';
      case Color.BLUE:
        return 'azul';
      case Color.BROWN:
        return 'marrón';
      case Color.RED:
        return 'rojo';
      default:
        return '';
    }
  }
}

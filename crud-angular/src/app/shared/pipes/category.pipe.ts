import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {

    switch (value) {
      case 'Front-end': return 'code';
      case 'Cloud': return 'cloud';
      case 'Back-end': return 'devices';
      case 'Mobile': return 'smartphone';
      case 'Database': return 'database';
      case 'DevOps': return 'deployed code';
      case 'Programming': return 'terminal';
    }

    return 'code';

  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any, limit: number) {
    const result:number[] = [];
    console.log('data-',value)
    console.log(limit);
    
    for (let i of value){
      if (i%limit === 0){
        result.push(i)
      }   
    }
    return result;
  }

}

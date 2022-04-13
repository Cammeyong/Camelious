import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(value: any[], filterString: string, name: string): any[] {
    
  //   const resultArry = [];
  //   if (value.length === 0 || filterString === '' || name === '') {
  //   return value;
  // }

  // for (const item of value) {
  //   if (item[name] === filterString) {
  //     resultArry.push(item);
  //   }
  // }
  // return resultArry;
  // }

  transform(value : any[], filterString: any, propName: any) : any[] { //value here is the array being passed in this case it is for the products array, filterString is the name of what we want to filer example"sandals" with a type of string and propname is what properties we want to filter out "example by title or name etc"
    const result: any = [] //a value that will hold the resulst we want to return
    if(!value || filterString === '' || propName === '') { //logic is if these are empty return value as is aka do nothing
      return value;
    }
    value.forEach((a:any)=>{ // the logic is for each value it will allow teh user to use both lowercase and upper case when they enter the property nama
      if(a[propName].trim().toLowerCase().includes(filterString.toLowerCase())) {
    result.push(a); //then it will push that result to the 'a' and return it
      }
    });
    return result;
  }
}

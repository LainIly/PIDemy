import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  standalone: true
})
export class SearchFilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();
    
    return items.filter(item =>
      item.keywords.toLowerCase().includes(searchText) ||
      item.name.toLowerCase().includes(searchText)
    );
  }

}

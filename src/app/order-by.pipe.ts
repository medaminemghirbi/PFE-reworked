
import { orderBy } from 'lodash';

import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "orderBy"
 })
 export class OrderByPipe implements PipeTransform {
  transform(array: any, sortBy: string, order?: string): any[] {
   const sortOrder = order ? order : 'asc'; // setting default ascending order
     return orderBy(array, [sortBy], 'asc');
   }
 }
   
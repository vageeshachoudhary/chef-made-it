import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { } from 'rxjs/operators';
import * as Data from '../../subscriptions/personal-chefs';

@Injectable({
	providedIn: 'root'
})
export class MenuDataService {
	private personalChefs: any = Data;

	constructor() { }

	getPersonalChefs(): Observable<any>{
		return of(this.personalChefs);
	}
}

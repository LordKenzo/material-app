import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  // departmentList: AngularFireList<any>;
  departmentList: Observable<Department[]>;
  constructor(private firebase: AngularFireDatabase) {
    this.departmentList = this.firebase.list('departments').snapshotChanges()
      .pipe(
        tap(list => console.log(list)),
        map(list => list.map((item: any) => ({
          id: item.key,
          ...item.payload.val(),
          }))
        )
      );
  }

}

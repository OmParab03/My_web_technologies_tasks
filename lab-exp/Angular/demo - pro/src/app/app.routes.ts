import { Routes } from '@angular/router';
import { Admin } from './admin/admin';
import { StudentList } from './student-list/student-list';

export const routes: Routes = [
    {path :'admin' , component:Admin},
    {path :'student-list' ,component : StudentList}
   
];

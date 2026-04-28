import { Routes } from '@angular/router';
import { Home } from '../home/home';
import { StudentList } from '../student-list/student-list';


export const routes: Routes = [
    {path : 'home' , component:Home},
    {path : 'student-list' , component : StudentList},
    
];

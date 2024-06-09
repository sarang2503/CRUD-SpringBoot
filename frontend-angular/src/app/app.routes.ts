import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';

export const routes: Routes = [
    {path:'header',component:HeaderComponent},
  {path:'',component:HomeComponent},
  {path:'student',component:StudentComponent},
  {path:'student_list',component:StudentListComponent}

];

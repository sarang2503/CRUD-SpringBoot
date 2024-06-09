import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { student } from '@app/student.model';
import { StudentService } from '@app/student.service';
import {MatTableModule} from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { error } from 'console';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [MatTableModule,RouterLink,MatIcon],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {


datasource: any;
  constructor(private studserv:StudentService,private router:Router){
    this.getStudList();

  
  }
  ngOnInit(): void {
  }
  datas : student[]=[]
  curentcount:number=this.datas.length
  displayedColumns: string[] = ['id', 'name', 'gender', 'phone', 'email', 'department','edit','delete'];
  getStudList():void{
    this.studserv.getStudents().subscribe(
      {
        next:(res:student[])=>{
          this.datas=res
          this.studserv.k=res.length
        },
        error:(err:HttpErrorResponse)=>{
          console.log(err)

        }
      }
    );

  }

  delthis(vari:number):void {
      this.studserv.deletestud(vari).subscribe({
        next : (res: any)=>{
            console.log(res)
          
        },
        error : (err : HttpErrorResponse)=>{
          console.log(err)
        }
      });
      window.location.reload();

  }
  
  
  editthis(studid: number) {

      
      this.router.navigate(['/student',{studid:studid}])

  }

}

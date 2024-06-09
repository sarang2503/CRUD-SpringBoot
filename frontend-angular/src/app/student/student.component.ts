import { Component, Inject, Input, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { student } from '@app/student.model';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
 
@Component({
  selector: 'app-student',
  standalone: true,
  imports: [MatFormFieldModule,MatSelectModule,MatInputModule,MatIconModule,MatRadioModule,MatButtonModule,RouterLink,FormsModule,HttpClientModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit{
  count!: number;
  resetdata(sf: any) {
    this.stud.name="",
    this.stud.email="",
    this.stud.phone="",
    this.stud.gender="",
    this.stud.department=""     // Reset the model
  sf.resetForm()
}
  constructor(public studserv:StudentService,private activeroute:ActivatedRoute,private router:Router,private rt:ActivatedRoute, private snackBar: MatSnackBar,public http:HttpClientModule){    
  }
tocreate:boolean=true;
stud: student={
    id: 0,
    name: "",
    email: "",
    phone: "",
    gender:"",
    department:""
  } 


  ngOnInit(): void {
    const id=Number(this.activeroute.snapshot.paramMap.get('studid'));
    if(id>0){
      this.stud.id=id
      this.studserv.getbyId(id).subscribe({
      
        next:(data:student) =>{
          this.stud=data;
          this.tocreate=false;

        },
        error:(err:HttpErrorResponse)=>{
          console.error('Error fetching student', err);
        }
      
      
      }
      );
      }
  }
  readonly departments:string[] =["Computer Science","marathi","history","englis","mathematics"];



  savestudform(studentForm:NgForm):void{
    console.log(this.tocreate)
    if(this.tocreate){
      this.studserv.saveStudent(this.stud).subscribe({
        next:(res:student)=>{
          
          studentForm.resetForm()
          this.router.navigate(['/student_list']);
  
        },
        error:(err:HttpErrorResponse)=>{
          console.log(err)
        }
      });
    }
    else{
      this.studserv.updateStud(this.stud).subscribe({
        next:(res:student)=>{
          studentForm.resetForm()
          this.router.navigate(['/student_list']);
  
        },
        error:(err:HttpErrorResponse)=>{
          console.log(err)
        }
      });

    }
    

  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { student } from './student.model';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClientModule :HttpClient) { 
    
  }
  k:number=0
  count: number = 0; // Class property to store the number

  public api=''

  public saveStudent(stud:student) :Observable<student>{
    return this.httpClientModule.post<student>('http://localhost:9090/students',stud)
  }
  public getStudents():Observable<student[]>{
    return this.httpClientModule.get<student[]>('http://localhost:9090/students')
  }

  public deletestud(id: number): Observable<any> {
    return this.httpClientModule.delete(`http://localhost:9090/students/${id}`);
  }
  public getbyId(id:number):Observable<student>{
      return this.httpClientModule.get<student>(`http://localhost:9090/students/${id}`)
  }
  public updateStud(stud:student):Observable<student>{
    return this.httpClientModule.put<student>('http://localhost:9090/students',stud)
  }







  getCount(): number {
    return this.count;
  }

  setCount(value: number): void {
    this.count = value;
  }
}

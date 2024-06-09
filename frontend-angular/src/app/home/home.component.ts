import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterLink } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  
  
  
  ngOnInit(): void {
  }
  

}

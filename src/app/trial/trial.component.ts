import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.css']
})
export class TrialComponent implements OnInit {

  constructor() { }

  color = ['red','green','blue','yellow'];

  ngOnInit(): void {
  }

}

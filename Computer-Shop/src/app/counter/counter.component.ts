import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  stopped = false
  counter = 0
  intervalId: any
  
  ngOnInit() {
    this.intervalId = setInterval(() => {this.counter++}, 1000)
  }
  
  stopTimer() {
    clearInterval(this.intervalId)
    this.stopped = true
  }
}

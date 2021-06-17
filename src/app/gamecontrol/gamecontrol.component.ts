import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.counter + 1);
      this.counter++;
    } , 1000)
  }

  onPausedGame() {
   clearInterval(this.interval);
 }}

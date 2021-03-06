import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Test Server', content: 'Just a Test!'}];
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintrData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintrData.serverName,
      content: blueprintrData.serverContent
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = "Changed!";
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }

  onIntervalFired(counterNumber: number) {
    console.log(counterNumber)
    if (counterNumber % 2 === 0) {
      this.evenNumbers.push(counterNumber);
    } else {
      this.oddNumbers.push(counterNumber);
    }
  }
 
}

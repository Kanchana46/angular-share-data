import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {

  languages = []
  sub: Subscription

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.sub = this.sharedService.send_data.subscribe(
      data => {
        console.log(data)
        this.languages = data
      }
    )
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe()
    }
  }

}

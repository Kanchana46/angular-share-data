import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {

  languages = ['Java', 'Python', 'JavaScript', 'Go']

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

  sendData() {
    this.sharedService.send_data.next(this.languages)
  }

}

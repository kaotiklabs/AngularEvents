import { Component, OnInit, Input} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.css']
})
export class MenuTopComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}

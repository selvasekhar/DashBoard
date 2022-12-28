import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  nodes = [
    {
      id: 1,
      name: 'Current Assets',
      children: [
        { id: 2, name: 'Bank Accounts' },
        { id: 3, name: 'Deposits' }
      ]
    },
    {
      id: 4,
      name: 'Fixed Assets',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [
            { id: 7, name: 'subsub' }
          ]
        }
      ]
    }
  ];
  options = {};
}

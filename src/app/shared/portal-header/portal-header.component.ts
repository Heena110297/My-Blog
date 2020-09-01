import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portal-header',
  templateUrl: './portal-header.component.html',
  styleUrls: ['./portal-header.component.css']
})
export class PortalHeaderComponent implements OnInit {
  pageTitle = 'NAGP-PRACTICE-PORTAL';
  username = 'Heena';
  constructor() { }

  ngOnInit(): void {
  }

}

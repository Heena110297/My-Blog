import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.css']
})
export class ErrorHandlerComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  goBack(): void {
      this.route.navigate(['/dashboard']);
}
}

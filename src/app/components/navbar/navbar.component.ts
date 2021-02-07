import { Component, OnInit, Inject } from '@angular/core';

//Auth0
import { AuthService } from '@auth0/auth0-angular'

import { DOCUMENT } from '@angular/common'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(@Inject(DOCUMENT) public document: Document,
              public auth: AuthService) { }

  ngOnInit(): void {
  }

}

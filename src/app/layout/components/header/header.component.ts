import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output('toggleSidebar') toggleSidebar = new EventEmitter()

  currentUser: User;
  
  constructor(public router: Router,private authService: AuthService) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }
    ngOnInit(){

    }

    sideMenuToggle(event){
        event.preventDefault();
        this.toggleSidebar.emit(); 
    }
    onLoggedout() {
      this.authService.logout();
      this.router.navigate(['/login']);
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { SearchService } from '../services/search.service';
import { ConstantsService } from '../services/constants.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  @ViewChild("sidenav",{static:false}) public sidenav;
    public screenWidth:number;


    public constructor(private router: Router,
      private activatedRoute: ActivatedRoute,
      private authService: AuthService,
      private userService:UserService,
      private searchService:SearchService,
      private constantsService: ConstantsService){
        this.screenWidth = window.innerWidth;

        window.onresize = () =>{
            this.screenWidth = window.innerWidth;
        }
    }

    sidebarToggle(){
       this.sidenav.toggle();
    }
    ngOnInit() {
      console.log("LayoutComponent",this.router.url);
      this.searchService.getAllSkills();
      const currentUser = this.authService.currentUserValue;
        if (currentUser && currentUser.roles === this.constantsService.ROLES.MENTOR) {
          this.router.navigate(['mentor']);
        }
        if (currentUser && currentUser.roles === this.constantsService.ROLES.USER) {
          this.router.navigate(['user']);
        }
    }
}

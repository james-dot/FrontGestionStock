import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../../authentication/shared/service/app.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //afficher sidebar oû mettre disparu
    @Input()
    showSidebar:boolean;
    @Output()
    showSideBarChange: EventEmitter<boolean> =new EventEmitter<boolean>();

  constructor(private appService:AppService,private router:Router) { }

  ngOnInit(): void {
  }
  //afficher sidebar oû mettre disparu
  afficherSideBar(){
    this.showSidebar= !this.showSidebar;
    this.showSideBarChange.emit(this.showSidebar);
  }

  logout(){
    this.appService.logout(()=>{
      this.router.navigateByUrl('/login');
    });
  }

}

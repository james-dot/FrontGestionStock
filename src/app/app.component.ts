import {Component,OnInit} from '@angular/core';
import {AppService} from './authentication/shared/service/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //afficher sidebar oû mettre disparu
    showHideSidebar: boolean =false;
    
  constructor(private appService: AppService,
              private router: Router){ }

  ngOnInit(){
        if(!this.appService.authenticated){
          this.router.navigate(['/login']);
        }else{
          this.router.navigate(['/home']);
        }
  }

  onShowSideBarChange(showHideSidebar){
       this.showHideSidebar= showHideSidebar;
    }

  
}

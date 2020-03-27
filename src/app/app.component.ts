import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  //afficher sidebar oû mettre disparu
  showHideSidebar: boolean =false;
  onShowSideBarChange(showHideSidebar){
      this.showHideSidebar= showHideSidebar;
  }
}

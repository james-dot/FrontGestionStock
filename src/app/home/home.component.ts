import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //afficher sidebar oû mettre disparu
  showHideSidebar: boolean =false;
  onShowSideBarChange(showHideSidebar){
      this.showHideSidebar= showHideSidebar;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

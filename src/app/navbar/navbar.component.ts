import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }
  //afficher sidebar oû mettre disparu
  afficherSideBar(){
    this.showSidebar= !this.showSidebar;
    this.showSideBarChange.emit(this.showSidebar);
  }

}

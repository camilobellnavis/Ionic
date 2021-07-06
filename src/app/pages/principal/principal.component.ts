import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, MenuController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent implements OnInit {

  constructor(public menucontroler: MenuController) { }

  ngOnInit() {}

  openMenu(){
    this.menucontroler.toggle('menu');
  }

}

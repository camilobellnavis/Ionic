import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PrincipalComponent } from './principal/principal.component';
import { RouterModule } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { InfocuentaComponent } from './infocuenta/infocuenta.component';


@NgModule({
  declarations: [PrincipalComponent,PerfilComponent,InfocuentaComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    FormsModule
  ]
})
export class HomePageModule {}

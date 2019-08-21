import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonComponent } from './navbar/components/button/button.component';
import { LinkComponent } from './navbar/components/link/link.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [NavbarComponent, ButtonComponent, LinkComponent, FooterComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent,
    ButtonComponent,
    LinkComponent,
    FooterComponent
  ]
})
export class SharedModule { }

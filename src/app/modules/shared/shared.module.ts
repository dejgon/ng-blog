import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonComponent } from './navbar/components/button/button.component';
import { LinkComponent } from './navbar/components/link/link.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [NavbarComponent, ButtonComponent, LinkComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    ButtonComponent,
    LinkComponent,
    FooterComponent
  ]
})
export class SharedModule { }

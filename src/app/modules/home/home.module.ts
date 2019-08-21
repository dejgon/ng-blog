import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { PostComponent } from './components/post/post.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [MainComponent, PostComponent, ContactComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MainComponent
  ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './modules/home/main/main.component';
import { ContactComponent } from './modules/home/contact/contact.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { UsersComponent } from './components/users/users.component';
import { GuiElementsComponent } from './components/gui-elements/gui-elements.component';
import { LogicBasedComponent } from './components/logic-based/logic-based.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { AnimationComponent } from './components/animation/animation.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'gui-elements',
    component: GuiElementsComponent
  },
  {
    path: 'logic-based',
    component: LogicBasedComponent
  },
  {
    path: 'pipes',
    component: PipesComponent
  },
  {
    path: 'animation',
    component: AnimationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

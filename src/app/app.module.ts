import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShowdateService } from './services/showdate/showdate.service';
import { UserdataService } from './services/userdata/userdata.service';
import { UsersComponent } from './components/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { GuiElementsComponent } from './components/gui-elements/gui-elements.component';
import { LogicBasedComponent } from './components/logic-based/logic-based.component';
import { ChangetextDirective } from './directives/changetext/changetext.directive';
import { PipesComponent } from './components/pipes/pipes.component';
import { SqrtPipe } from './app.sqrt';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule, MatMenuModule, MatSidenavModule,
  MatDatepickerModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { AnimationComponent } from './components/animation/animation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    UsersComponent,
    GuiElementsComponent,
    LogicBasedComponent,
    ChangetextDirective,
    PipesComponent,
    SqrtPipe,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ScrollDispatchModule,
    DragDropModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    BrowserAnimationsModule
  ],
  providers: [ShowdateService, UserdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

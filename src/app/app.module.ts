import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TLDRComponent } from './components/tldr/tldr.component';
import { DetailsComponent } from './components/details/details.component';
import { BriefComponent } from './components/brief/brief.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/shared/matierial/matierial.module';
import { environment } from 'src/environments/environment';
import { TransitionGroupComponent, TransitionGroupItemDirective } from './directives/transition-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    TLDRComponent,
    DetailsComponent,
    BriefComponent,
    TransitionGroupComponent,
    TransitionGroupItemDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Initialize Firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

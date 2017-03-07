import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/*
Component partial
*/
import { AppComponent }  from './app.component';
import { HeaderComponent } from './Header/header.component';
import { NavigationComponent } from './Navigation/navigation.component';
import { MainContentComponent } from './MainContent/content.component';
import { SocialComponent } from './Social/social.component';
import { FoooterComponent } from './Footer/footer.component';

@NgModule({

  imports: [
    BrowserModule
  ],

  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    MainContentComponent,
    SocialComponent,
    FoooterComponent
  ],

  providers: [
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }

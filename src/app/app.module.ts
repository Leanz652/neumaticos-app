import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { SharedModule } from './shared/shared.module';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

@NgModule({
  declarations: [AppComponent, ContactUsComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

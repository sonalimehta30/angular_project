import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ImageDivComponent } from './components/image-div/image-div.component';
import { CartComponent } from './components/cart/cart.component';
import { FilterDivComponent } from './components/filter-div/filter-div.component';
import { BannerComponent } from './components/banner/banner.component';
import { ImagesAreaComponent } from './components/images-area/images-area.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImageDivComponent,
    CartComponent,
    FilterDivComponent,
    BannerComponent,
    ImagesAreaComponent,
    UserProfileComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

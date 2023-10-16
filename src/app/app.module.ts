import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayerComponent } from './admin/layer/layer.component';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
   
  ],
  imports: [
    // RouterModule,
    BrowserModule,
    AppRoutingModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

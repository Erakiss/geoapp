import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular'; 
import { AppComponent } from './app.component';

// Importation des composants
import { MapComponent } from './map/map.component';

// Importation des services
import { PostService } from './post.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [MapComponent],
  imports: [BrowserModule,IonicModule.forRoot(),AppRoutingModule,AppComponent],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
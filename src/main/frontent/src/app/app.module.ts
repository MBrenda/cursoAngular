import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaksAddComponent } from './tasks/taks-add/taks-add.component';
import { TaksListComponent } from './tasks/taks-list/taks-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaksAddComponent,
    TaksListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

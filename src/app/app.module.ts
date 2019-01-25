import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DndModule } from '../../node_modules/ngx-drag-drop';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DndDropEvent } from '../../node_modules/ngx-drag-drop';
import { CardComponent } from './list-task/card/card.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { HomeComponent } from './home/home.component';
import { ShowTaskComponent } from './show-task/show-task.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CreateTaskComponent,
    ListTaskComponent,
    HomeComponent,
    ShowTaskComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    DndModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

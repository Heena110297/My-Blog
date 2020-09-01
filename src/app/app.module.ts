import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {AngularMaterialModule} from './shared/angular-material.module';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsComponent } from './posts/posts.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PostComponent } from './posts/post/post.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TabulatedPostComponent } from './tabulated-post/tabulated-post.component';
import { PrecautionsService} from './services/precautions.service';
import { PrecautionsComponent } from './precautions/precautions.component';
import { AddEditPrecautionsComponent } from './precautions/add-edit-precautions/add-edit-precautions.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    DashboardComponent,
    TabulatedPostComponent,
    PrecautionsComponent,
    AddEditPrecautionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    HttpClientInMemoryWebApiModule.forRoot(PrecautionsService, {
      dataEncapsulation: false,
      passThruUnknownUrl: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularMaterialModule} from './angular-material.module';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { PostsComponent } from './posts/posts.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PostComponent } from './posts/post/post.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TabulatedPostComponent } from './tabulated-post/tabulated-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostsComponent,
    PostComponent,
    DashboardComponent,
    TabulatedPostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

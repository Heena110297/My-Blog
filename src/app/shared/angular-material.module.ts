import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PortalFooterComponent } from './portal-footer/portal-footer.component';
import { CommonModule } from '@angular/common';
import { PortalHeaderComponent } from './portal-header/portal-header.component';

@NgModule({
declarations: [PortalFooterComponent, PortalHeaderComponent],
imports:[
CommonModule,
MatTabsModule,
MatFormFieldModule,
MatInputModule,
MatTableModule,
MatButtonModule,
MatGridListModule,
MatCardModule,
MatIconModule,
MatDialogModule,
MatToolbarModule
],
exports: [
CommonModule,
MatTabsModule,
MatFormFieldModule,
MatInputModule,
MatTableModule,
MatButtonModule,
MatGridListModule,
MatCardModule,
MatIconModule,
MatDialogModule,
MatToolbarModule,
PortalFooterComponent,
PortalHeaderComponent
],
providers: []
})

export class AngularMaterialModule{}

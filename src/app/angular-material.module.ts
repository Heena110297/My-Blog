import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

@NgModule({
declarations: [],
exports: [
MatTabsModule,
MatFormFieldModule,
MatInputModule,
MatTableModule,
MatButtonModule,
MatGridListModule,
MatCardModule
],
providers: []
})

export class AngularMaterialModule{}

import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
declarations: [],
exports: [
MatTabsModule,
MatFormFieldModule,
MatInputModule,
MatButtonModule,
MatGridListModule
],
providers: []
})

export class AngularMaterialModule{}

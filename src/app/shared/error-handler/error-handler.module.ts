import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularMaterialModule } from '../angular-material.module';
import { ErrorHandlerComponent } from './error-handler.component';

@NgModule({
  declarations: [ErrorHandlerComponent],
  imports: [CommonModule, AngularMaterialModule],
  exports: [
    ErrorHandlerComponent,
    AngularMaterialModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ErrorHandlerModule {
  constructor(){
    console.log('ErrorHandlerModule Loaded');
  }
}

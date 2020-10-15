import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SharedDirectives} from './directives';
import {SharedComponents} from './components';

@NgModule({
  declarations: [SharedDirectives, SharedComponents],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, SharedDirectives]
})
export class SharedModule {
}
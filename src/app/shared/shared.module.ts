import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {SharedDirectives} from './directives';
import {SharedComponents} from './components';

@NgModule({
  declarations: [SharedDirectives, SharedComponents],
  imports: [CommonModule, FormsModule],
  exports: [CommonModule, FormsModule, SharedDirectives]
})
export class SharedModule {
}
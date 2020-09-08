import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {SharedDirectives} from './directives';

@NgModule({
  declarations: [SharedDirectives],
  imports: [CommonModule, FormsModule],
  exports: [CommonModule, FormsModule, SharedDirectives]
})
export class SharedModule {
}
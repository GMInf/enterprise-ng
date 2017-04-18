import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SohoComponentsModule } from '@infor/sohoxi-angular';

import { ContextualActionPanelDemoComponent } from './contextual-action-panel.demo';

import { ContextualActionPanelComponent } from './contextual-action-panel.component';


@NgModule({
  declarations: [
    ContextualActionPanelComponent,
    ContextualActionPanelDemoComponent
  ],
  exports: [
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SohoComponentsModule
  ],
  providers: [
  ],
  entryComponents: [
    ContextualActionPanelComponent,
  ],
})
export class ContextualActionPanelDemoModule {}

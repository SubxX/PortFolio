import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatTooltipModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule
} from '@angular/material';

const materials = [
  MatTooltipModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    materials
  ]
})
export class MaterialModule { }

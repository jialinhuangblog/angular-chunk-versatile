import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [MatButtonModule, MatSlideToggleModule, MatInputModule, MatCardModule],
  exports: [MatButtonModule, MatSlideToggleModule, MatInputModule, MatCardModule],
})

export class MaterialModule { }

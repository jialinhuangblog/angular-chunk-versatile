import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  imports: [MatButtonModule, MatSlideToggleModule, MatInputModule, MatCardModule, MatChipsModule],
  exports: [MatButtonModule, MatSlideToggleModule, MatInputModule, MatCardModule, MatChipsModule],
})

export class MaterialModule { }

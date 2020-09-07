import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  imports: [MatButtonModule, MatSlideToggleModule, MatInputModule, MatCardModule, MatChipsModule, MatProgressBarModule],
  exports: [MatButtonModule, MatSlideToggleModule, MatInputModule, MatCardModule, MatChipsModule, MatProgressBarModule],
})

export class MaterialModule { }

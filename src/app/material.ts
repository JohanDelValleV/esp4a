import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule, MatMenuModule, MatSnackBarModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule, MatMenuModule, MatSnackBarModule],
})
export class MaterialModule { }
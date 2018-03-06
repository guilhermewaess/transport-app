import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormErrorsPresenterComponent } from './shared/form-errors-presenter/form-errors-presenter.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    FormErrorsPresenterComponent
  ],
  declarations: [
    HomeComponent,
    FormErrorsPresenterComponent
  ]
})
export class ComponentsModule { }

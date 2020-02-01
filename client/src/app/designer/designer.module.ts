import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './canvas/main/main.component';
import { SimpleImageComponent } from './widgets/simple-image/simple-image.component';
import { TextComponent } from './widgets/text/text.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { 
    path: '', 
    component: MainComponent,
  },
];

@NgModule({
  declarations: [
    MainComponent,
    SimpleImageComponent,
    TextComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DesignerModule { }

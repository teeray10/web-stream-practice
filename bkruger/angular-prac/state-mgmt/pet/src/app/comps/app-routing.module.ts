import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';

const routes: Routes = [  
  { path: '', redirectTo: 'app/blog/articles', pathMatch: 'full' }, // to change to 'article' w/ latest article as route param
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

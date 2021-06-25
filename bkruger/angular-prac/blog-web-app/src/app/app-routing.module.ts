import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { BlogComponent } from './blog/blog.component';
import { InvestComponent } from './invest/invest.component';

const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'invest', component: InvestComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', redirectTo: 'blog', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

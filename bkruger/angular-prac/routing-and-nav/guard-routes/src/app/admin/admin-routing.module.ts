import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { BlogAdminComponent } from './blog/blog-admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { InvestAdminComponent } from './invest/invest-admin.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          { path: 'blog', component: BlogAdminComponent },
          { path: 'invest', component: InvestAdminComponent },
          { path: '', component: AdminDashboardComponent },
        ]
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

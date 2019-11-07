import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AuthGuard } from '../shared/guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
        // {   path: '', 
        //     loadChildren: './dashboard/dashboard.module#DashboardModule'
        // },
        {
            path: 'user',
            loadChildren: './user/user.module#UserModule',
            // canActivate: [AuthGuard]
            // loadChildren: ()=> import('./user/user.module').then(m => m.UserModule) 
        },
        {
            path: 'mentor',
            loadChildren: './mentor/mentor.module#MentorModule',
            // canActivate: [AuthGuard]
            // loadChildren: ()=> import('./mentor/mentor.module').then(m => m.MentorModule)
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

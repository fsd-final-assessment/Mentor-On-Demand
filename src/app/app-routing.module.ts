import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';
import { NotfoundComponent } from './layout/components/notfound/notfound.component';


const routes: Routes = [
  {
    path: '',
    // loadChildren: ()=> import('./layout/layout.module').then(m => m.LayoutModule),
    loadChildren: './layout/layout.module#LayoutModule',
    // canActivate: [AuthGuard]
  },
  // { path: 'login', loadChildren: ()=> import('./login/login.module').then(m => m.LoginModule) },
  // { path: 'register', loadChildren: ()=> import('./register/register.module').then(m => m.RegisterModule) },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterModule' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

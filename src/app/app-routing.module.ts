import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component'; 
import { AuthguardGuard } from './api/authguard.guard';

const routes: Routes = [
  
  {path:"",redirectTo:'login',pathMatch:'full'},
  {path:"login",component :LoginFormComponent},
  {path:"Dashboard",component:DashboardPageComponent,canActivate:[AuthguardGuard],
   children:[
    {
      path:"",
      loadChildren:() => import('./components/subjects/subjects.module').then(b=>b.SubjectsModule),canActivate:[AuthguardGuard]
    },
    {
      path:"sweep",
      loadChildren:() => import('./components/sweepblocks/sweepblocks.module').then(s=>s.SweepblocksModule),canActivate:[AuthguardGuard]
    }
   ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthguardGuard]
})
export class AppRoutingModule { }

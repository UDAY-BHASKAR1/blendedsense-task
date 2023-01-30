import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { SweepblocksComponent } from './sweepblocks.component';

const routes: Routes = [
  {path:"",component: SweepblocksComponent},
   {path:"sweep",component:SweepblocksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SweepblocksRoutingModule { }

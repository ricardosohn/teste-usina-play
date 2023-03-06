import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'manage-schedule',
    loadChildren: () => import('../../../manage-schedule/presentation/page/manage-schedule.page.module').then(
      m => m.ManageSchedulePageModule
    ),
  },
  {
    path: '',
    redirectTo: 'manage-schedule',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

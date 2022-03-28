import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './platform/guards/auth.guard';

const routes: Routes = [
      {
        path: 'user',
        loadChildren: () => import('@app/workspace-user/workspace-user.module').then(m => m.WorkspaceUserModule),
        canActivate: [AuthGuard],
      },
      {
        path: '',
        loadChildren: () => import('@app/workspace-public/workspace-public.module').then(m => m.WorkspacePublicModule),
      },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

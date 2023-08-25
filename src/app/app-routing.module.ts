import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { NoAuthGuard } from '@core/guard/no-auth.guard';
import { CONFIG } from './shared/configs';

const routes: Routes = [
  {
    path: '',
    redirectTo: CONFIG.auth.children.login.route,
    pathMatch: 'full'
  },
  {
    path: '',
    component: ContentLayoutComponent,
    canActivate: [NoAuthGuard], // Should be replaced with actual auth guard
    children: [
      {
        path: CONFIG.dashboard.name,
        loadChildren: () =>
          import('@modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: CONFIG.about.name.toLowerCase(),
        loadChildren: () =>
          import('@modules/about/about.module').then(m => m.AboutModule)
      },
      {
        path: CONFIG.contact.name,
        loadChildren: () =>
          import('@modules/contact/contact.module').then(m => m.ContactModule)
      }
    ]
  },
  {
    path: CONFIG.auth.name,
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('@modules/auth/auth.module').then(m => m.AuthModule)
  },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: CONFIG.auth.children.login.route, pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}

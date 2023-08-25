import { NgModule } from '@angular/core';

import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';

import { AuthRoutingModule } from './auth.routing';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [AuthRoutingModule, SharedModule]
})
export class AuthModule {}

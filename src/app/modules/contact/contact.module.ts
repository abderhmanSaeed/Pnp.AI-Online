import { NgModule } from '@angular/core';

import { contactRoutes } from './contact-routing.module';
import { ContactComponent } from './page/contact/contact.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [contactRoutes, SharedModule]
})
export class ContactModule {}

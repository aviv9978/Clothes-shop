import { NgModule } from '@angular/core';

import { AdminModule } from './components/admin/admin.module';
import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';


@NgModule({
  declarations: [
    PrivateComponent,
    
  ],
  imports: [PrivateRoutingModule,AdminModule],
  providers: []
})
export class PrivateModule { }


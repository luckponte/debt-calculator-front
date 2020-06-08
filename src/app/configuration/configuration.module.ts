import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ConfigurationComponent } from './configuration.component';
import { ConfigurationService } from './configuration.service';
import { ConfigurationRoutingModule } from './configuration-routing.module';

@NgModule({
  declarations: [ConfigurationComponent],
  providers: [ConfigurationService],
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[ConfigurationComponent],
})
export class ConfigurationModule { }

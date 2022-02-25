import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent, HiComponent } from './hello.component';
import { HostDirective } from './host.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, HostDirective, HiComponent],
  bootstrap: [AppComponent],
  entryComponents: [HelloComponent, HiComponent],
})
export class AppModule {}

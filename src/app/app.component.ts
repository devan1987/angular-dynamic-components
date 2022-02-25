import {
  Component,
  VERSION,
  ViewChild,
  ComponentFactoryResolver,
} from '@angular/core';
import { HelloComponent, HiComponent } from './hello.component';
import { HostDirective } from './host.directive';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  @ViewChild(HostDirective, { static: true }) childRef: HostDirective;

  constructor(public factoryRes: ComponentFactoryResolver) {}

  components = [HiComponent, HelloComponent];
  loadComponent(id) {
    console.log(this.childRef);
  }
}

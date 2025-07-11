import { Component,ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-built-by-developers',
  standalone: false,
  templateUrl: './built-by-developers.component.html',
  styleUrl: './built-by-developers.component.css',
    encapsulation: ViewEncapsulation.None   // <-- Add this line

})
export class BuiltByDevelopersComponent {

}

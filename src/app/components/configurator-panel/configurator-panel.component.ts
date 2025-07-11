import { Component, HostListener } from '@angular/core';

declare const sidebarColor: (color: string) => void;
declare const sidebarType: (type: string) => void;
declare const navbarFixed: () => void;

@Component({
  selector: 'app-configurator-panel',
  standalone: false,
  templateUrl: './configurator-panel.component.html',
  styleUrls: ['./configurator-panel.component.css']
})
export class ConfiguratorPanelComponent {
  /** Change sidebar color */
  sidebarColor(color: string): void {
    if (typeof sidebarColor === 'function') sidebarColor(color);
  }

  /** Change sidebar type */
  sidebarType(typeClass: string): void {
    if (typeof sidebarType === 'function') sidebarType(typeClass);
  }

  /** Toggle navbar fixed */
  toggleNavbarFixed(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.checked && typeof navbarFixed === 'function') {
      navbarFixed();
    } else {
      // remove fixed class if unchecked
      document.querySelector('nav.navbar-main')?.classList.remove('position-sticky', 'top-0');
    }
  }

  /** Close panel when Esc pressed */
  @HostListener('document:keydown.escape')
  closePanel(): void {
    document.querySelector('.fixed-plugin')?.classList.remove('show');
  }
}

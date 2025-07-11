import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguratorPanelComponent } from './configurator-panel.component';

describe('ConfiguratorPanelComponent', () => {
  let component: ConfiguratorPanelComponent;
  let fixture: ComponentFixture<ConfiguratorPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfiguratorPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiguratorPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

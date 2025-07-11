import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObliqueBackgroundComponent } from './oblique-background.component';

describe('ObliqueBackgroundComponent', () => {
  let component: ObliqueBackgroundComponent;
  let fixture: ComponentFixture<ObliqueBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObliqueBackgroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObliqueBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltByDevelopersComponent } from './built-by-developers.component';

describe('BuiltByDevelopersComponent', () => {
  let component: BuiltByDevelopersComponent;
  let fixture: ComponentFixture<BuiltByDevelopersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuiltByDevelopersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuiltByDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

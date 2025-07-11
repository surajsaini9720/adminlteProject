import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkWithRocketsComponent } from './work-with-rockets.component';

describe('WorkWithRocketsComponent', () => {
  let component: WorkWithRocketsComponent;
  let fixture: ComponentFixture<WorkWithRocketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkWithRocketsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkWithRocketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

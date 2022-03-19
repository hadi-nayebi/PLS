import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStageComponent } from './admin-stage.component';

describe('AdminStageComponent', () => {
  let component: AdminStageComponent;
  let fixture: ComponentFixture<AdminStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

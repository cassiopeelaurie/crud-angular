import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPageComponent } from './user-management-page';

describe('CrudPageComponent', () => {
  let component: CrudPageComponent;
  let fixture: ComponentFixture<CrudPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

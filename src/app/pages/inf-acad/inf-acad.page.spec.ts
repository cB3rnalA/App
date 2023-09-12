import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfAcadPage } from './inf-acad.page';

describe('InfAcadPage', () => {
  let component: InfAcadPage;
  let fixture: ComponentFixture<InfAcadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfAcadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

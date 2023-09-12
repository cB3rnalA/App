import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatosPersonPage } from './datos-person.page';

describe('DatosPersonPage', () => {
  let component: DatosPersonPage;
  let fixture: ComponentFixture<DatosPersonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DatosPersonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

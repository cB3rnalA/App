import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarcePage } from './registrarce.page';

describe('RegistrarcePage', () => {
  let component: RegistrarcePage;
  let fixture: ComponentFixture<RegistrarcePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistrarcePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

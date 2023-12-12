import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidDataRecPage } from './valid-data-rec.page';

describe('ValidDataRecPage', () => {
  let component: ValidDataRecPage;
  let fixture: ComponentFixture<ValidDataRecPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ValidDataRecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

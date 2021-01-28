import { ComponentFixture, TestBed } from '@angular/core/testing';
import { a1 } from '../test/data';

import { StockComponent } from './stock.component';

describe('StockComponent', () => {
  let component: StockComponent;
  let fixture: ComponentFixture<StockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call toggle (select)', () => {
    component.selectedArticles = [];
    component.toggle(a1);
    expect(component).toBeTruthy();
  });
  it('should call toggle (deselect)', () => {
    component.selectedArticles = [a1];
    component.toggle(a1);
    expect(component).toBeTruthy();
  });
  it('should call remove', () => {
    component.remove();
    expect(component).toBeTruthy();
  });
});

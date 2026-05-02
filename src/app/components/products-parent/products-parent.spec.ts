import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsParent } from './products-parent';

describe('ProductsParent', () => {
  let component: ProductsParent;
  let fixture: ComponentFixture<ProductsParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsParent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsParent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

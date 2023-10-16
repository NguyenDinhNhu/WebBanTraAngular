import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashProductComponent } from './trash-product.component';

describe('TrashProductComponent', () => {
  let component: TrashProductComponent;
  let fixture: ComponentFixture<TrashProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrashProductComponent]
    });
    fixture = TestBed.createComponent(TrashProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomecursorComponent } from './customecursor.component';

describe('CustomecursorComponent', () => {
  let component: CustomecursorComponent;
  let fixture: ComponentFixture<CustomecursorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomecursorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomecursorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

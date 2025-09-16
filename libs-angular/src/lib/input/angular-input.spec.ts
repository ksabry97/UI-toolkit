import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularInput } from './angular-input';

describe('AngularInput', () => {
  let component: AngularInput;
  let fixture: ComponentFixture<AngularInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularInput],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

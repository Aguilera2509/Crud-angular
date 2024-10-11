import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsFormComponent } from './friends-form.component';

describe('FriendsFormComponent', () => {
  let component: FriendsFormComponent;
  let fixture: ComponentFixture<FriendsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FriendsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

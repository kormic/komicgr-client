import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SideNavListComponent } from './side-nav-list.component';

describe('SideNavListComponent', () => {
  let component: SideNavListComponent;
  let fixture: ComponentFixture<SideNavListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

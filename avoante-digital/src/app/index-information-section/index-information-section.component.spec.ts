import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexInformationSectionComponent } from './index-information-section.component';

describe('IndexInformationSectionComponent', () => {
  let component: IndexInformationSectionComponent;
  let fixture: ComponentFixture<IndexInformationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexInformationSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexInformationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

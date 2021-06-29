import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCreateNewComponent } from './article-create-new.component';

describe('ArticleCreateNewComponent', () => {
  let component: ArticleCreateNewComponent;
  let fixture: ComponentFixture<ArticleCreateNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleCreateNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCreateNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

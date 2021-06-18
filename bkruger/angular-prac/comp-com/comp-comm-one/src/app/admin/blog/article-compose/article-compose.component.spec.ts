import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleComposeComponent } from './article-compose.component';

describe('ArticleComposeComponent', () => {
  let component: ArticleComposeComponent;
  let fixture: ComponentFixture<ArticleComposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleComposeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

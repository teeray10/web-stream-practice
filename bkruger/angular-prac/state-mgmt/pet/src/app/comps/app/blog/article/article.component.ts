import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { DarkThemeState } from 'src/app/store/reducers/dark-theme/darktheme.reducer';
import { selectDarkTheme } from 'src/app/store/selectors/dark-theme/darktheme.selectors';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  darkTheme$ = this.store.pipe(select(selectDarkTheme));

  constructor(private store: Store<DarkThemeState>) { }

  ngOnInit(): void {
  }

}

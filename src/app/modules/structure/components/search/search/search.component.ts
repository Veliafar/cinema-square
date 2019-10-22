import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { SearchFormBuilder } from './services/search-form.builder';
import { FilmService } from 'shared/services/film.service';
import { FilmType, PlotType } from 'shared/services/models/enums';

import { I18NextCapPipe } from 'angular-i18next';


@Component({
  selector: 'csb-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  date: Date = new Date();
  form: FormGroup;

  // tslint:disable-next-line: variable-name
  _enums = {
    FilmType,
    PlotType
  };

  constructor(
    private filmService: FilmService,
    private searchFormBuilder: SearchFormBuilder,
    private i18nextCap: I18NextCapPipe
  ) {
    this.form = this.searchFormBuilder.buildForm();
  }

  ngOnInit() {
  }

  searchFilms(filter) {
    this.filmService.getFilms(filter)
      .pipe()
      .subscribe(res => {
        console.log(res);
      });
  }
}

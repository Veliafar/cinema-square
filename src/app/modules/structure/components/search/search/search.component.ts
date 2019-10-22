import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


import { FilmService } from 'shared/services/film.service';
import { FilmType, PlotType } from 'shared/services/models/enums';

import { SearchFilmIdTitleFilter } from 'shared/services/models/search-film-filter-by-id-title.model';
import { SearchFormBuilder } from './services/search-form.builder';
import { SearchByIdTitleBuilder } from './services/search-by-id-title-form.builder';
import { SearchFilmFilter } from 'shared/services/models/search-film-filter.model';


@Component({
  selector: 'csb-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  date: Date = new Date();
  searchByIdTitleForm: FormGroup;
  searchForm: FormGroup;

  // tslint:disable-next-line: variable-name
  _enums = {
    FilmType,
    PlotType
  };

  constructor(
    private filmService: FilmService,
    private searchFormBuilder: SearchFormBuilder,
    private searchByIdTitleFormBuilder: SearchByIdTitleBuilder
  ) {
    this.searchForm = this.searchFormBuilder.buildForm();
    this.searchByIdTitleForm = this.searchByIdTitleFormBuilder.buildForm();
  }

  ngOnInit() {
  }

  getById(filter: SearchFilmIdTitleFilter) {
    this.filmService.getFilms(filter)
      .subscribe(
        res => {
          console.log(res);
        }
      )
  }

  searchFilms(filter: SearchFilmFilter) {
    this.filmService.getFilms(filter)
      .subscribe(
        res => {
          console.log(res);
        }
      )
  }

  clear(form: FormGroup) {
    form.reset();
  }
}

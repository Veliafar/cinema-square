import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';


import { FilmService } from 'shared/services/film.service';
import { FilmType, PlotType, SearchType } from 'shared/services/models/enums';

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

  @Output() exactSearchEmit = new EventEmitter<SearchFilmIdTitleFilter>();
  @Output() freeSearchEmit = new EventEmitter<SearchFilmFilter>();

  // tslint:disable-next-line: variable-name
  _enums = {
    FilmType,
    PlotType,
    SearchType
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

  freeFilmsSearch(filter) {
    this.freeSearchEmit.emit(filter);
  }

  exactFilmSearch(filter) {
    this.exactSearchEmit.emit(filter);
  }

  clear(form: FormGroup) {
    form.reset();
  }

}

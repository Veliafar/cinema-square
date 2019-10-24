import { Component, OnInit } from '@angular/core';
import { FilmService } from 'shared/services/film.service';

import {
  FilmType,
  PlotType
} from './../../../../shared/services/models/enums';

@Component({
  selector: 'csb-film-grid',
  templateUrl: './film-grid.component.html',
  styleUrls: ['./film-grid.component.less']
})
export class FilmGridComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  _enums = {
    FilmType,
    PlotType
  };

  constructor(
    private filmService: FilmService
  ) { }

  ngOnInit() {
  }

  viewDetails(id) {
    console.log(id);
  }

}

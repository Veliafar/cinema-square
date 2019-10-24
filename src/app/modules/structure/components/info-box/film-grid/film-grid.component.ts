import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
export class FilmGridComponent {

  // tslint:disable-next-line: variable-name
  _enums = {
    FilmType,
    PlotType
  };

  constructor(
    private filmService: FilmService,
    private router: Router
  ) { }

  viewDetails(id: string) { 
    this.filmService.isDataExist = false;    
    this.router.navigate([`/film-details/${id}`]);
  }
}

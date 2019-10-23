import { Component, OnInit } from '@angular/core';
import { FilmService } from 'shared/services/film.service';

@Component({
  selector: 'csb-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.less']
})
export class FilmDetailsComponent implements OnInit {

  constructor(
    private filmService: FilmService
  ) { }

  ngOnInit() {
  }

}

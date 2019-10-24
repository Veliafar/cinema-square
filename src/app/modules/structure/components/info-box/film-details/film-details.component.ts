import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FilmService } from 'shared/services/film.service';
import {
  FilmType,
  PlotType
} from './../../../../shared/services/models/enums';
import { ExactSearchModel } from 'shared/services/models/exact-search.model';


@Component({
  selector: 'csb-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.less']
})
export class FilmDetailsComponent {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  private subscription: Subscription;

  id: string;
 
  _enums = {
    FilmType,
    PlotType
  };

  constructor(
    private filmService: FilmService,
    private activateRoute: ActivatedRoute
  ) {
    this.subscription = activateRoute.params
      .subscribe(params => {
        this.id = params['id'];
        this.getById(this.id);
      });
  }

  getById(id: string) {
    this.filmService.getById(id)
      .pipe(
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe((res: ExactSearchModel) => {
        if (res.Response === 'True') {
          this.filmService.exactFilm = res;
          this.filmService.isDataExist = true;
        }
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}

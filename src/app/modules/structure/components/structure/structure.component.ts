import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { FreeSearchModel } from 'shared/services/models/free-search.model';
import { ExactSearchModel } from 'shared/services/models/exact-search.model';
import { SearchFilmIdTitleFilter } from 'shared/services/models/search-film-filter-by-id-title.model';
import { FilmService } from 'shared/services/film.service';
import { SearchFilmFilter } from 'shared/services/models/search-film-filter.model';
import { FreeSearchListModel } from 'shared/services/models/free-search-list.model';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'csb-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.less']
})
export class StructureComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  searchedFilms: FreeSearchModel[] = new Array<FreeSearchModel>();
  totalResults: number;

  exactFilm: ExactSearchModel = new ExactSearchModel();

  constructor(
    private filmService: FilmService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  exactFilmSearchStart(filter: SearchFilmIdTitleFilter) {

    this.filmService.getFilms(filter)
      .pipe(
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe(
        (res: ExactSearchModel) => {
          
          this.filmService.exactFilm = null;
          if (res.Response === 'True') {
            this.filmService.exactFilm = res;
            this.router.navigate(['/film-details']);
          }
          
        }
      )
  }

  freeFilmsSearchStart(filter: SearchFilmFilter) {

    this.filmService.getFilms(filter)
      .pipe(
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe(
        (res: FreeSearchListModel) => {
          console.log(res);

          this.searchedFilms = res.Search;
          this.totalResults = +res.totalResults;

          console.log(this.searchedFilms);
          console.log(this.totalResults);

        }
      )
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}

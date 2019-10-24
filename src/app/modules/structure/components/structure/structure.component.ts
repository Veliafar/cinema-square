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
export class StructureComponent implements OnDestroy {
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  searchedFilms: FreeSearchModel[] = new Array<FreeSearchModel>();
  totalResults: number;

  exactFilm: ExactSearchModel = new ExactSearchModel();

  constructor(
    private filmService: FilmService,
    private router: Router
  ) { }

  exactFilmSearchStart(filter: SearchFilmIdTitleFilter) {

    this.filmService.getFilms(filter)
      .pipe(
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe(
        (res: ExactSearchModel) => {
          this.filmService.isDataExist = false;
          if (res.Response === 'True') {
            
            this.filmService.exactFilm = res;
            this.filmService.isDataExist = true;
            this.router.navigate([`/film-details/${this.filmService.exactFilm.imdbID}`]);
          }
        }
      );
  }

  freeFilmsSearchStart(filter: SearchFilmFilter) {

    this.filmService.getFilms(filter)
      .pipe(
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe(
        (res: FreeSearchListModel) => {
          this.filmService.isDataExist = false;

          if (res.Response === 'True') {
            this.filmService.searchedFilms = res.Search;
            this.filmService.isDataExist = true;
            this.router.navigate(['/film-grid']);
          }
        }
      );
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}

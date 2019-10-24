import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BaseApi } from '../core/base-api';
import { SearchFilmFilter } from './models/search-film-filter.model';
import 'rxjs/add/operator/map'
import { SearchFilmIdTitleFilter } from './models/search-film-filter-by-id-title.model';
import { SearchType } from './models/enums';
import { ExactSearchModel } from './models/exact-search.model';
import { FreeSearchModel } from './models/free-search.model';
import { element } from 'protractor';


@Injectable()
export class FilmService extends BaseApi {

    favoriteList: FreeSearchModel[] = new Array<FreeSearchModel>();

    isDataExist: boolean = false;

    searchType: SearchType = SearchType.freeSearch;

    exactFilm: ExactSearchModel = new ExactSearchModel();
    searchedFilms: FreeSearchModel[] = new Array<FreeSearchModel>();
    totalResults: number;

    constructor(
        public http: HttpClient
    ) {
        super(http);
    }

    getFilms(filter: SearchFilmFilter | SearchFilmIdTitleFilter): Observable<any> {
        let query = '';
        for (const key in filter) {
            if (filter.hasOwnProperty(key) && filter[key]) {
                const element = filter[key];
                query = query + '&' + key + '=' + element;
            }
        }
        return this.get(`${query}`)
            .map((res => {
                return res;
            }));
    }

    getById(id) {
        return this.get(`&i=${id}`)
            .map((res => {
                return res;
            }));
    }


    addToList(film: FreeSearchModel) {
        const newFilm = Object.assign({}, film);
        this.favoriteList.push(newFilm);

    }

    removeFromList(imdbID: string) {
        this.favoriteList.forEach((item, index) => {
            if (item.imdbID === imdbID) this.favoriteList.splice(index, 1);
        });
    }

    isFilmInList(imdbID: string) {
        return this.favoriteList.find((el: FreeSearchModel) => {
            return el.imdbID === imdbID;
        });
    }
}


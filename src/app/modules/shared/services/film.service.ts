import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BaseApi } from '../core/base-api';
import { SearchFilmFilter } from './models/search-film-filter.model';
import 'rxjs/add/operator/map'
import { SearchFilmIdTitleFilter } from './models/search-film-filter-by-id-title.model';
import { SearchType } from './models/enums';


@Injectable()
export class FilmService extends BaseApi {

    searchType: SearchType = SearchType.freeSearch;

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
}


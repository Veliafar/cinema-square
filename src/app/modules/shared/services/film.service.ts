import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BaseApi } from '../core/base-api';
import { SearchFilmFilter } from './models/search-film-filter.model';

@Injectable()
export class FilmService extends BaseApi {
    constructor(
        public http: HttpClient
    ) {
        super(http);
    }


    getFilms(filter: SearchFilmFilter): Observable<any> {
        return this.get(`?${filter}`)
            .map((res => {
                return res;
            }));
    }
}


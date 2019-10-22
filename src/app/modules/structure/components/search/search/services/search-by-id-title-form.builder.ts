import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchFilmIdTitleFilter } from 'shared/services/models/search-film-filter-by-id-title.model';

@Injectable()
export class SearchByIdTitleBuilder {
    constructor(private fb: FormBuilder) {}

    buildForm(model: SearchFilmIdTitleFilter = new SearchFilmIdTitleFilter()): FormGroup {
        if (!model) {
            return null;
        }
        return this.fb.group({ 
            i: [
                model.i,
                [
                ]
            ],
            t: [
                model.t,
                [
                ]
            ],
            type: [model.type, []],
            y: [
                model.y,
                [
                ]
            ],
            plot: [model.plot, []]
        });
    }
}

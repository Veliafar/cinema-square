import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchFilmFilter } from 'src/app/modules/shared/services/models/search-film-filter.model';

@Injectable()
export class SearchFormBuilder {
    constructor(private fb: FormBuilder) {}

    buildForm(model: SearchFilmFilter = new SearchFilmFilter()): FormGroup {
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

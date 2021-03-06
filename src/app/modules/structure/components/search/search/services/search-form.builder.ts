import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchFilmFilter } from 'shared/services/models/search-film-filter.model';

@Injectable()
export class SearchFormBuilder {
    constructor(private fb: FormBuilder) {}

    buildForm(model: SearchFilmFilter = new SearchFilmFilter()): FormGroup {
        if (!model) {
            return null;
        }
        return this.fb.group({ 
            s: [
                model.s,
                [
                ]
            ],
            page: [
                model.page,
                [
                ]
            ],
            type: [model.type, []],
            y: [
                model.y,
                [
                ]
            ]
        });
    }
}

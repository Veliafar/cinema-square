import { FilmType } from './enums/film-type.enum';
import { PlotType } from './enums/plot-type.enum';


export class SearchFilmFilter {

    // Movie title to search for.
    s: string;

    // Type of result to return.
    type: FilmType;

    // Year of release.
    y: string;

    // Page number to return.
    page: number;

    constructor() {
        this.s = null;
        this.type = null;
        this.y = null;
        this.page  = null;
    }
}

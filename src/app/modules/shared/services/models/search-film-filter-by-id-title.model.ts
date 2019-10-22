import { FilmType } from './enums/film-type.enum';
import { PlotType } from './enums/plot-type.enum';


export class SearchFilmIdTitleFilter {

    // A valid IMDb ID (e.g. tt1285016)
    i: string;

    // Movie title to search for.
    t: string;

    // Type of result to return.
    type: FilmType;

    // Year of release.
    y: string;

    // Return short or full plot.
    plot: PlotType;

    constructor() {
        this.i = null;
        this.t = null;
        this.type = null;
        this.y = null;
        this.plot  = null;
    }
}

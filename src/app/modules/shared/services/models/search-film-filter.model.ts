import { FilmType } from './enums/film-type.enum';
import { PlotType } from './enums/plot-type.enum';


export class SearchFilmFilter {

    // A valid IMDb ID (e.g. tt1285016)
    i: string = undefined;

    // Movie title to search for.
    t: string = undefined;

    // Type of result to return.
    type: FilmType = null;

    // Year of release.
    y: string = undefined;

    // Return short or full plot.
    plot: PlotType = undefined;

    constructor() {
    }
}

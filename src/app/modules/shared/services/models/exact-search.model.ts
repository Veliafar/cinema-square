import { FilmType } from './enums';
import { FreeSearchModel } from './free-search.model';
import { Rating } from './rating.model';

export class ExactSearchModel implements FreeSearchModel {
    Poster: string;
    Title: string;
    Type: FilmType;
    imdbID: string;
    Year: string;

    Actors: string;
    Awards: string;
    BoxOffice: string;
    Country: string;
    DVD: string;
    Director: string;
    Genre: string;
    Language: string;
    Plot: string;
    Production: string;
    Rated: string;
    Ratings: Rating[];
    Released: string;
    Runtime: string;
    Website: string;
    Writer: string;
    imdbRating: string;
    imdbVotes: string;

    Response: string;
}
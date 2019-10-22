import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilmService } from './services/film.service';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [FilmService]
})

export class SharedModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    StructureComponent,
    FilmDetailsComponent,
    FilmGridComponent
} from './components';

const routes: Routes = [
    {
        path: '', component: StructureComponent, children: [
            {
                path: 'film-grid',
                component: FilmGridComponent,
            },
            {
                path: 'film-details',
                component: FilmDetailsComponent,
            }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StructureRoutingModule { }

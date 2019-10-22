import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularEnumsListModule } from 'angular-enum-list';
import { I18NEXT_NAMESPACE, I18NextModule } from 'angular-i18next';

import { StructureRoutingModule } from './structure-routing.component';
import { SharedModule } from 'shared/shared.module';


import {
    SearchComponent,
    FilmGridComponent,
    FilmDetailsComponent,
    StructureComponent,
    SearchFormBuilder,
    SearchByIdTitleBuilder
} from './components';

@NgModule({
    imports: [
        CommonModule,
        AngularEnumsListModule,
        StructureRoutingModule,
        SharedModule,
        I18NextModule
    ],
    declarations: [
        StructureComponent,
        SearchComponent,
        FilmGridComponent,
        FilmDetailsComponent,
        SearchComponent
    ],
    providers: [
        SearchFormBuilder,
        SearchByIdTitleBuilder,
        {
            provide: I18NEXT_NAMESPACE,
            useValue: ['search', 'enums']
        },
    ]
})
export class StructureModule { }

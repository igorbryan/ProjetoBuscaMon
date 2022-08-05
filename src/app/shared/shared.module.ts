import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//Components
import { BuscaHeaderComponent } from './busca-header/busca-header.component';
import { BuscaSearchComponent } from './busca-search/busca-search.component';
import { BuscaListComponent } from './busca-list/busca-list.component';

@NgModule({
  declarations: [
    BuscaHeaderComponent,
    BuscaSearchComponent,
    BuscaListComponent
  ],
  exports: [
    BuscaHeaderComponent,
    BuscaSearchComponent,
    BuscaListComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }

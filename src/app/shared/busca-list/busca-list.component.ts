import { Component, OnInit } from '@angular/core';
import { BuscaApiService } from 'src/app/service/busca-api.service';

@Component({
  selector: 'busca-list',
  templateUrl: './busca-list.component.html',
  styleUrls: ['./busca-list.component.scss']
})
export class BuscaListComponent implements OnInit {

  public getAllPokemons: any;
  private setAllPokemons: any;

  constructor(
    private buscaApiService: BuscaApiService
  ) { }

  ngOnInit(): void {
    this.buscaApiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      }
    );
  }

  public getSearch(value: string){
    const filter = this.setAllPokemons.filter( (res: any ) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.getAllPokemons = filter;
  }
}

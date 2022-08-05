import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'busca-search',
  templateUrl: './busca-search.component.html',
  styleUrls: ['./busca-search.component.scss']
})
export class BuscaSearchComponent implements OnInit {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public search(value: string){
    this.emmitSearch.emit(value);
  }
}

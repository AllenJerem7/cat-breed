import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { CatBreeds } from 'src/app/models/cat-breeds.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  @Input()
  catBreeds: CatBreeds[];

  @Input()
  loading: boolean;

  @Input()
  cols: any[];

  constructor() { }

  ngOnInit(): void {
  }

  clear(table: Table) {
    table.clear();
}
}

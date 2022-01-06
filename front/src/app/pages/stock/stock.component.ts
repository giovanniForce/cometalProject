import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AjoutEquiService } from 'src/app/services/ajoutEqui.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name_equi: string;
  etat: string;
  codeEqui: number;
  quantite: number;
}

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);

  displayedColumns: string[] = ['name_equi', 'etat', 'codeEqui', 'quantite'];
  clickedRows = new Set<PeriodicElement>();
  constructor(
    private ajoutEqui: AjoutEquiService
  ) { 
    this.getAjoutEqui();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  getAjoutEqui() {
    this.ajoutEqui.get('/equi').subscribe(
      (data) => {
        this.dataSource.data = data;
      },
      (error) => {
        console.error(error)
      },
      () => {
        console.log('GET DONE');
      }
    )
  }

  ngOnInit(): void {
  }

}

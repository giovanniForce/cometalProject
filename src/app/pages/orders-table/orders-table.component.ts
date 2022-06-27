import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { InterventionService } from 'src/app/services/intervention.service';


@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss']
})
export class OrdersTableComponent implements AfterViewInit {
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'nameEqui', 'codeEqui', 'probleme', 'departement', 'checkbox'];

  constructor(
    private intervention: InterventionService
  ) {
    this.getIntervention();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  getIntervention() {
    this.intervention.get('/stuff').subscribe(
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
}

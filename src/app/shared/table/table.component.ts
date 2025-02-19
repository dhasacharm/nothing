import { Component, Input, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() headers: string[] = []; // Column headers
  @Input() data: any[] = []; // Static Data
  @Input() apiUrl: string = ''; // API URL
  @Input() enableApiPagination: boolean = false; // Use API Pagination

  displayedColumns: string[] = []; 
  dataSource = new MatTableDataSource<any>([]);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadData();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && changes['data'].currentValue) {
      this.loadTableData(changes['data'].currentValue);
    }
    if (changes['apiUrl'] && changes['apiUrl'].currentValue) {
      this.fetchApiData();
    }
  }

  loadData() {
    if (this.apiUrl) {
      this.fetchApiData();
    } else {
      this.loadTableData(this.data);
    }
  }

  fetchApiData() {
    const apiEndpoint = `${this.apiUrl}`; // Adjust API params if needed
    this.http.get<any>(apiEndpoint).subscribe(response => {
      this.loadTableData(response.data); // Assume { data: [], total: number }
    });
  }

  loadTableData(tableData: any[]) {
    this.dataSource.data = tableData;
    console.log(this.dataSource)
    this.displayedColumns = this.headers;
    setTimeout(() => {
      if (this.paginator) this.dataSource.paginator = this.paginator;
      if (this.sort) this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

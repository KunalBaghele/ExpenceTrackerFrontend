import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ExpenseserviceService } from '../expenseservice.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ExpenseformComponent } from '../expenseform/expenseform.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.css'
})
export class ExpenseComponent implements OnInit {
  displayedColumns: string[] = ['participantName', 'amount', 'description', 'group', 'dateTime'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private expenseService: ExpenseserviceService,
    private dialog: MatDialog,
    private router:Router,
    ) {}

  ngOnInit() {
    this.getAllExp();
  }
getAllExp(){
  this.expenseService.getAllExpenses()
      .subscribe(expenses => {
        this.dataSource.data =  expenses as any[];
      });
}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openAddExpenseDialog() {
    const dialogRef = this.dialog.open(ExpenseformComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(()=>this.getAllExp())
  }

}

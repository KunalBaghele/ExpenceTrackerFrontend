import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { AddparticipantComponent } from '../addparticipant/addparticipant.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ExpenseserviceService } from '../expenseservice.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrl: './participant.component.css'
})
export class ParticipantComponent implements OnInit {
  displayedColumns: string[] = ['name', 'groupName'];
  dataSource = new MatTableDataSource<any>();
  participants: any[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private expenseService: ExpenseserviceService,
  ) {
    // this.sort = new MatSort();
    // this.paginator=new MatPaginator();
    // console.log(this.data);
  }


  ngOnInit() {
    this.fetchParticipants();
  }

  fetchParticipants() {
    this.expenseService.fetchParticipants()
      .subscribe(participants => {
        this.participants = participants;
        this.dataSource.data = this.participants;
      });
    // console.log(this.participants);

  }

  openAddParticipantDialog() {
    const add=this.dialog.open(AddparticipantComponent);
    add.afterClosed().subscribe(() => this.fetchParticipants());
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

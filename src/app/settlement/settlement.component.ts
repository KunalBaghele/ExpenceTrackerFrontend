import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { ExpenseserviceService } from '../expenseservice.service';

@Component({
  selector: 'app-settlement',
  templateUrl: './settlement.component.html',
  styleUrl: './settlement.component.css'
})
export class SettlementComponent implements OnInit {
  groupNames: any[] = [];
  selectedGroupName: string = '';
  dataSource!: MatTableDataSource<any>;

  displayedColumns: string[] = ['participantName', 'equalShare', 'settlementAmount'];

  constructor(private http: HttpClient, private expense: ExpenseserviceService) {}

  ngOnInit() {
    this.fetchGroupNames();
  }

  fetchGroupNames() {
    this.expense.getAllGroups()
      .subscribe(data => {
        this.groupNames = data as any;
      });
  }

  fetchSettlements() {
    if (this.selectedGroupName) {
      const groupName = this.selectedGroupName;

      this.expense.getSettlementForGroup(groupName).subscribe(
        data => {
          this.dataSource = new MatTableDataSource(data as any); // Assign data to dataSource
        }
      );
    } else {
      console.error('Please select a group first.');
    }
  }
}

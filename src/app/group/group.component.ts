import { Component,OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { ExpenseserviceService } from '../expenseservice.service';
import { MembersComponent } from '../members/members.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrl: './group.component.css'
})
export class GroupComponent implements OnInit {
  displayedColumns: string[] = ['name', 'totalExpense'];
  dataSource = new MatTableDataSource<any>();
  groups: any[] = [];
  newGroupName = '';

  constructor(private http: HttpClient, private dialog: MatDialog,
     private service:ExpenseserviceService,
     private router:Router,
     ) {}

  ngOnInit() {
    this.fetchAllGroups();
  }

  fetchAllGroups() {
    this.service.fetchGroups()
      .subscribe(groups => {
        this.groups = groups;
        this.dataSource.data = groups;
      },
    (error) => {
      console.error('Error:', error);
    });
  }

  addNewGroup() {
    this.service.addGroup(this.newGroupName)
      .subscribe(group => {
        this.groups.push(group);
        this.dataSource.data = this.groups;
        this.newGroupName = '';
        this.router.navigate(['/groups']);
      });
  }

  viewMembers(groupId: number) {
    this.service.getGroupById(groupId)
      .subscribe(group => {
        const memberDialogRef = this.dialog.open(MembersComponent, {
          data: { groupId,group }
        });
        memberDialogRef.afterClosed().subscribe(() => this.fetchAllGroups());
      });
  }
}

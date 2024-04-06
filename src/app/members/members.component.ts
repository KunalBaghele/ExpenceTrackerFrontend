import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ExpenseserviceService } from '../expenseservice.service';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrl: './members.component.css'
})
export class MembersComponent implements OnInit{
  members:any;
  groupNmae:any;
  constructor(
    private dialogRef: MatDialogRef<MembersComponent>,
    private expenseService: ExpenseserviceService,
    @Inject(MAT_DIALOG_DATA) private data: { groupId: number }


  ) {
    // console.log(this.data);
  }
ngOnInit(): void {
  this.expenseService.getGroupById(this.data.groupId).subscribe(group => {

    this.members = group.participants;
    this.groupNmae=group.name;
  });
}
}

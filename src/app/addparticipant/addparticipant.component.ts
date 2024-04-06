import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ExpenseserviceService } from '../expenseservice.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addparticipant',
  templateUrl: './addparticipant.component.html',
  styleUrl: './addparticipant.component.css'
})
export class AddparticipantComponent implements OnInit {
  addForm!: FormGroup;
  groups: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private expenseService: ExpenseserviceService,
    private dialogRef: MatDialogRef<AddparticipantComponent>,
    private router:Router,
  ) { }

  ngOnInit() {
    this.fetchGroups();
    this.addForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      group: new FormControl('', Validators.required)
    });
  }

  fetchGroups() {
    this.expenseService.fetchGroups()
      .subscribe(groups => {
        this.groups = groups;
      });
  }

  submitParticipant() {
    const formData = this.addForm.value;
    // console.log(formData, this.addForm);

    const participantData = {
      name: formData.name,
      group: {
        name: formData.group
      }
    };
   this.expenseService.addParticipant(participantData)
      .subscribe(() => {
        this.dialogRef.close();
      });

  }
}

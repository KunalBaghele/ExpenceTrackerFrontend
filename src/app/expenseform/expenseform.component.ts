import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExpenseserviceService } from '../expenseservice.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expenseform',
  templateUrl: './expenseform.component.html',
  styleUrl: './expenseform.component.css'
})
export class ExpenseformComponent implements OnInit {
  expenseForm!:FormGroup;
  participants: any[] = [];

  constructor(private expenseService: ExpenseserviceService,
    private dialogRef: MatDialogRef<ExpenseformComponent>,
    private router : Router,
    ) {}

  ngOnInit() {
    this.expenseForm = new FormGroup({
      description: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
      participant: new FormControl(null),

    });
    this.expenseService.fetchParticipants()
      .subscribe(participants => {
        this.participants = participants;
      });
  }

  onSubmit() {
    const expenseData = this.expenseForm.value;

    // Construct the participant object with only the ID
    const participant = { id: expenseData.participant };

    // Create the expense object with the desired format
    const expense = {
      description: expenseData.description,
      amount: expenseData.amount,
      participant
    };

    // Send the expense data to the service
    this.expenseService.addExpense(expense)
      .subscribe(() => {
        // Handle successful addition, e.g., close the dialog
        this.dialogRef.close(true); // Close the dialog and optionally pass a result

      });
  }

}

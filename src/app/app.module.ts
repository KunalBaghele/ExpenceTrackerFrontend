import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupComponent } from './group/group.component';
import { ParticipantComponent } from './participant/participant.component';
import { ExpenseComponent } from './expense/expense.component';
import { SettlementComponent } from './settlement/settlement.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MembersComponent } from './members/members.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { AddparticipantComponent } from './addparticipant/addparticipant.component';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { ExpenseformComponent } from './expenseform/expenseform.component';


@NgModule({
  declarations: [
    AppComponent,
    GroupComponent,
    ParticipantComponent,
    ExpenseComponent,
    SettlementComponent,
    NavbarComponent,
    MembersComponent,
    AddparticipantComponent,
    ExpenseformComponent
  ],
  imports: [
    BrowserModule, MatToolbarModule, MatTableModule, MatFormFieldModule, MatPaginator, MatIconButton,
    AppRoutingModule, MatButtonModule, BrowserAnimationsModule, MatInputModule, MatPaginatorModule, MatIconModule,
    FormsModule, ReactiveFormsModule, HttpClientModule, MatDialogModule, MatListModule, MatPaginator, MatSortModule,
    MatSelectModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
